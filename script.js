let gameStart = prompt(`Hi! Would you like to go on an adventure?`);
if (gameStart === `yes`) {
  alert(`Great! Lets go!`);
} else if (gameStart === `no`) {
  alert(`Ok, maybe next time!`);
}
gameStart();

let destinationOne = prompt(`Great! A nice hike or walk up the beach?`);
if (destinationOne === `hike`) {
  alert(
    `Can't wait to see the top! It's a long hike, we should stop to some snacks`
  );
} else if (destinationOne === `beach`) {
  alert(
    `Fun in the sun! It's a hot one today, we should stop to get some snacks`
  );
}
destinationOne();

let destinationTwo = prompt(`Where should we stop 711 or Wawa?`);
if (destinationTwo === `711`) {
  alert(`711 it is!`);
} else if (destinationTwo === `Wawa`) {
  alert(`Wawa it is!`);
}
destinationTwo();

let destinationThree = prompt(
  `Ugh, we forgot waters. Target and Walmart are on the way, which do you prefer?`
);
if (destinationThree === `target`) {
  alert(`Target is the best, lets go`);
} else if (destinationThree === `walmart`) {
  alert(`Walmart is the best, lets go`);
}
destinationThree();

let destinationFour = prompt(
  `You're not going to believe this... No one has been home all day, I have to go home and walk the dogs. Since we are here I want to pick them up a toy first. Pupperonis or Milkbones?`
);
if (destinationFour === `pupperonis`) {
  alert(`My dogs love pupperonis`);
} else if (destinationFour === `milkbones`) {
  alert(`My dogs love milkbones`);
}
destinationFour();

let destinationFive = prompt(
  `Do you want to walk the dogs with me? yes or no?`
);
if (destinationFive === "yes") {
  alert(`Awsome, thanks!`);
} else if (destinationFive === `no`) {
  alert(`It's cool, i'll be back in a bit`);
}
destinationFive();

let destinationSix = prompt(
  `Ok now that this barbie playhouse video game of a situation is over. Want to head over there now, yes or no?`
);
if (destinationSix === `yes`) {
  alert(`Finally, lets go!`);
} else if (destinationSix === `no thanks`) {
  alert(`Yeah it did kind of take long, we'll go another day.`);
} else {
  alert(`Yeah, I get it. I'm going to take a nap.`);
}
destinationSix();

let destinationSeven = prompt(
  `I am so glad we made it, on the scale from 1-10. How gorgeous is this view?`
);
for (let i = 0; i < 11, i++; ) {
  console.log(destinationSeven[i]);
  alert(`Ah! Same!`);
}

// need help switch & repeat.
