const socket = io();
const button = document.querySelector(".center-button");

// socket.on("alert-mode", (reason) => {
//   console.log(reason);
// });

// DENEME
console.log("Hello world");

button.addEventListener("click", (e) => {
  e.preventDefault();
  socket.emit("alert-mode");
});
