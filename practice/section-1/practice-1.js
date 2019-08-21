'use strict';

function find(collection, element) {  

  let ret;
  for (let i = 0; i < collection.length; i++) {
    if(collection[i] === element){
      return collection[i];
    }
  }
  return '没有该元素';
}
