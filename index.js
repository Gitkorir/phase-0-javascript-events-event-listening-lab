function addingEventListener() {
  const input = document.getElementById("button");
  input.addEventListener("click", (e) => {
    console.log("button clicked!");
  });
}
if (typeof module !== "undefined" || module.exports) {
  module.exports = {
    addingEventListener,
  };
}
