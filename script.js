const character = document.getElementById("character");
const block = document.getElementById("block");
const block2 = document.getElementById("block2");
// const block3 = document.getElementById("block3");
const button = document.getElementById("start");
const app = document.getElementById("app");

let counter = 0;

const jump = () => {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(() => {
    character.classList.remove("animate");
  }, 300);
  return;
};

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    jump();
  }
};

app.addEventListener(
  "click",
  () => {
    jump();
  },
  true
);

const checkIfBlockColliding = (inputBlock) => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  let blockLeft = parseInt(
    window.getComputedStyle(inputBlock).getPropertyValue("left")
  );

  // let blockTop = parseInt(
  //   window.getComputedStyle(inputBlock).getPropertyValue("top")
  // );

  return blockLeft >= 20 && blockLeft <= 40 && characterTop >= 130;
};

const start = () => {
  const gameInterval = setInterval(() => {
    if (
      checkIfBlockColliding(block) ||
      checkIfBlockColliding(block2)
      // checkIfBlockColliding(block3)
    ) {
      block.style.animation = "none";
      block2.style.animation = "none";
      // block3.style.animation = "none";
      button.style.display = "block";
      alert("Game Over. score: " + Math.floor(counter / 100));
      clearInterval(gameInterval);
    } else {
      counter++;
      document.getElementById("scoreSpan").innerHTML = Math.floor(
        counter / 100
      );
    }
  }, 10);
  return gameInterval;
};
//   const gameInterval = setInterval(() => {
// let characterTop = parseInt(
//   window.getComputedStyle(character).getPropertyValue("top")
// );
// let blockLeft = parseInt(
//   window.getComputedStyle(block).getPropertyValue("left")
// );
//     //   console.log(blockLeft);
//     //   console.log(characterTop);

//     if (blockLeft < 40 && blockLeft > -40 && characterTop >= 130) {
//       block.style.animation = "none";
//       button.style.display = "block";
//       alert("Game Over. score: " + Math.floor(counter / 100));
//       clearInterval(gameInterval);

//       // alert("Game Over. score: " + Math.floor(counter / 100));
//       // block.style.animation = "block 5s infinite linear";
//     } else {
//       counter++;
//       document.getElementById("scoreSpan").innerHTML = Math.floor(
//         counter / 100
//       );
//     }
//   }, 10);
//   return gameInterval;
// };

// const handleGameOver = () => {
//   block.style.animation = "none";
//   block2.style.animation = "none";
//   block3.style.animation = "none";
//   button.style.display = "block";
//   alert("Game Over. score: " + Math.floor(counter / 100));
//   clearInterval(start);
// };

const startGameHandler = () => {
  counter = 0;

  block.style.animation = "block 2s infinite linear";
  block2.style.animation = "block2 2s infinite linear";
  // block3.style.animation = "block3 2s infinite linear";
  button.style.display = "none";

  start();
};
