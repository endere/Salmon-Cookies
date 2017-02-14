'use strict';

function createElement(tagType, tagIdentifier, tagIdentifiername, elementContent, sectionId){
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifiername);
  element.textContent = elementContent;
  console.log(element);
  sectionId.appendChild(element);
  //this element creation function created by Benjamin Ayzenberg.
}

function generate(minCust, maxCust, average, array, sectionEl, total){
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
    var text = i + ':00: ' + cookies + ' cookies were sold.';
    console.log('At ' + i + ':00, ' + number + ' customers visited, buying a total of ' + cookies + ' cookies!');
    createElement('li', 'class', 'cookie-sales', text, sectionEl);
  }
  console.log(array);
  var sumText = 'Total: ' + total + ' cookies!';
  createElement('li', 'class', 'cookie-sales', sumText, sectionEl);
}

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  average: 6.3,
  array: [],
  total: 0,
  sectionEl: document.getElementById('firstAndPike'),
};
var seaTac = {
  minCust: 3,
  maxCust: 24,
  average: 1.2,
  array: [],
  total: 0,
  sectionEl: document.getElementById('seaTac'),
};
var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  average: 3.7,
  array: [],
  total: 0,
  sectionEl: document.getElementById('seattleCenter'),
};
var capHill = {
  minCust: 20,
  maxCust: 38,
  average: 2.3,
  array: [],
  total: 0,
  sectionEl: document.getElementById('capHill'),
};
var alki = {
  minCust: 2,
  maxCust: 16,
  average: 4.6,
  array: [],
  total: 0,
  sectionEl: document.getElementById('alki'),
};
generate(firstAndPike.minCust, firstAndPike.maxCust, firstAndPike.average, firstAndPike.array, firstAndPike.sectionEl, firstAndPike.total);
generate(seaTac.minCust, seaTac.maxCust, seaTac.average, seaTac.array, seaTac.sectionEl, seaTac.total);
generate(seattleCenter.minCust, seattleCenter.maxCust, seattleCenter.average, seattleCenter.array, seattleCenter.sectionEl, seattleCenter.total);
generate(capHill.minCust, capHill.maxCust, capHill.average, capHill.array, capHill.sectionEl, capHill.total);
generate(alki.minCust, alki.maxCust, alki.average, alki.array, alki.sectionEl, alki.total);
