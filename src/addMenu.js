export function addMenu() {
  document.querySelector(".menu").addEventListener("click", function () {
    document.querySelector(".menuC").classList.toggle("vissible");
  });
}
