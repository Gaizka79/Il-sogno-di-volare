const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    getRandomCivil() {
        return this.civilImages[getRandom()];
    }
    getRandomMilitary() {
        return this.militaryImages[getRandom()];
    }
    getAll() {
        return this.militaryImages.concat(this.civilImages);
    }
}

class Painter {
    constructor() {
        //this.gallery = this.createGallery();
    }

    createGallery() {
        console.log("estamos en creategalery");
        let sSection = document.createElement('section'),
            sBody = document.querySelector('body');
        sBody.appendChild(sSection).innerHTML = '<h3> KAIXO </h3>';
    }

    createImageTag(imageUrl) {
        //painter.createImageTag(helicopters.getRandomCivil())
        let sPicture = document.createElement('picture'),
            sImg = document.createElement('img');
        sImg.src = './' + imageUrl;
        sPicture.appendChild(sImg);
        document.querySelector('body').appendChild(sPicture);
        console.log(sPicture);
    }
    paintSingleImage(imageUrl) {
        this.createImageTag(imageUrl);
    }
    paintMultipleImages(arrayOfImages) { 
        for (let i=0; i<arrayOfImages.length; i++) {
            this.createImageTag(arrayOfImages[i]);
        }

    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

let getRandom = () => {
    return Math.floor(Math.random() * 5);
};
