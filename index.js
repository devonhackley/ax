'use strict';

/*** Coding Challenge ***/


function whatTriangle(num1, num2, num3){

  let n1 = num1,
  n2 = num2,
  n3 = num3;

  if(isNaN(n1,n2,n3)) console.log(4);

  if(!(isNaN(n1,n2,n3))){
    if (n1 === n2  && n1 === n3) {
      console.log(3);
    } else if (n1 === n2 || n2 === n3 || n1 === n3) {
      console.log(2);
    } else if (n1 != n2 && n2 != n3 && n1 != n3 ) {
      console.log(1);
    }
  }
};



whatTriangle(1,2,2);
