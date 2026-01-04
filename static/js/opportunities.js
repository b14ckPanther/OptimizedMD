document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("opportunities");
  if (!section) return;

  const items = Array.from(section.querySelectorAll(".opp-item"));
  const tabs  = Array.from(section.querySelectorAll(".opp-tab"));

  const image = document.getElementById("opp-image");
  const title = document.getElementById("opp-title");
  const text  = document.getElementById("opp-text");
  const button = document.getElementById("opp-btn");

  if (!image || !title || !text || !button) return;

  let currentIndex = 0;
  let intervalId = null;

  function activate(index) {
    const item = items.find(i => Number(i.dataset.index) === index);
    if (!item) return;

    tabs.forEach(t => t.classList.remove("active"));
    if (tabs[index]) {
      tabs[index].classList.add("active");
    }

    image.src = item.dataset.img;
    title.textContent = item.dataset.title;
    text.textContent = item.dataset.text;
    button.textContent = item.dataset.button || "Learn More";

    currentIndex = index;
  }

  function startAuto() {
    stopAuto(); // prevent duplicates
    intervalId = setInterval(() => {
      const next = (currentIndex + 1) % items.length;
      activate(next);
    }, 5000);
  }

  function stopAuto() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Click handling
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const index = Number(tab.dataset.index);
      activate(index);
      startAuto(); // restart timer after manual click
    });
  });

  // Start
  if (items.length > 0) {
    activate(0);
    startAuto();
  }
});

