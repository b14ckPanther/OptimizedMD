document.addEventListener("DOMContentLoaded", () => {
  const solutionsSection = document.getElementById("solutions");
  if (!solutionsSection) return;

  const cards = Array.from(solutionsSection.querySelectorAll(".solution-card"));

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) || (
      rect.top < window.innerHeight && rect.bottom > 0
    );
  }

  // Function to trigger landing animation
  function triggerLanding() {
    // Animate all cards together
    cards.forEach((card) => {
      if (isInViewport(card) && !card.classList.contains("landed")) {
        card.classList.add("landed");
      }
    });
  }

  // Initial check
  triggerLanding();

  // Check on scroll
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        triggerLanding();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Check on resize (in case viewport changes)
  window.addEventListener("resize", () => {
    triggerLanding();
  });
});

