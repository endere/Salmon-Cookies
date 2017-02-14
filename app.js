'use strict';
function createElement(tagType, tagIdentifier, tagIdentifiername, elementContent, sectionId){
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifiername);
  element.textContent = elementContent;
//  console.log(element);
  sectionId.appendChild(element);
  //this element creation function created by Benjamin Ayzenberg.
}

CookieStore.prototype.generate = function (minCust, maxCust, average, array, sectionEl, total){
  var i = 6;
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
    // var text = i + ':00: ' + cookies + ' cookies were sold.';
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

/*
function timeTotal(stores){
  for (i = 0; i < 17; i++){
    var total = firstAndPike.array[i] + seaTac.array[i] + seattleCenter.array[i] + capHill.array[i] + alki.array[i];
    createElement('td', 'class', 'total-sales', total, document.getElementById('totals'));
  }
}
*/
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
head.setAttribute('id', 'head');
var times = ['Location', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', 'Total'];

function makeTable(stores, times){
  for(var j = 0; j < times.length; j++){
    createElement('th', 'class', 'time', times[j], head);
  }
  for (var i = 0; i < stores.length; i++){
    var currentStore = stores[i];
    var rowEl = createElement('tr', 'id', currentStore.tag, currentStore.name, tableEl);
  }
}
makeTable(stores, times);
document.body.appendChild(tableEl);

  //  firstAndPike.generate(currentStore.minCust, currentStore.maxCust, currentStore.average, currentStore.array, document.getElementById(currentStore.tag), currentStore.tag, currentStore.total);

firstAndPike.generate(firstAndPike.minCust, firstAndPike.maxCust, firstAndPike.average, firstAndPike.array, document.getElementById(firstAndPike.tag), firstAndPike.total);
seaTac.generate(seaTac.minCust, seaTac.maxCust, seaTac.average, seaTac.array, document.getElementById(seaTac.tag), seaTac.total);
seattleCenter.generate(seattleCenter.minCust, seattleCenter.maxCust, seattleCenter.average, seattleCenter.array, document.getElementById(seattleCenter.tag), seattleCenter.total);
capHill.generate(capHill.minCust, capHill.maxCust, capHill.average, capHill.array, document.getElementById(capHill.tag), capHill.total);
alki.generate(alki.minCust, alki.maxCust, alki.average, alki.array, document.getElementById(alki.tag), alki.total);
/*
seaTac.generate(seaTac.minCust, seaTac.maxCust, seaTac.average, seaTac.array, seaTac.total);
seattleCenter.generate(seattleCenter.minCust, seattleCenter.maxCust, seattleCenter.average, seattleCenter.array, seattleCenter.total);
capHill.generate(capHill.minCust, capHill.maxCust, capHill.average, capHill.array, capHill.total);
alki.generate(alki.minCust, alki.maxCust, alki.average, alki.array, alki.total);
console.log(stores);
*/
