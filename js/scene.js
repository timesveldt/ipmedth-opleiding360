const progressBar = document.getElementById('js--progress--bar');
const amountOfProgress = localStorage.getItem('progress');

progressBar.style.width = `${amountOfProgress}%`;
progressBar.textContent = `${amountOfProgress}%`;

const DUMMY_ACHIEVEMENTS = [
    {
        title: 'Voltooi de tour',
        unlocked: false,
    },
    {
        title: 'Bezoek alle ruimtes',
        unlocked: false,
    },
    {
        title: 'Vind drie voorwerpen',
        unlocked: false,
    },
    {
        title: 'Vind alle voorwerpen',
        unlocked: false,
    },
];

const achievements = document.getElementById('js--achievements');
const achievementsList = document.getElementById('js--achievements--list');
const achievemensButton = document.getElementById('js--achievements--button');

achievemensButton.addEventListener('click', () => {
    achievements.classList.toggle('achievements--open');
});

const renderAchievements = () => {
    DUMMY_ACHIEVEMENTS.forEach((achievement, index) => {
        const achievementEl = document.createElement('li');
        achievementEl.classList.add('achievements__achievement');
        achievementEl.id = `js--achievement--${index}`;
        achievementEl.textContent = achievement.title;

        achievementsList.appendChild(achievementEl);
    });
};

renderAchievements();

const myInfoSpot1 = document.getElementById('infospot--1');

//infospots
const infoSpot1 = new PANOLENS.Infospot(2000, './img/Gijs_Zwaait.png', false);
infoSpot1.position.set(3000, -300, 0);
infoSpot1.addHoverElement(myInfoSpot1, 150);

const infoSpot2 = new PANOLENS.Infospot(2000, './img/Gijs_duimpje.png', false);
infoSpot2.position.set(-1000, -300, 3000);

const vrbutton = document.getElementById('vr-button');

var place = document.getElementById('place');
const locationInfo = document.getElementById('informatie');
const information = [
    'dit is buiten voor de hoofdingang',
    'dit is waar je binnenkomt via de hoofdingang, Links zit de kantine',
    'Hier zit het Café waar je wat drinken kan bestellen',
    'Dit is de grote hal van de nieuwbouw',
    'dit is een studieruimte',
    'hier zitten de lokalen van de opleiding informatica',
];
//panolens select container

//init externat constances
const pan = document.querySelector('.pan');
const img = './img/PANO_buiten.jpg';
const img2 = './img/PANO_hoofdingang.jpg';
const img3 = './img/PANO_cafe.jpg';
const img4 = './img/PANO_hal.jpg';
const img5 = './img/PANO_studieruimte.jpg';
const img6 = './img/PANO_klaslokaal.jpg';
const img7 = './img/PANO_lab.jpg';

//init panorama + viewer
const panorama = new PANOLENS.ImagePanorama(img);
const panorama2 = new PANOLENS.ImagePanorama(img2);
const panorama3 = new PANOLENS.ImagePanorama(img3);
const panorama4 = new PANOLENS.ImagePanorama(img4);
const panorama5 = new PANOLENS.ImagePanorama(img5);
const panorama6 = new PANOLENS.ImagePanorama(img6);
const panorama7 = new PANOLENS.ImagePanorama(img7);
const viewer = new PANOLENS.Viewer({
    container: pan,
    output: 'console',
});

// roteer de positie van de viewer bij het enteren van een panorama naar de goede positie
panorama.addEventListener('enter-fade-start', function () {
    viewer.tweenControlCenter(new THREE.Vector3(5000, 0, 0), 0);
});
panorama2.addEventListener('enter-fade-start', function () {
    viewer.tweenControlCenter(new THREE.Vector3(-1000, 0, 5000), 0);
});
panorama5.addEventListener('enter-fade-start', function () {
    viewer.tweenControlCenter(new THREE.Vector3(5000, 0, 1500), 0);
});
panorama6.addEventListener('enter-fade-start', function () {
    viewer.tweenControlCenter(new THREE.Vector3(5000, 0, 2500), 0);
});

var vrtoggled = false;

//toggle on/off vr mode
function vrtoggle() {
    if (vrtoggled === false) {
        viewer.enableEffect(PANOLENS.MODES.CARDBOARD);
        vrtoggled = true;
    } else {
        viewer.disableEffect();
        vrtoggled = false;
    }
}

vrbutton.addEventListener('click', vrtoggle);

//linking foto's van de panorama's deze moeten boven de links staan anders werken ze niet.
panorama.setLinkingImage('./img/buitenIcoon.png', 500);
panorama2.setLinkingImage('./img/hoofdingangIcoon.png', 500);
panorama3.setLinkingImage('./img/cafeIcoon.png', 500);
panorama4.setLinkingImage('./img/halIcoon.png', 500);
panorama5.setLinkingImage('./img/studieruimteIcoon.png', 500);
panorama6.setLinkingImage('./img/lokaalIcoon.png', 500);
panorama7.setLinkingImage('./img/labIcoon.png', 500);

//linking between panorama's
panorama.link(panorama2, new THREE.Vector3(3000, 0, -3000));
panorama2.link(panorama, new THREE.Vector3(5000, 100, 0));
panorama2.link(panorama3, new THREE.Vector3(-5000, 200, 3000));
panorama2.link(panorama4, new THREE.Vector3(-5000, 200, -2000));
panorama3.link(panorama4, new THREE.Vector3(-3000, 200, -3000));
panorama3.link(panorama2, new THREE.Vector3(5000, 0, -2000));
panorama4.link(panorama2, new THREE.Vector3(5000, 100, 0));
panorama4.link(panorama3, new THREE.Vector3(500, 0, 5000));
panorama4.link(panorama5, new THREE.Vector3(-5000, 1000, -1000));
panorama5.link(panorama6, new THREE.Vector3(3000, 0, -5000));
panorama5.link(panorama7, new THREE.Vector3(2000, 0, -5000));
panorama5.link(panorama4, new THREE.Vector3(5000, -600, -1300));
panorama6.link(panorama5, new THREE.Vector3(-5000, 100, -1000));
panorama7.link(panorama5, new THREE.Vector3(-2000, 100, 5000));

//infospots of the panorama's
panorama.add(infoSpot1);
panorama2.add(infoSpot2);

//adding to objects
viewer.add(panorama, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7);

console.log(viewer);

//navigation indexing
for (let index = 0; index < viewer.scene.children.length; index++) {
    switch (index) {
        case 0:
            viewer.scene.children[index].name = 'Buiten';
            break;
        case 1:
            viewer.scene.children[index].name = 'Hoofdingang';
            break;
        case 2:
            viewer.scene.children[index].name = 'Café';
            break;
        case 3:
            viewer.scene.children[index].name = 'Hal';
            break;
        case 4:
            viewer.scene.children[index].name = 'Studie ruimte';
            break;
        case 5:
            viewer.scene.children[index].name = 'Lokalen';
            break;
        case 6:
            viewer.scene.children[index].name = 'Lab';
            break;
        default:
            break;
    }
}

const visitedScenes = [];

const allScenes = viewer.scene.children.map((scene) => {
    return scene.name;
});

const setVisitedScenes = (name) => {
    visitedScenes.push(name);
};

const achievementOneUnlocked = () => {
    //
};

const achievementTwoUnlocked = () => {
    const isArrayEqual = arrayEquals(allScenes, visitedScenes);
    if (isArrayEqual === true) {
        DUMMY_ACHIEVEMENTS[1].unlocked = true;
        const achievementTwo = document.getElementById('js--achievement--1');
        achievementTwo.classList.add('achievements__achievement--unlocked');
    }
};

const achievementThreeUnlocked = () => {
    //
};

const achievementFourUnlocked = () => {
    //
};

this.setInterval(() => {
    for (let index = 0; index < viewer.scene.children.length; index++) {
        if (viewer.scene.children[index].active === true) {
            place.textContent = viewer.scene.children[index].name;
            locationInfo.textContent = information[index];
            if (!visitedScenes.includes(viewer.scene.children[index].name)) {
                setVisitedScenes(viewer.scene.children[index].name);
            }

            achievementTwoUnlocked();
        }
    }
}, 1000);

const startButton = document.querySelector('#startButton');
const startScherm = document.querySelector('#startScherm');

startButton.addEventListener('click', () => {
    startScherm.classList.add('hidden');
});

function arrayEquals(arr1, arr2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}

window.addEventListener('load', () => {
    localStorage.setItem('progress', '0');
});
