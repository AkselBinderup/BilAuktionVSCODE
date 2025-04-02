interface Car{
    name: string;
    price: string;
    year: string;
    imageUrl: string;
}
import cars  from '..//Json//Previewcars.json';


function createCarCard(car: Car): HTMLElement {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card');

    const carImage = document.createElement('img');
    carImage.src = car.imageUrl;
    carImage.alt = car.name;
    carImage.classList.add('car-image');
    carCard.appendChild(carImage);

    const carInfo = document.createElement('div');
    carInfo.classList.add('car-info');

    const carName = document.createElement('h2');
    carName.classList.add('car-name');
    carName.textContent = car.name;
    carInfo.appendChild(carName);

    const carPrice = document.createElement('p');
    carPrice.classList.add('car-price');
    carPrice.textContent = car.price;
    carInfo.appendChild(carPrice);

    const carYear = document.createElement('p');
    carYear.classList.add('car-year');
    carYear.textContent = car.year;
    carInfo.appendChild(carYear);

    carCard.appendChild(carInfo);

    return carCard;
}

function addCar(): void{
    const carList = document.getElementById('car-list');
    if(!carList){
        return;
    }

    const newCar: Car = {
        name: 'Car Name',
        price: '$1000',
        year: '2020',
        imageUrl: '../images/Car-Logo.png'
    }

    const carCard = createCarCard(newCar);
    carList.appendChild(carCard);

    const addCarButton = document.getElementById('add-car-button');
    if(addCarButton){
        addCarButton.addEventListener('click', addCar);
    }
}

function loadPresetCars(): void {
    const carList = document.getElementById('car-list');
    if (!carList) return;

    cars.forEach((car) => {
        const carCard = createCarCard(car);
        carList.appendChild(carCard);
    });
}

loadPresetCars();