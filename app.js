'use strict';
var tagArray = [];
var storeNames = [];

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

function createData() {
  for (var i = 0; i < stores.length; i++) {
    var currentStore = stores[i];
    currentStore.generate(currentStore.minCust, currentStore.maxCust, currentStore.average, currentStore.array, document.getElementById(currentStore.tag), currentStore.total, currentStore.name);
  }
}

function makeTable(stores, times, currentTable, newHead){
  for(var j = 0; j < times.length; j++){
    createElement('th', 'class', 'time', times[j], newHead);
  }
  for (var i = 0; i < stores.length; i++){
    var currentStore = stores[i];
    var rowEl = createElement('tr', 'id', currentStore.tag, '', currentTable);
  }
}

CookieStore.prototype.generate = function (minCust, maxCust, average, array, sectionEl, total, name){
  createElement('td', 'class', 'name', name, sectionEl);
  for (var i = 0; i < times.length - 2; i++){
    if (i >= 0 && i < 5 ){
      var number = Math.floor((Math.random() * ((maxCust - minCust) + 1) * .5) + minCust);
    } else if(i >= 5 && i < 11 ){
      var number = Math.floor((Math.random() * ((maxCust - minCust) + 1) * 1.5) + minCust);
    } else if(i >= 11 && i < 17 ){
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
  tagArray.push(tag);
  storeNames.push(name);
}

function renderToPage(table, newHead, newFoot) {
  makeTable(stores, times, table, newHead);
  document.body.appendChild(table);

  createData();

  createElement('td', 'class', 'footer', 'Total', newFoot);
  for (var j = 0; j < times.length; j++){
    if (j < 15){
      var sum = 0;
      for(var i = 0; i < stores.length; i++){
        var currentStore = stores[i];
        console.log(currentStore.array[j]);
        sum += currentStore.array[j];
      }
      createElement('td', 'class', 'footer', sum, newFoot);
      finalSum += sum;
      console.log('finalsum is ' + finalSum);
    }
    else if (j === 15){
      createElement('td', 'class', 'total-sales', finalSum, newFoot);
      finalSum = 0;
    }
  }
}

renderToPage(tableEl, head, foot);

console.log('-----------------Event Listeners-----------------');

var storeFormEl = document.getElementById('new-store-form');
storeFormEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();

  if (tagArray.includes(event.target.tag.value) || storeNames.includes(event.target.cookieStoreName.value)) {
    alert('Store name and/or tag is taken. Choose a new one, please.');
  } else {
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

    stores.push(newStore);

    var oldTable = document.getElementById('tableEl');
    console.log(oldTable);
    oldTable.parentNode.removeChild(oldTable);
    console.log(oldTable);

    var newTableEl = document.createElement('table');
    newTableEl.setAttribute('id', 'tableEl');
    var newHead = document.createElement('thead');
    newTableEl.appendChild(newHead);
    var newFoot = document.createElement('tfoot');
    newTableEl.appendChild(newFoot);
    head.setAttribute('id', 'head');

    renderToPage(newTableEl, newHead, newFoot);
    console.log(storeNames);
  }
}
//To do:
// add the newstore to the stores array. Then, when the table function runs, it should automatically add the new store.
