const characters = ["Eren Jaeger", "Mikasa Ackerman", "Armin Arlet", "Levi Ackerman", "Krista Lenz", "Hange Zoe", "Sasha Blouse", "Erwin Smith", "Jean Kirstein", "Connie Springer", "Ymir", "Annie Leonhart", "Reiner Braun", "Bertolt Hoover", "Zeke Jaeger", "Grisha Jaeger", "Carla Jaeger", "Rod Reiss", "Kenny Ackermann"  ];
let characterGenerator = document.getElementById("btn");
let myLabel = document.getElementById("lbl");

characterGenerator.addEventListener("click", myFunction);

function myFunction() {
    const random = Math.floor(Math.random() * characters.length);
for (let i = 0; i < characters.length; i++) {
  random;
  myLabel.innerHTML = characters[random];
}}









