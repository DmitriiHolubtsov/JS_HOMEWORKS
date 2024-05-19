"use strict";
(function(){

    // Some store data
    const productsData = {
            electronics: [
                { id: 1, name: 'Smartphone', description: 'Cool Smartphone' },
                { id: 2, name: 'Notebook', description: 'Fast computer' }
            ],
            clothing: [
                { id: 3, name: 'T-Shirt', description: 'Color T-Shirt' },
                { id: 4, name: 'Pants', description: 'Blue pants' }
            ],
            books: [
                { id: 5, name: 'Book A', description: 'Interesting book' },
                { id: 6, name: 'Book B', description: 'Scarry book' }
            ]
        };

        const body = document.body;

        // Styling body element
        body.style.display = "flex";
        body.style.fontFamily = "Arial, sans-serif";

        // Creating Category block
        const categoriesDiv = document.createElement('div');

        // Styling Category block
        categoriesDiv.style.width = '30%';
        categoriesDiv.style.border = '1px solid #000';
        categoriesDiv.style.height = '100vh';
        categoriesDiv.style.overflowY = 'auto';
        categoriesDiv.style.padding = '20px';

        // Creating Ctegories Title Element
        const categoriesTitle = document.createElement('h2');
        categoriesTitle.textContent = 'Categories';
        categoriesDiv.appendChild(categoriesTitle);

        // Creating List Element
        const categoriesList = document.createElement('ul');
        const categories = Object.keys(productsData);
        categories.forEach(category => {
            const categoryItem = document.createElement('li');
            categoryItem.style.cursor = 'pointer';
            categoryItem.textContent = category;
            categoryItem.onclick = () => showProducts(category);
            categoriesList.appendChild(categoryItem);
        });
        categoriesDiv.appendChild(categoriesList);
        body.appendChild(categoriesDiv);

        // Creating Products block
        const productsDiv = document.createElement('div');

        // Styling Products block
        productsDiv.style.width = '30%';
        productsDiv.style.border = '1px solid #000';
        productsDiv.style.height = '100vh';
        productsDiv.style.overflowY = 'auto';
        productsDiv.style.padding = '20px';
        productsDiv.style.display = 'none';

        // Creating Products Title Element
        const productsTitle = document.createElement('h2');
        productsTitle.textContent = 'Products';
        productsDiv.appendChild(productsTitle);

        const productList = document.createElement('ul');
        productList.id = 'product-list';
        productsDiv.appendChild(productList);
        body.appendChild(productsDiv);

        // Створення блоку інформації про товар
        const productDetailsDiv = document.createElement('div');

         // Styling Products Info block
         productDetailsDiv.style.width = '30%';
         productDetailsDiv.style.border = '1px solid #000';
         productDetailsDiv.style.height = '100vh';
         productDetailsDiv.style.overflowY = 'auto';
         productDetailsDiv.style.padding = '20px';
        productDetailsDiv.style.display = 'none';

         // Creating Products Info Title Element
        const productDetailsTitle = document.createElement('h2');
        productDetailsTitle.textContent = 'Product Info';
        productDetailsDiv.appendChild(productDetailsTitle);

        const productInfoDiv = document.createElement('div');
        productInfoDiv.id = 'product-info';
        productDetailsDiv.appendChild(productInfoDiv);

        // Creating Button element
        const buyButton = document.createElement('div');

        // Styling Button Element
        buyButton.style.display = 'inline-block';
        buyButton.style.padding = '10px 20px';
        buyButton.style.marginTop = '20px';
        buyButton.style.backgroundColor = 'green';
        buyButton.style.color = '#fff';
        buyButton.style.textAlign = 'center';
        buyButton.style.cursor = 'pointer';
        
        buyButton.textContent = 'Buy';
        buyButton.onclick = buyProduct;
        productDetailsDiv.appendChild(buyButton);
        body.appendChild(productDetailsDiv);

        function showProducts(category) {
            productsDiv.style.display = 'block';
            productDetailsDiv.style.display = 'none';

            productList.innerHTML = '';
            productsData[category].forEach(product => {
                const li = document.createElement('li');
                li.style.cursor = 'pointer';
                li.textContent = product.name;
                li.onclick = () => showProductDetails(category, product.id);
                productList.appendChild(li);
            });
        }

        function showProductDetails(category, productId) {
            productDetailsDiv.style.display = 'block';

            const product = productsData[category].find(p => p.id === productId);
            productInfoDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
        }

        function buyProduct() {
            alert('Your Purshased Complete!');
            categoriesDiv.style.display = 'block';
            productsDiv.style.display = 'none';
            productDetailsDiv.style.display = 'none';
        }

    createCategoryList();

})();