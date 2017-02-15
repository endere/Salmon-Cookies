'use strict';

var firstAndPike = new CookieStore(23, 65, 6.3, 'First and Pike', 'firstAndPike');
var seaTac = new CookieStore(3, 24, 1.2, 'Sea Tac', 'seaTac');
var seattleCenter = new CookieStore(11, 38, 3.7, ' Seattle Center', 'seattleCenter');
var capHill = new CookieStore(20, 38, 2.3, 'Capital Hill', 'capHill');
var alki = new CookieStore(2, 16, 4.6, 'Alki', 'alki');

var stores = [firstAndPike, seaTac, seattleCenter, capHill, alki];
var tableEl = document.createElement('table');
tableEl.setAttribute('id', 'tableEl');
var head = document.createElement('thead');
tableEl.appendChild(head);
var foot = document.createElement('tfoot');
tableEl.appendChild(foot);
head.setAttribute('id', 'head');
var times = ['Location', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', 'Total'];
var finalSum = 0;

function createElement(tagType, tagIdentifier, tagIdentifiername, elementContent, sectionId){
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifiername);
  element.textContent = elementContent;
//  console.log(element);
  sectionId.appendChild(element);
  //this element creation function created by Benjamin Ayzenberg.
}

CookieStore.prototype.generate = function (minCust, maxCust, average, array, sectionEl, total, name){
  var i = 6;
  createElement('td', 'class', 'name', name, sectionEl);
  for (i = 6; i < 21; i++){
    if (i >= 6 && i < 11 ){
      var number = Math.floor((Math.random() * ((maxCust - minCust) + 1) * .5) + minCust);
    } else if(i >= 11 && i < 15 ){
      var number = Math.floor((Math.random() * ((maxCust - minCust) + 1) * 1.5) + minCust);
    } else if(i >= 15 && i < 21 ){
      var number = Math.floor((Math.random() * ((maxCust - minCust) + 1) * 1) + minCust);
    }
    //random number credit from https://www.codecademy.com/en/forum_questions/5198adbdbbeddf9726000700
    var cookies = Math.floor(number * average);
    array.push(cookies);
    total += cookies;
    createElement('td', 'class', 'cookie-sales', cookies, sectionEl);
  }
  createElement('td', 'class', 'total-sales', total, sectionEl);
};

function CookieStore(minCust, maxCust, average, name, tag){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.average = average;
  this.array = [];
  this.total = 0;
  this.name = name;
  this.tag = tag;
}

function makeTable(stores, times){
  for(var j = 0; j < times.length; j++){
    createElement('th', 'class', 'time', times[j], head);
  }
  for (var i = 0; i < stores.length; i++){
    var currentStore = stores[i];
    var rowEl = createElement('tr', 'id', currentStore.tag, '', tableEl);
  }
}

makeTable(stores, times);
document.body.appendChild(tableEl);
firstAndPike.generate(firstAndPike.minCust, firstAndPike.maxCust, firstAndPike.average, firstAndPike.array, document.getElementById(firstAndPike.tag), firstAndPike.total, firstAndPike.name);
seaTac.generate(seaTac.minCust, seaTac.maxCust, seaTac.average, seaTac.array, document.getElementById(seaTac.tag), seaTac.total, seaTac.name);
seattleCenter.generate(seattleCenter.minCust, seattleCenter.maxCust, seattleCenter.average, seattleCenter.array, document.getElementById(seattleCenter.tag), seattleCenter.total, seattleCenter.name);
capHill.generate(capHill.minCust, capHill.maxCust, capHill.average, capHill.array, document.getElementById(capHill.tag), capHill.total, capHill.name);
alki.generate(alki.minCust, alki.maxCust, alki.average, alki.array, document.getElementById(alki.tag), alki.total, alki.name);

createElement('td', 'class', 'footer', 'Total', foot);
for (var j = 0; j < times.length; j++){
  if (j < 15){
    var sum = 0;
    for(var i = 0; i < stores.length; i++){
      var currentStore = stores[i];
      console.log(currentStore.array[j]);
      sum += currentStore.array[j];
    }
    createElement('td', 'class', 'footer', sum, foot);
    finalSum += sum;
    console.log('finalsum is ' + finalSum);
  }
  else if (j === 15){
    createElement('td', 'class', 'total-sales', finalSum, foot);
  }
}

console.log('-----------------Event Listeners-----------------');

var storeFormEl = document.getElementById('new-store-form');
storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();
  console.log(event.target.cookieStoreName.value);
  console.log(event.target.minCust.value);
  console.log(event.target.maxCust.value);
  console.log(event.target.average.value);
  console.log(event.target.tag.value);
  console.log('User pressed submit button on form.');

  var newStoreName = event.target.cookieStoreName.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var average = parseInt(event.target.average.value);
  var tag = event.target.tag.value;

  var newStore = new CookieStore(minCust, maxCust, average, newStoreName, tag);
  console.log(newStore);

}

//To do:
// turn the mess of generate functions into a single function with a for loop.
// put everything that creates a table into a single function that I can call with the submit button.
// add the newstore to the stores array. Then, when the table function runs, it should automatically add the new store.
