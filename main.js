const characters = ["Eren Jaeger", "Mikasa Ackerman", "Armin Arlet", "Levi Ackerman", "Krista Lenz", "Hange Zoe", "Sasha Blouse", "Erwin Smith" ];
let characterGenerator = document.getElementById("btn");
let myLabel = document.getElementById("lbl");

characterGenerator.addEventListener("click", myFunction);

function myFunction() {
    const random = Math.floor(Math.random() * characters.length);
for (let i = 0; i < characters.length; i++) {
  random;
  myLabel.innerHTML = characters[random];
}}









