console.log("hello!")

const firstName = 'Marjorie';
const lastName = 'Mekkhavong';
const yearsOfStudy = 1;
const goal = 'become a full stack developer'

//("My name is " + firstName + " " + lastName + ". I have been at SCC for " + yearsOfStudy + " years and plan to " + goal + " after completing my courses.");

const introduction = `My name is ${firstName} ${lastName}. I have been at SCC for ${yearsOfStudy} and plan to ${goal} after completing my courses.`;

document.getElementById("introduction").innerHTML = introduction;
