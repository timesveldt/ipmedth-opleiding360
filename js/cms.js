const categoriesList = document.getElementById('js--categories--list');
const schoolsList = document.getElementById('js--schools--list');

const BASE_URL = 'http://127.0.0.1:8000/api';

const getCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();
    renderCategories(data.categories);
};

const getSchools = async () => {
    const response = await fetch(`${BASE_URL}/schools`);
    const data = await response.json();
    renderSchools(data.schools);
};

const renderCategories = (categories) => {
    categories.forEach((category) => {
        const categoryListItem = document.createElement('li');
        const categoryListItemCheckbox = document.createElement('input');
        const categoryListItemSpan = document.createElement('span');

        categoryListItemCheckbox.setAttribute('type', 'checkbox');
        categoryListItem.classList.add('categories__category');
        categoryListItemCheckbox.id = `js--${category.name}`;

        categoriesList.appendChild(categoryListItem);
        categoryListItem.appendChild(categoryListItemCheckbox);
        categoryListItem.appendChild(categoryListItemSpan);
        categoryListItemSpan.textContent = category.name;
    });
};

const renderSchools = (schools) => {
    schools.forEach((school) => {
        const schoolListItem = document.createElement('li');
        const schoolListItemCheckbox = document.createElement('input');
        const schoolListItemSpan = document.createElement('span');

        schoolListItemCheckbox.setAttribute('type', 'checkbox');
        schoolListItem.classList.add('schools__school');
        const schoolName = slugify(school.name);
        schoolListItemCheckbox.id = `js--${schoolName}`;

        schoolsList.appendChild(schoolListItem);
        schoolListItem.appendChild(schoolListItemCheckbox);
        schoolListItem.appendChild(schoolListItemSpan);
        schoolListItemSpan.textContent = school.name;
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
});
