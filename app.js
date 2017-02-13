'use strict';

function createElement(tagType, tagIdentifier, tagIdentifiername, elementContent, sectionId){
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifiername);
  element.textContent = elementContent;
  console.log(element);
  sectionId.appendChild(element);
  //this element creation function created by Benjamin Ayzenberg.
}
function generate(minCust, maxCust, average, array, sectionEl){
  var i = 6;
  for (i = 6; i < 21; i++){
    var number = Math.floor(Math.random() * ((maxCust - minCust) + 1) + minCust);
      //random number credit from https://www.codecademy.com/en/forum_questions/5198adbdbbeddf9726000700
    var cookies = Math.floor(number * average);
    array.push(cookies);
    var text = i + ':00, ' + array[i - 6] + ' cookies were sold.';
    console.log('At ' + i + ':00, ' + number + ' customers visited, buying a total of ' + cookies + ' cookies!');
    createElement('li', 'class', 'cookie-sales', text, sectionEl);
  }
  console.log(array);
  var sum = 0;
  for (var j = 0; j < array.length; j++){
    sum += array[j];
    console.log('sum is ' + sum);
  }
  var sumText = 'Total: ' + sum + ' cookies!';
  createElement('li', 'class', 'cookie-sales', sumText, sectionEl);
}

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  average: 6.3,
  array: [],
  sectionEl: document.getElementById('firstAndPike'),
};
var seaTac = {
  minCust: 3,
  maxCust: 24,
  average: 1.2,
  array: [],
  sectionEl: document.getElementById('seaTac'),
};
var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  average: 3.7,
  array: [],
  sectionEl: document.getElementById('seattleCenter'),
};
var capHill = {
  minCust: 20,
  maxCust: 38,
  average: 2.3,
  array: [],
  sectionEl: document.getElementById('capHill'),
};
var alki = {
  minCust: 2,
  maxCust: 16,
  average: 4.6,
  array: [],
  sectionEl: document.getElementById('alki'),
};
generate(firstAndPike.minCust, firstAndPike.maxCust, firstAndPike.average, firstAndPike.array, firstAndPike.sectionEl);
generate(seaTac.minCust, seaTac.maxCust, seaTac.average, seaTac.array, seaTac.sectionEl);
generate(seattleCenter.minCust, seattleCenter.maxCust, seattleCenter.average, seattleCenter.array, seattleCenter.sectionEl);
generate(capHill.minCust, capHill.maxCust, capHill.average, capHill.array, capHill.sectionEl);
generate(alki.minCust, alki.maxCust, alki.average, alki.array, alki.sectionEl);
/*
var userFullName = prompt('Enter your full name.');
var userpass = prompt('Enter your password.');
var myUser = {
  FullName: userFullName,
  pass: userpass,
  login: function(){
    console.log(this.FullName + ' has now logged in.');
  }
};
myUser.email = 'email@email.email';

console.log(myUser);
myUser.login();

console.log('---------------gonna make a new element---------');

var userElement = document.createElement('h1');
//this works with any element. p, div, img.
userElement.setAttribute('id', 'user-heading');
// and any attribute. src, class, id, or make your own.
userElement.textContent = myUser.FullName;
var sectionEl = document.getElementById('main-content');
//now this represents the section element with id = main-content in the html
sectionEl.appendChild(userElement);
//now the new element you created should show up in the section!
*/
