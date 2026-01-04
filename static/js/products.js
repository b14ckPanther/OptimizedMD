document.addEventListener("DOMContentLoaded", () => {
  const productsSection = document.getElementById("product");
  if (!productsSection) return;

  const cards = Array.from(productsSection.querySelectorAll(".product-card"));
  const wideCard = productsSection.querySelector(".product-card-wide");

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
    // Animate wide card first
    if (wideCard && isInViewport(wideCard) && !wideCard.classList.contains("landed")) {
      wideCard.classList.add("landed");
    }

    // Animate all grid cards together
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

