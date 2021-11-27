// var btn = document.querySelector('.calculation__btn'),
//   countPeople = document.querySelector('.calculation__count-people'),
//   countMasters = document.querySelector('.calculation__count-masters'),
//   massageType = document.querySelector('.calculation__massage-type'),
//   priceCount = document.querySelector('.calculation__price'),
//   timeCount = document.querySelector('.calculation__time'),
//   onePeoplePrice = 300,
//   comment = document.querySelector('.calculation__comment');

// шия - 250
// спина - 350
// загальний - 450
// косметичний - 400


// input type number 



const windowInnerHeight = document.documentElement.clientHeight;
console.log(windowInnerHeight);
console.log(document.documentElement.clientHeight);


// console.log(document.querySelector('main').style.minHeight);
console.log(document.documentElement.clientHeight);
console.log(getComputedStyle(document.querySelector('header')).height);
console.log(getComputedStyle(document.querySelector('footer')).height);
// console.log(getComputedStyle(document.querySelector('.footer').style.height));


console.log(document.documentElement.clientHeight - parseInt(getComputedStyle(document.querySelector('header')).height) - parseInt(getComputedStyle(document.querySelector('footer')).height));

document.querySelector('main').style.minHeight = document.documentElement.clientHeight - parseInt(getComputedStyle(document.querySelector('header')).height) - parseInt(getComputedStyle(document.querySelector('footer')).height) + 'px';

console.log(document.querySelector('main').style.minHeight);

// btn.onclick = function () {
//   console.log('btn');

//   if (parseInt(countPeople.value / countMasters.value) < 5) {
//     priceCount.value = countPeople.value * onePeoplePrice + countMasters.value*300 + " грн";
//   } else {
//     if (parseInt(countPeople.value / countMasters.value) >= 5) {
//       priceCount.value = countPeople.value * onePeoplePrice;
//     } else {
//       console.log('else');
//     }
//   }


//   timeCount.value = countPeople.value % countMasters.value == 0 ? parseInt(countPeople.value / countMasters.value) + " часа(ов)": parseInt(countPeople.value / countMasters.value) + 1 + " часа(ов)";


//   comment.value =   countPeople.value + " человек * " + countMasters.value + " массажистов + " + countMasters.value*300 + " грн за транспортние розході";
// }

