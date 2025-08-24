    let count = 0;
    const countEl = document.getElementById("count");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const resetBtn    = document.getElementById("reset");

    increaseBtn.addEventListener("click", () => {
      count++;
      updateCounter();
    });

    decreaseBtn.addEventListener("click", () => {
      count--;
      updateCounter();
    });

    resetBtn.addEventListener("click", () => {
      count = 0;
      updateCounter();
    });

    function updateCounter() {
      countEl.textContent = count;
      if (count > 0) {
        countEl.style.color = "#10b981"; // سبز
      } else if (count < 0) {
        countEl.style.color = "#ef4444"; // قرمز
      } else {
        countEl.style.color = "#4c1d95"; // بنفش
      }
    }