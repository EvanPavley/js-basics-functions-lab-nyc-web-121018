// Code your solution in this file!
function distanceFromHqInBlocks (travelerSt) {
  const num_of_blocks = Math.abs(42 - travelerSt);
  return num_of_blocks;
}

function distanceFromHqInFeet (travelerSt) {
  const num_of_feet = distanceFromHqInBlocks(travelerSt) * 264;
  return num_of_feet;
}

function distanceTravelledInFeet(st1, st2){
  const num_of_feet = (Math.abs(st1 - st2)) * 264;
  return num_of_feet;
}

function calculatesFarePrice(st1, st2){
  const dist = distanceTravelledInFeet(st1, st2);
  let price = 0;

  if (dist < 400) {
    return price;
  }else if(dist >= 400 && dist <=2000) {
    price = (dist - 400) * .02;
    return price;
  }else if (dist > 2000 && dist < 2500) {
    price = 25;
    return price;
  }else if (dist > 2500) {
    return 'cannot travel that far';
  }

}
