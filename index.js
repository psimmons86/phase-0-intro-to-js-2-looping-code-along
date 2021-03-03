
 for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  } 

const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
  }

  wrapGifts(gifts);


function writeCards(arr, str) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push (`Thank you, ${arr[i]}, for the baby gifts ${str} gift!`);
    }
    return newArr
}

    writeCards(["X", "Arturo", "Joyce"]); 

let countDown = 11;
while (countDown > 0) {
    console.log(countdown--);
}

let top = 11

function countdown(top) {

while (top > 0) {
    console.log(top--);
     }
}

countdown();