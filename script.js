//Random dice number generator

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max - min +1 )+ min)
}

let dice1 = randomInt(1,6);
let dice2 = randomInt(1,6);

document.getElementById("dice-p1").src="/images/dado-"+dice1+".png";
document.getElementById("dice-p2").src="/images/dado-"+dice2+".png";
