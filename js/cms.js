const categoriesList = document.getElementById('js--categories--list');
const schoolsList = document.getElementById('js--schools--list');
const featuredEducationsList = document.getElementById('js--featured--educations');
const educationsList = document.getElementById('js--educations');
const educationsTitles = document.getElementsByClassName('educations__education__title');

const searchBar = document.getElementById('js--search--bar');

const filterHogeschoolLeidenEl = document.querySelector('[data-filter="hogeschool-leiden"]');
const filterHogeschoolUtrechtEl = document.querySelector('[data-filter="hogeschool-utrecht"]');
const filterHaagseHogeschoolEl = document.querySelector('[data-filter="haagse-hogeschool"]');

const zorgFilterEl = document.querySelector('[data-filter="zorg"]');
const onderwijsFilterEl = document.querySelector('[data-filter="onderwijs"]');
const techniekFilterEl = document.querySelector('[data-filter="techniek"]');

filterHogeschoolLeidenEl.addEventListener('click', () => {
    if (filterHogeschoolLeidenEl.checked) {
        Array.from(featuredEducationsList.children).forEach((education) => {
            if (education.dataset.school !== 'hogeschool-leiden') {
                education.style.display = 'none';
            }
        });
    } else {
        Array.from(featuredEducationsList.children).forEach((education) => {
            education.style.display = 'block';
        });
    }
});

filterHogeschoolUtrechtEl.addEventListener('click', () => {
    if (filterHogeschoolUtrechtEl.checked) {
        Array.from(featuredEducationsList.children).forEach((education) => {
            if (education.dataset.school !== 'hogeschool-utrecht') {
                education.style.display = 'none';
            }
        });
    } else {
        Array.from(featuredEducationsList.children).forEach((education) => {
            education.style.display = 'block';
        });
    }
});

filterHaagseHogeschoolEl.addEventListener('click', () => {
    if (filterHaagseHogeschoolEl.checked) {
        Array.from(featuredEducationsList.children).forEach((education) => {
            if (education.dataset.school !== 'haagse-hogeschool') {
                education.style.display = 'none';
            }
        });
    } else {
        Array.from(featuredEducationsList.children).forEach((education) => {
            education.style.display = 'block';
        });
    }
});

zorgFilterEl.addEventListener('click', () => {
    if (zorgFilterEl.checked) {
        Array.from(featuredEducationsList.children).forEach((education) => {
            if (education.dataset.label !== 'zorg') {
                education.style.display = 'none';
            }
        });
    } else {
        Array.from(featuredEducationsList.children).forEach((education) => {
            education.style.display = 'block';
        });
    }
});

onderwijsFilterEl.addEventListener('click', () => {
    if (onderwijsFilterEl.checked) {
        Array.from(featuredEducationsList.children).forEach((education) => {
            if (education.dataset.label !== 'onderwijs') {
                education.style.display = 'none';
            }
        });
    } else {
        Array.from(featuredEducationsList.children).forEach((education) => {
            education.style.display = 'block';
        });
    }
});

techniekFilterEl.addEventListener('click', () => {
    if (techniekFilterEl.checked) {
        Array.from(featuredEducationsList.children).forEach((education) => {
            console.log(education.dataset.label);
            if (education.dataset.label !== 'techniek') {
                education.style.display = 'none';
            }
        });
    } else {
        Array.from(featuredEducationsList.children).forEach((education) => {
            education.style.display = 'block';
        });
    }
});

const titles = [...educationsTitles];

searchBar.addEventListener('keyup', (event) => {
    event.preventDefault();

    const searchTerm = event.target.value.toLowerCase();

    for (let i = 0; i < titles.length; i++) {
        if (titles[i].textContent.toLowerCase().indexOf(searchTerm) !== -1) {
            // Ugly way to get parentElement :/
            // Have to think of something better!
            titles[i].parentElement.parentElement.parentElement.style.display = 'block';
            titles[i].parentElement.parentElement.parentElement;
        } else {
            titles[i].parentElement.parentElement.parentElement.style.display = 'none';
        }
    }
});

const BASE_URL = 'http://127.0.0.1:8000/api';

const getCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        const data = await response.json();
        renderCategories(data.categories);
    } catch (error) {
        console.log('Error', error);
    }
};

const getSchools = async () => {
    try {
        const response = await fetch(`${BASE_URL}/schools`);
        const data = await response.json();
        renderSchools(data.schools);
    } catch (error) {
        console.log('Error', error);
    }
};

const getEducation = async () => {
    try {
        const response = await fetch(`${BASE_URL}/education`);
        const data = await response.json();
        renderEducations(data.educations);
    } catch (error) {
        console.log('Error:', error);
    }
};

const renderCategories = (categories) => {
    categories.forEach((category) => {
        const categoryListItem = document.createElement('li');
        const categoryListItemCheckbox = document.createElement('input');
        const categoryListItemLabel = document.createElement('label');

        categoryListItemCheckbox.setAttribute('type', 'checkbox');
        categoryListItem.classList.add('categories__category');
        categoryListItemCheckbox.id = `js--${category.name}`;

        categoriesList.appendChild(categoryListItem);
        categoryListItem.appendChild(categoryListItemCheckbox);
        categoryListItem.appendChild(categoryListItemLabel);
        categoryListItemLabel.textContent = category.name;
    });
};

const renderSchools = (schools) => {
    schools.forEach((school) => {
        const schoolListItem = document.createElement('li');
        const schoolListItemCheckbox = document.createElement('input');
        const schoolListItemLabel = document.createElement('label');

        schoolListItemCheckbox.setAttribute('type', 'checkbox');
        schoolListItem.classList.add('schools__school');
        const schoolName = slugify(school.name);
        schoolListItemCheckbox.setAttribute('data-school', schoolName);

        schoolsList.appendChild(schoolListItem);
        schoolListItem.appendChild(schoolListItemCheckbox);
        schoolListItem.appendChild(schoolListItemLabel);
        schoolListItemLabel.textContent = school.name;
    });
};

const renderEducations = (educations) => {
    educations.forEach((education) => {
        const educationArticle = document.createElement('article');
        const educationImg = document.createElement('img');
        const educationInfo = document.createElement('div');
        const educationDetails = document.createElement('div');
        const educationTitle = document.createElement('h3');
        const educationSchool = document.createElement('h4');
        const educationLabel = document.createElement('span');

        educationArticle.classList.add('educations__education');
        educationImg.classList.add('educations__education__img');
        educationInfo.classList.add('educations__education__info');
        educationDetails.classList.add('educations__education__details');
        educationTitle.classList.add('educations__education__title');
        educationSchool.classList.add('educations__education__school');
        educationLabel.classList.add('educations__education__label');

        educationsList.appendChild(educationArticle);
        educationArticle.appendChild(educationImg);
        educationArticle.appendChild(educationInfo);
        educationInfo.appendChild(educationDetails);
        educationInfo.appendChild(educationLabel);
        educationDetails.appendChild(educationTitle);
        educationDetails.appendChild(educationSchool);

        educationImg.src = education.path;
        educationTitle.textContent = education.name;
        educationSchool.textContent = education.school.name;
        educationLabel.textContent = education.category.name;
    });
};

function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

window.addEventListener('load', () => {
    //getCategories();
    //getSchools();
    getEducation();
});
