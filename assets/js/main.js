"use strict";

/*============= Const Variables from HTMl =============*/
const payAmountBtn = document.querySelector("#payAmount");

const decrementBtn = document.querySelector("#decrement");
const quantityElem = document.querySelector("#quantity");
const incrementBtn = document.querySelector("#increment");

const priceElem = document.querySelector("#price");
const subTotalElem = document.querySelector("#subtotal");
const discountElem = document.querySelector("#discount");
const totalElem = document.querySelector("#total");

console.log(discountElem.textContent);

//loop: for add event on multiple "increment" & "decrement" btn:
for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    /* Collect the value of 'quantity' on textContent,
      based on clicked 'increment' button sibling */
    let increment = Number(this.previousElementSibling.textContent);

    //Plus "increment" var value by 1:
    increment++;

    /* Show the 'increment' variable value on
    'quantity' element, based on clicked 'increment'
    button sibling: */
    this.previousElementSibling.textContent = increment;

    totalCalc();
  });

  decrementBtn[i].addEventListener("click", function () {
    let decrement = Number(this.nextElementSibling.textContent);

    decrement <= 1 ? 1 : decrement--;

    this.nextElementSibling.textContent = decrement;

    totalCalc();
  });
}

const totalCalc = function () {
  //initial vars declaration:
  const discount = 5;
  let subtotal = 0;
  let total = 0;

  //subtotal calc value from every single product:
  for (let i = 0; i < quantityElem.length; i++) {
    subtotal +=
      Number(quantityElem[i].textContent) + Number(priceElem[i].textContent);
  }
  //Show the variable above on the 'subTotalElem' element:
  subTotalElem.textContent = subtotal.toFixed(2);

  //Calculating the 'discount':
  total = subtotal - discount;

  //Show the 'discount' on 'discountElem' element:
  discountElem.textContent = discount.toFixed(2);

  //show the total var on 'total' elem & 'payAmountBtn' element:
  totalElem.taxContent = total.toFixed(2);
  payAmountBtn.textContent = total.toFixed(2);
};
