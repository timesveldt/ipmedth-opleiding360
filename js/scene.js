const resetButton = document.getElementById('js--reset--button');
const endButton = document.getElementById('js--end--button');
const continueButton = document.getElementById('js--continue--button');
const endEl = document.getElementById('js--end');

const DUMMY_ACHIEVEMENTS = [
    {
        title: 'Voltooi de tour',
        unlocked: false
    },
    {
        title: 'Bezoek alle ruimtes',
        unlocked: false
    },
    {
        title: 'Vind drie voorwerpen',
        unlocked: false
    },
    {
        title: 'Vind alle voorwerpen',
        unlocked: false
    }
];

const achievements = document.getElementById('js--achievements');
const achievementsList = document.getElementById('js--achievements--list');
const achievemensButton = document.getElementById('js--achievements--button');
const achievementsCloseButton = document.getElementById(
    'js--achievements--close--button'
);

achievemensButton.addEventListener('click', () => {
    achievements.classList.toggle('achievements--open');
});

achievementsCloseButton.addEventListener('click', () => {
    achievements.classList.remove('achievements--open');
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
const myEndInfospot = document.getElementById('js--infospot--end');
const myInfoSpot2 = document.getElementById('infospot--2');
const myInfoSpot3 = document.getElementById('infospot--3');
const myInfoSpot4 = document.getElementById('infospot--4');
const myInfoSpot5 = document.getElementById('infospot--5');
const myInfoSpot6 = document.getElementById('infospot--6');
const myInfoSpot7 = document.getElementById('infospot--7');
const myInfoSpot8 = document.getElementById('infospot--8');
const myInfoSpot9 = document.getElementById('infospot--9');
const myInfoSpot10 = document.getElementById('infospot--10');
const myInfoSpot11 = document.getElementById('infospot--11');

const navInfo = document.getElementById('navInfo');
const poolInfo = document.getElementById('poolInfo');
const balustradeInfo = document.getElementById('balustradeInfo');
const challengeInfo = document.getElementById('challengeInfo');
const studiepuntenInfo = document.getElementById('studiepuntenInfo');
const printerInfo = document.getElementById('printerInfo');
const soldeerInfo = document.getElementById('soldeerInfo');
const hardwareInfo = document.getElementById('hardwareInfo');
const laptopInfo = document.getElementById('laptopInfo');
const boekenInfo = document.getElementById('boekenInfo');
const bierInfo = document.getElementById('bierInfo');
const raspberryPiInfo = document.getElementById('raspberryPiInfo');
const hardwareBoxInfo = document.getElementById('hardwareBoxInfo');

//infospots

const foundObjects = [];
const navInfospot = new PANOLENS.Infospot(500, './img/infospot.png');
navInfospot.position.set(0, 850, 5000);
navInfospot.addHoverElement(navInfo, 100);
navInfospot.onClick();

const poolInfospot = new PANOLENS.Infospot(500, './img/infospot.png');
poolInfospot.position.set(2500, -1000, -5000);
poolInfospot.addHoverElement(poolInfo, 150);
poolInfospot.onClick();

const balustradeInfospot = new PANOLENS.Infospot(500, './img/infospot.png');
balustradeInfospot.position.set(-5000, 1000, 1400);
balustradeInfospot.addHoverElement(balustradeInfo, 150);
balustradeInfospot.onClick();

const challengeInfospot = new PANOLENS.Infospot(500, './img/infospot.png');
challengeInfospot.position.set(-1400, 100, -5000);
challengeInfospot.addHoverElement(challengeInfo, 150);
challengeInfospot.onClick();

const studiepuntenInfospot = new PANOLENS.Infospot(500, './img/infospot.png');
studiepuntenInfospot.position.set(4400, 0, 5000);
studiepuntenInfospot.addHoverElement(studiepuntenInfo, 150);
studiepuntenInfospot.onClick();

const printerInfospot = new PANOLENS.Infospot(500, './img/infospot.png');
printerInfospot.position.set(2500, -500, 5000);
printerInfospot.addHoverElement(printerInfo, 150);
printerInfospot.onClick();

const soldeerInfospot = new PANOLENS.Infospot(500, './img/infospot.png');
soldeerInfospot.position.set(5000, -300, 2500);
soldeerInfospot.addHoverElement(soldeerInfo, 150);
soldeerInfospot.onClick();

const hardwareInfospot = new PANOLENS.Infospot(500, './img/infospot.png');
hardwareInfospot.position.set(5000, -1000, -1000);
hardwareInfospot.addHoverElement(hardwareInfo, 150);
hardwareInfospot.onClick();

//items als infospots
//laptop
const laptop = new PANOLENS.Infospot(500, './img/laptop.png', false);
laptop.position.set(4000, -1400, -1500);
laptop.addHoverElement(laptopInfo, 150);
laptop.name = 'PANO_laptop';

laptop.addEventListener('click', () => {
    foundObjects.push(laptop.name);
});

//boeken
const boeken = new PANOLENS.Infospot(500, './img/boeken.png', false);
boeken.position.set(1000, -800, -5000);
boeken.addHoverElement(boekenInfo, 150);
boeken.name = 'PANO_boeken';

boeken.addEventListener('click', () => {
    foundObjects.push(boeken.name);
});

//bierglas
const bierGlas = new PANOLENS.Infospot(400, './img/bierGlas.png', false);
bierGlas.position.set(-5000, -100, 0);
bierGlas.addHoverElement(bierInfo, 150);
bierGlas.name = 'PANO_bierGlas';

bierGlas.addEventListener('click', () => {
    foundObjects.push(bierGlas.name);
});

//raspberry Pi
const raspberryPi = new PANOLENS.Infospot(400, './img/raspberryPi.png', false);
raspberryPi.position.set(5000, -800, 2000);
raspberryPi.addHoverElement(raspberryPiInfo, 150);
raspberryPi.name = 'PANO_raspberryPi';

raspberryPi.addEventListener('click', () => {
    foundObjects.push(raspberryPi.name);
});

//hardware box
const hardwareBox = new PANOLENS.Infospot(1000, './img/hardwareBox.png', false);
hardwareBox.position.set(-5000, -900, -2500);
hardwareBox.addHoverElement(hardwareBoxInfo, 150);
hardwareBox.name = 'PANO_hardwareBox';

hardwareBox.addEventListener('click', () => {
    foundObjects.push(hardwareBox.name);
});

const allObjects = [
    laptop.name,
    boeken.name,
    bierGlas.name,
    raspberryPi.name,
    hardwareBox.name
];

//infospots story gijs

//pano1
const infoSpot1 = new PANOLENS.Infospot(2000, './img/Gijs_Zwaait.png', false);
infoSpot1.position.set(3000, -300, 0);
infoSpot1.addHoverElement(myInfoSpot1, 290);

const infoSpot2 = new PANOLENS.Infospot(2000, './img/gijs-wijzen.png', false);
infoSpot2.position.set(681.13, -752.51, -3000.0);
infoSpot2.addHoverElement(myInfoSpot2, 340);

const infoSpot3 = new PANOLENS.Infospot(2000, './img/Gijs_duimpje.png', false);
infoSpot3.position.set(5000.0, -220.4, -3000);
infoSpot3.addHoverElement(myInfoSpot3, 200);

const infoSpot4 = new PANOLENS.Infospot(2000, './img/gijs-achter.png', false);
infoSpot4.position.set(4909.62, -385.95, -3738.77);
infoSpot4.addHoverElement(myInfoSpot4, 200);

const testInfoSpot = new PANOLENS.Infospot(500, './img/infospot.png');
testInfoSpot.position.set(2455.41, -186.6, -5000.0);
testInfoSpot.addHoverText('Dit is een informatiepunt! ', 50);

//pano2
const infoSpot5 = new PANOLENS.Infospot(1800, './img/Gijs_Zwaait2.png', false);
infoSpot5.position.set(-1581.97, -339.46, 2000.0);
infoSpot5.addHoverElement(myInfoSpot5, 280);

//pano3
const infoSpot6 = new PANOLENS.Infospot(
    1800,
    './img/gijs-laptopduimpie.png',
    false
);
infoSpot6.position.set(-1581.97, -339.46, 2000.0);
infoSpot6.addHoverElement(myInfoSpot6, 280);

//pano4
const infoSpot7 = new PANOLENS.Infospot(1800, './img/gijs-wijzen2.png', false);
infoSpot7.position.set(-1581.97, -339.46, 2000.0);
infoSpot7.addHoverElement(myInfoSpot7, 280);

//pano5
const infoSpot8 = new PANOLENS.Infospot(2500, './img/Gijs_Zwaait3.png', false);
infoSpot8.position.set(1544.9, -500.83, 5000.0);
infoSpot8.addHoverElement(myInfoSpot8, 200);

//pano6
const infoSpot9 = new PANOLENS.Infospot(2500, './img/Gijs_Zwaait4.png', false);
infoSpot9.position.set(1941.67, -856.36, 4732.7);
infoSpot9.addHoverElement(myInfoSpot9, 200);

const infoSpot10 = new PANOLENS.Infospot(3500, './img/gijs-laptop.png', false);
infoSpot10.position.set(4626.66, -1453.12, 3387.41);
infoSpot10.addHoverElement(myInfoSpot10, 200);

//pano7
const infoSpot11 = new PANOLENS.Infospot(3500, './img/Gijs_Zwaait5.png', false);
infoSpot11.position.set(3791.86, -802.15, 5000.0);
infoSpot11.addHoverElement(myInfoSpot11, 200);

let story1 = 0;

function nextPage() {
    if (story1 == 0) {
        infoSpot1.hide();
        infoSpot2.show();
        story1++;
    } else if (story1 == 1) {
        infoSpot2.hide();
        testInfoSpot.hide();
        infoSpot3.show();
        story1++;
    } else if (story1 == 2) {
        infoSpot3.hide();
        infoSpot4.show();
        story1++;
    } else if (story1 == 3) {
        infoSpot4.hide();
        story1++;
    } else {
        infoSpot9.hide();
        viewer.addUpdateCallback(Update2);
    }

    console.log(story1);
}

const endInfospot = new PANOLENS.Infospot(2000, '../img/Gijs_duimpje.png');
endInfospot.position.set(3000, -300, 0);
endInfospot.addHoverElement(myEndInfospot, 150);

var place = document.getElementById('place');
const locationInfo = document.getElementById('informatie');
const information = [
    'dit is buiten voor de hoofdingang',
    'dit is waar je binnenkomt via de hoofdingang, Links zit de kantine',
    'Hier zit het Café waar je wat drinken kan bestellen',
    'Dit is de grote hal van de nieuwbouw',
    'dit is een studieruimte',
    'hier zitten de lokalen van de opleiding informatica',
    'dit is het lab van de opleiding informatica'
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
const panorama8 = new PANOLENS.ImagePanorama(img);
const viewer = new PANOLENS.Viewer({
    container: pan,
    output: 'console',
    autoHideInfospot: false
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

panorama6.addEventListener('enter-complete', function () {
    viewer.addUpdateCallback(Update);
});

function Update() {
    infoSpot10.hide();
}

function Update2() {
    infoSpot10.show();
}

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
panorama.add(infoSpot1, laptop);
panorama2.add(infoSpot2, navInfospot, boeken);
panorama3.add(poolInfospot, bierGlas);
panorama4.add(balustradeInfospot);
panorama5.add(raspberryPi);
panorama6.add(challengeInfospot, studiepuntenInfospot);
panorama7.add(hardwareBox, printerInfospot, soldeerInfospot, hardwareInfospot);
panorama8.add(endInfospot);
panorama.add(infoSpot1, laptop, testInfoSpot, infoSpot2, infoSpot3, infoSpot4);
panorama2.add(navInfospot, infoSpot5, boeken);
panorama3.add(poolInfospot, bierGlas, infoSpot6);
panorama4.add(balustradeInfospot, infoSpot7);
panorama5.add(raspberryPi, infoSpot8);
panorama6.add(challengeInfospot, studiepuntenInfospot, infoSpot9, infoSpot10);
panorama7.add(
    hardwareBox,
    printerInfospot,
    soldeerInfospot,
    hardwareInfospot,
    infoSpot11
);

//adding to objects
viewer.add(
    panorama,
    panorama2,
    panorama3,
    panorama4,
    panorama5,
    panorama6,
    panorama7,
    panorama8
);

resetButton.addEventListener('click', () => {
    endEl.classList.add('end--open');
});

endButton.addEventListener('click', () => {
    endEl.style.display = 'none';
    endEl.classList.remove('end--open');

    viewer.setPanorama(panorama8);
});

continueButton.addEventListener('click', () => {
    endEl.classList.remove('end--open');
});

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
        case 7:
            viewer.scene.children[index].name = 'Buiten';
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
    const hasUserVisitedAllRooms = arrayEquals(allScenes, visitedScenes);
    if (hasUserVisitedAllRooms === true) {
        DUMMY_ACHIEVEMENTS[1].unlocked = true;
        const achievementTwo = document.getElementById('js--achievement--1');
        achievementTwo.classList.add('achievements__achievement--unlocked');
    }
};

const achievementThreeUnlocked = () => {
    DUMMY_ACHIEVEMENTS[2].unlocked = true;
    const achievementThree = document.getElementById('js--achievement--2');
    achievementThree.classList.add('achievements__achievement--unlocked');
};

const achievementFourUnlocked = () => {
    DUMMY_ACHIEVEMENTS[3].unlocked = true;
    const achievementFour = document.getElementById('js--achievement--3');
    achievementFour.classList.add('achievements__achievement--unlocked');
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

        if (foundObjects.length === 3) {
            achievementThreeUnlocked();
        }

        const hasUserFoundAllObjects = arrayEquals(allObjects, foundObjects);
        if (hasUserFoundAllObjects === true) {
            achievementFourUnlocked();
        }
    }
}, 1000);

const startButton = document.querySelector('#startButton');
const startScherm = document.querySelector('#startScherm');

startButton.addEventListener('click', () => {
    startScherm.classList.add('hidden');
    infoSpot2.hide();
    infoSpot3.hide();
    infoSpot4.hide();
});

function arrayEquals(arr1, arr2) {
    return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
}
