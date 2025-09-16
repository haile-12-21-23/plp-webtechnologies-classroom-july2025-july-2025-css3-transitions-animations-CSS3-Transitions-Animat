// --- Part 2: Functions with Parameters & Return Values ---
// A reusable function that adds a class for animation
function triggerAnimation(elementId, animationClass) {
  const el = document.getElementById(elementId);
  el.classList.add(animationClass);

  // Remove class after animation ends so it can be reused
  el.addEventListener("animationend", () => {
    el.classList.remove(animationClass);
  });

  return `Triggered ${animationClass} on #${elementId}`;
}

// Example of scope (global vs local)
let globalCounter = 0;

function incrementCounter(step) {
  let localCounter = step; // local scope
  globalCounter += localCounter;
  return globalCounter;
}

// --- Part 3: JS triggers CSS animations ---
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  console.log(triggerAnimation("animateBox", "animate"));
  console.log("Counter value:", incrementCounter(1));
});

// Modal open/close
const modal = document.getElementById("modal");
document.getElementById("openModalBtn").addEventListener("click", () => {
  modal.style.display = "flex";
});
document.getElementById("closeModalBtn").addEventListener("click", () => {
  modal.style.display = "none";
});
