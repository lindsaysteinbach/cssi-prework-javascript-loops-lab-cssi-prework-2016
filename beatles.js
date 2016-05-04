'use strict';

var i = 0;
function johnLennonFacts(facts) {
  while (i < facts.length) {
    var newFact = facts[i] + "!!!";
    excitingFacts.push(newFact);
    i++;
  }
  return excitingFacts;
}

var combinedArray = [];

function theBeatlesPlay(musicians,instruments) {
	for (var i = 0;  i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    combinedArray.push(string);
  }
  return combinedArray;
}


function iLoveTheBeatles(number) {
  var array = [];
  var i = 0;
  do {
    array.push("I love the Beatles!")
    i++;
  }
  while (i < number && i < 10);
  return array;
}
