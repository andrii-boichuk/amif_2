

const calc_shvz = document.querySelector('#calc-input-shvz'),
calc_spyne = document.querySelector('#calc-input-spyne'),
calc_general = document.querySelector('#calc-input-general'),
calc_face = document.querySelector('#calc-input-face'),
calc_body = document.querySelector('#calc-input-body'),
min = 0,
max = 99, 
price_shvz_one = 300,
price_spyne_one = 400,
price_general_one = 500,
price_face_one = 300,
price_body_one = 400,
time_shvz_one = 20,
time_spyne_one = 45,
time_general_one = 75,
time_face_one = 30,
time_body_one = 50;

inputPeopleCount();
inputMassagestCount();
inputPrice();
inputTime();


// Уменьшаем на 1 calc_shvz
document.querySelector('#btn-shvz-minus').addEventListener('click', () => {
  if (calc_shvz.value > min) {
    calc_shvz.value = +calc_shvz.value - 1;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  } else {
    calc_shvz.value = min;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});

// Увеличиваем на 1 calc_shvz
document.querySelector('#btn-shvz-plus').addEventListener('click', () => {
  if (calc_shvz.value < max) {
    calc_shvz.value = +calc_shvz.value + 1;
    document.querySelector('#calc-input-shvz').textContent = calc_shvz.value;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  } else {
    calc_shvz.value = max;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});

// Уменьшаем на 1 calc_spyne
document.querySelector('#btn-spyne-minus').addEventListener('click', () => {
  if (calc_spyne.value > min) {
    calc_spyne.value = +calc_spyne.value - 1;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  } else {
    calc_spyne.value = min;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});

// Увеличиваем на 1 calc_spyne
document.querySelector('#btn-spyne-plus').addEventListener('click', () => {
  if (calc_spyne.value < max) {
    calc_spyne.value = +calc_spyne.value + 1;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  } else {
    calc_spyne.value = max;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});

// Уменьшаем на 1 calc_general
document.querySelector('#btn-general-minus').addEventListener('click', () => {
  if (calc_general.value > min) {
    calc_general.value = +calc_general.value - 1;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  } else {
    calc_general.value = min;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});

// Увеличиваем на 1 calc_general
document.querySelector('#btn-general-plus').addEventListener('click', () => {
  if (calc_general.value < max) {
    calc_general.value = +calc_general.value + 1;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  } else {
    calc_general.value = max;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});

// Уменьшаем на 1 calc_face
document.querySelector('#btn-face-minus').addEventListener('click', () => {
  if (calc_face.value > min) {
    calc_face.value = +calc_face.value - 1;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  } else {
    calc_face.value = min;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});

// Увеличиваем на 1 calc_face
document.querySelector('#btn-face-plus').addEventListener('click', () => {
  if (calc_face.value < max) {
    calc_face.value = +calc_face.value + 1;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  } else {
    calc_face.value = max;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});

// Уменьшаем на 1 calc_body
document.querySelector('#btn-body-minus').addEventListener('click', () => {
  if (calc_body.value > min) {
    calc_body.value = +calc_body.value - 1;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime()
  } else {
    calc_body.value = min;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});

// Увеличиваем на 1 calc_face
document.querySelector('#btn-body-plus').addEventListener('click', () => {
  if (calc_body.value < max) {
    calc_body.value = +calc_body.value + 1;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  } else {
    calc_body.value = max;
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  }
});



// Запрещаем ввод текста 
document.querySelectorAll('.input-calculation__input').forEach(function(el) {
  el.addEventListener('onchange', function() {
    this.value = this.value.replace(/[^\d]/g, '');
    inputPeopleCount();
    inputMassagestCount();
    inputPrice();
    inputTime();
  });
});

console.log('-----PEOPLE-------');
console.log(parseInt(calc_shvz.value) + parseInt(calc_spyne.value) + parseInt(calc_general.value) + parseInt(calc_face.value) + parseInt(calc_body.value));

peopleCount;
function inputPeopleCount() {
  peopleCount = parseInt(calc_shvz.value) + parseInt(calc_spyne.value) + parseInt(calc_general.value) + parseInt(calc_face.value) + parseInt(calc_body.value);
  document.querySelector('#calculation__span-all-people').textContent = peopleCount;
}
console.log('------MASSAGEST------' + parseInt(parseInt(calc_shvz.value) + parseInt(calc_spyne.value) + parseInt(calc_general.value) + parseInt(calc_face.value) + parseInt(calc_body.value)/5));

massagestCount;
function inputMassagestCount() {
  massagestCount = parseInt(peopleCount / 6 + 1)
  document.querySelector('#calculation__span-all-masages').textContent = massagestCount;
}

console.log('-----------PRISE--------' + parseInt(calc_shvz.value)*price_shvz_one + parseInt(calc_spyne.value)*price_spyne_one + parseInt(calc_general.value)*price_general_one + parseInt(calc_face.value)*price_face_one + parseInt(calc_body.value)*price_body_one)


function inputPrice() {
  document.querySelector('#calculation__span-price').textContent = parseInt(calc_shvz.value)*price_shvz_one + parseInt(calc_spyne.value)*price_spyne_one + parseInt(calc_general.value)*price_general_one + parseInt(calc_face.value)*price_face_one + parseInt(calc_body.value)*price_body_one;
}


function inputTime() {
all_minutes =  (parseInt(calc_shvz.value)*time_shvz_one + parseInt(calc_spyne.value)*time_spyne_one + parseInt(calc_general.value)*time_general_one + parseInt(calc_face.value)*time_face_one + parseInt(calc_body.value)*time_body_one);
all_minutes_for_one = parseInt(all_minutes / massagestCount);
hours = parseInt(all_minutes_for_one / 60);
minutes = all_minutes_for_one % 60;
document.querySelector('#calculation__span-time').textContent = hours + "h " + minutes + "min";
console.log('-------------TIME---------' + hours + "h " + minutes + "min")

}
