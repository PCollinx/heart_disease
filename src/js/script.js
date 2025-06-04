import "core-js/stable";
import "regenerator-runtime/runtime";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".content-container .question").forEach((q) => {
    q.addEventListener("click", function () {
      const container = this.parentElement;
      container.classList.toggle("active");
    });
  });
});
