'use strict';

function createElement(tagType, tagIdentifier, tagIdentifiername, elementContent, sectionId){
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifiername);
  element.textContent = elementContent;
  console.log(element);
  sectionId.appendChild(element);
  //this element creation function created by Benjamin Ayzenberg.
}

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  average: 6.3,
  array: [],
  sectionEl: document.getElementById('firstAndPike'),
  generate: function(minCust, maxCust, average, array, sectionEl){
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
      var text = i + ':00: ' + array[i - 6] + ' cookies were sold.';
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
};
var seaTac = {
  minCust: 3,
  maxCust: 24,
  average: 1.2,
  array: [],
  sectionEl: document.getElementById('seaTac'),
  generate: function(minCust, maxCust, average, array, sectionEl){
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
      var text = i + ':00: ' + array[i - 6] + ' cookies were sold.';
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
};
var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  average: 3.7,
  array: [],
  sectionEl: document.getElementById('seattleCenter'),
  generate: function(minCust, maxCust, average, array, sectionEl){
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
      var text = i + ':00: ' + array[i - 6] + ' cookies were sold.';
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
};
var capHill = {
  minCust: 20,
  maxCust: 38,
  average: 2.3,
  array: [],
  sectionEl: document.getElementById('capHill'),
  generate: function(minCust, maxCust, average, array, sectionEl){
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
      var text = i + ':00: ' + array[i - 6] + ' cookies were sold.';
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
};
var alki = {
  minCust: 2,
  maxCust: 16,
  average: 4.6,
  array: [],
  sectionEl: document.getElementById('alki'),
  generate: function(minCust, maxCust, average, array, sectionEl){
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
      var text = i + ':00: ' + array[i - 6] + ' cookies were sold.';
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
};
firstAndPike.generate(firstAndPike.minCust, firstAndPike.maxCust, firstAndPike.average, firstAndPike.array, firstAndPike.sectionEl);
seaTac.generate(seaTac.minCust, seaTac.maxCust, seaTac.average, seaTac.array, seaTac.sectionEl);
seattleCenter.generate(seattleCenter.minCust, seattleCenter.maxCust, seattleCenter.average, seattleCenter.array, seattleCenter.sectionEl);
capHill.generate(capHill.minCust, capHill.maxCust, capHill.average, capHill.array, capHill.sectionEl);
alki.generate(alki.minCust, alki.maxCust, alki.average, alki.array, alki.sectionEl);
