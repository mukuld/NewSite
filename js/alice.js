/* 
* Javascript to sequence animations
* Date: 06 January 2025
* Programmer: Mukul Dharwadkar
*/

const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

  const image1 = alice1.animate(aliceTumbling, aliceTiming);
  const image2 = alice2.animate(aliceTumbling, aliceTiming);

  const alice = document.querySelector("#alice-container");

  Promise.all(alice.getAnimations().map((image1) => image1.finished));