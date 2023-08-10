const API_BASE = 'https://fakestoreapi.com/products';

const product = {
    title: 'Huawei MAde Me ProA+',
    price: 1200,
    description: 'none',
    image: 'https://hotline.ua/img/tx/205/2055812195.jpg',
    category: 'Phones',
    rating: {
        rate: '5.0',
        count: '24'
    }
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
}

fetch(API_BASE, options)
.then((response) => response.json())
.then((data) => console.log(data))