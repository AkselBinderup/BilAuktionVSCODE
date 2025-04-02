"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Previewcars_json_1 = require("..//Json//Previewcars.json");
function createCarCard(car) {
    var carCard = document.createElement('div');
    carCard.classList.add('car-card');
    var carImage = document.createElement('img');
    carImage.src = car.imageUrl;
    carImage.alt = car.name;
    carImage.classList.add('car-image');
    carCard.appendChild(carImage);
    var carInfo = document.createElement('div');
    carInfo.classList.add('car-info');
    var carName = document.createElement('h2');
    carName.classList.add('car-name');
    carName.textContent = car.name;
    carInfo.appendChild(carName);
    var carPrice = document.createElement('p');
    carPrice.classList.add('car-price');
    carPrice.textContent = car.price;
    carInfo.appendChild(carPrice);
    var carYear = document.createElement('p');
    carYear.classList.add('car-year');
    carYear.textContent = car.year;
    carInfo.appendChild(carYear);
    carCard.appendChild(carInfo);
    return carCard;
}
function addCar() {
    var carList = document.getElementById('car-list');
    if (!carList) {
        return;
    }
    var newCar = {
        name: 'Car Name',
        price: '$1000',
        year: '2020',
        imageUrl: '../images/Car-Logo.png'
    };
    var carCard = createCarCard(newCar);
    carList.appendChild(carCard);
    var addCarButton = document.getElementById('add-car-button');
    if (addCarButton) {
        addCarButton.addEventListener('click', addCar);
    }
}
function loadPresetCars() {
    var carList = document.getElementById('car-list');
    if (!carList)
        return;
    Previewcars_json_1.default.forEach(function (car) {
        var carCard = createCarCard(car);
        carList.appendChild(carCard);
    });
}
loadPresetCars();
