'use strict';

function createElement(tagType, tagIdentifier, tagIdentifiername, elementContent, sectionId){
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifiername);
  element.textContent = elementContent;
  console.log(element);
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
  console.log(array);
  createElement('td', 'class', 'total-sales', total, sectionEl);
};

function CookieStore(minCust, maxCust, average, sectionEl){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.average = average;
  this.array = [];
  this.total = 0;
  this.sectionEl = sectionEl;
}


var firstAndPike = new CookieStore(23, 65, 6.3, document.getElementById('firstAndPike'));
var seaTac = new CookieStore(3, 24, 1.2, document.getElementById('seaTac'));
var seattleCenter = new CookieStore(11, 38, 3.7, document.getElementById('seattleCenter'));
var capHill = new CookieStore(20, 38, 2.3, document.getElementById('capHill'));
var alki = new CookieStore(2, 16, 4.6, document.getElementById('alki'));

firstAndPike.generate(firstAndPike.minCust, firstAndPike.maxCust, firstAndPike.average, firstAndPike.array, firstAndPike.sectionEl, firstAndPike.total);
seaTac.generate(seaTac.minCust, seaTac.maxCust, seaTac.average, seaTac.array, seaTac.sectionEl, seaTac.total);
seattleCenter.generate(seattleCenter.minCust, seattleCenter.maxCust, seattleCenter.average, seattleCenter.array, seattleCenter.sectionEl, seattleCenter.total);
capHill.generate(capHill.minCust, capHill.maxCust, capHill.average, capHill.array, capHill.sectionEl, capHill.total);
alki.generate(alki.minCust, alki.maxCust, alki.average, alki.array, alki.sectionEl, alki.total);
