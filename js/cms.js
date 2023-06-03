const uploadForm = document.getElementById('js--upload--form');
const file = document.getElementById('file');

const categoriesList = document.getElementById('js--categories--list');
const schoolsList = document.getElementById('js--schools--list');
const educationsList = document.getElementById('js--educations');

const filterHogeschoolLeidenEl = document.querySelector('[data-filter="hogeschool-leiden"]');
const filterHogeschoolUtrechtEl = document.querySelector('[data-filter="hogeschool-utrecht"]');
const filterHaagseHogeschoolEl = document.querySelector('[data-filter="haagse-hogeschool"]');

filterHogeschoolLeidenEl.addEventListener('click', () => {
    if (filterHogeschoolLeidenEl.checked) {
        Array.from(educationsList.children).forEach((education) => {
            if (education.dataset.school !== 'hogeschool-leiden') {
                education.style.display = 'none';
            }
        });
    } else {
        Array.from(educationsList.children).forEach((education) => {
            education.style.display = 'block';
        });
    }
});

filterHogeschoolUtrechtEl.addEventListener('click', () => {
    if (filterHogeschoolUtrechtEl.checked) {
        Array.from(educationsList.children).forEach((education) => {
            if (education.dataset.school !== 'hogeschool-utrecht') {
                education.style.display = 'none';
            }
        });
    } else {
        Array.from(educationsList.children).forEach((education) => {
            education.style.display = 'block';
        });
    }
});

filterHaagseHogeschoolEl.addEventListener('click', () => {
    if (filterHaagseHogeschoolEl.checked) {
        Array.from(educationsList.children).forEach((education) => {
            if (education.dataset.school !== 'haagse-hogeschool') {
                education.style.display = 'none';
            }
        });
    } else {
        Array.from(educationsList.children).forEach((education) => {
            education.style.display = 'block';
        });
    }
});

const BASE_URL = 'http://127.0.0.1:8000/api';

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(`${BASE_URL}/education/store`, {
            method: 'POST',
            body: JSON.stringify({
                file: file.value,
            }),
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('The file', file.value);
        console.log('The response', response);
    } catch (error) {
        console.log('There was an error', error);
    }
});

const getCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();
    // renderCategories(data.categories);
};

const getSchools = async () => {
    const response = await fetch(`${BASE_URL}/schools`);
    const data = await response.json();
    // renderSchools(data.schools);
};

const getEducation = async () => {
    try {
        const response = await fetch(`${BASE_URL}/education`);
        const data = await response.json();
        // console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
};

const uploadFile = async () => {
    try {
        const response = await fetch(`${BASE_URL}/educations/store`, {
            method: 'POST',
            body: JSON.stringify({
                file: file,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error', error);
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

function slugify(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

window.addEventListener('load', () => {
    getCategories();
    getSchools();
    getEducation();
});
