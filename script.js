'use strict';
//  selecting elements
const pl0 = document.querySelector('.player--0');
const pl1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const diceel = document.querySelector(".dice");
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const newbtn = document.querySelector('.btn--new');
let rn = 0;
let currentscore, activeplayer ,finalscore,playing=true;

// rolling a dice
btnroll.addEventListener('click', () => {
    if(playing)
    {
    // random number generation
    let random = () => {
        rn = Math.floor(Math.random() * 6) + 1;
        return rn;
    }
    diceel.classList.remove('hidden');
    diceel.src = `dice-${random()}.png`;
    // console.log(rn);

    //    check for roll
    if (rn != 1) {
        // add to current 
        currentscore += (rn);
        document.getElementById(`current--${activeplayer}`).textContent = currentscore;

    } else {
        // change the player
       
        switchplayer();

    }
}
})

// hold button functionality
btnhold.addEventListener('click', () => {
if(playing){
finalscore[activeplayer]+=currentscore;
// console.log(...finalscore);
document.getElementById(`score--${activeplayer}`).textContent =
finalscore[activeplayer];
if (finalscore[activeplayer] >= 50) {
    // Finish the game
    playing = false;
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--active');
      diceel.classList.add('hidden');
  } else {
    // Switch to the next player
    switchplayer();
  }
}})
// switch player functionality
let switchplayer=()=>
{
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = (activeplayer === 0) ? 1 : 0;
    pl0.classList.toggle('player--active');
    pl1.classList.toggle('player--active');
   
}
// inital fuction
let initialfunction=()=>{
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    currentscore = 0;
    finalscore=[0,0];
    playing=true;
    activeplayer = 0;
    diceel.classList.add("hidden");
   pl0.classList.remove("player--winner");
   pl1.classList.remove("player--winner");
   pl0.classList.add("player--active");
   pl1.classList.remove("player--active");
};
initialfunction(); 
// new button functionality
newbtn.addEventListener('click',initialfunction);