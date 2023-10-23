alert("How to Play a game? \n\nPress the numbers Shown In HIT box. \nAnd Score as much as you can😊 ")
let timer = 60;
let score = 0;
let ranHit = 0;  //ranHit = random hits
function makeBubble() {
    let bubble = "";
    for (let i = 1; i <= 147; i++) {
        let num = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${num}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = bubble;
}
function runTime() {
    let timeerintervel = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timevalue").textContent = timer;
        }
        else {
            clearInterval(timeerintervel);
           let a= document.querySelector("#panel");
           a.innerHTML = ` <h1>❤️ GAME OVER ❤️  </h1> 
           <h1> You Score :- ${score}  </h1> 
           <button>RESTART</button> `;
           document.querySelector("button").addEventListener("click", function () {
            location.reload();
        });
        
        }

    }, 1000);
}

function getNewHit() {
    ranHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").textContent = ranHit;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (bubbleNum) {

    let clickedNum = Number(bubbleNum.target.textContent)
    if (clickedNum === ranHit) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

// document.querySelector("#start").addEventListener("click", runTime) ;

document.querySelector("button").addEventListener("click", function () {
    location.reload();
});



makeBubble();
runTime();
getNewHit();


// *********************************************************************************************************************

// function adjustLoopSize() {
//     // Get the width of the browser window
//     const windowWidth = window.innerWidth;
  
//     // Calculate the number of iterations based on the window width
//     let loopSize = 0;
  
//     if (windowWidth < 480) {
//       loopSize = 10; // Set a small loop size for small screens
//     } else if (windowWidth < 768) {
//       loopSize = 20; // Set a medium loop size for medium screens
//     } else {
//       loopSize = 30; // Set a large loop size for large screens
//     }
  
//     // Your loop code here
//     for (let i = 0; i < loopSize; i++) {
//       // Your loop logic that affects innerHTML
//       let bubble = "";
//     for (let i = 1; i <= 147; i++) {
//         let num = Math.floor(Math.random() * 10);
//         bubble += `<div class="bubble">${num}</div>`;
//     }

//     document.querySelector("#pbtm").innerHTML = bubble;
      
//     }
//   }
  
//   // Call the adjustLoopSize function when the window is resized
//   window.addEventListener('resize', adjustLoopSize);
  
//   // Call the function initially to set the loop size based on the initial screen size
//   adjustLoopSize();
  