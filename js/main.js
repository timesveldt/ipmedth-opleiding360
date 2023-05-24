const categoriesList = document.getElementById('js--categories--list');

const BASE_URL = 'http://127.0.0.1:8000/api';

const getCategories = async () => {
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();
    renderCategories(data.categories);
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

window.addEventListener('load', () => {
    getCategories();
});
