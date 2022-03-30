import path from 'path'
import fs from 'fs'
import { Liquid } from 'liquidjs'

// Nodejs render file index.html
const engine = new Liquid({
    root: path.resolve(),
    extname: '.liquid'
})

const ctx = {
    products: [
        {
            title: 'Shapoo Bali Suger Hydrating',
            price: '€67',
            rate: 5,
            numberRate: 72,
            image: './assets/img/product2.jpg'
        },
        {
            title: 'Sunny Honey Bali Bronzing Foam',
            price: '€31.9',
            rate: 5,
            numberRate: 1569,
            image: './assets/img/product3.jpg',
            button:'Choose Colour'
        },
        {
            title: 'Super Hydrating Shapoo & Conditioner Set',
            price: '€38',
            comparePrice: '€49.8',
            rate: 5,
            numberRate: 91,
            image: './assets/img/product1.jpg'
        },
        {
            title: 'Bronzing Face Drops',
            price: '€26.9',
            rate: 5,
            numberRate: '€406',
            image: './assets/img/product4.jpg'
        },
        {
            title: 'Like A Woney Bali Bronzing Foam',
            price: '99',
            rate: 5,
            numberRate: 127,
            image: './assets/img/product5.jpg'
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            price: '€31.9',
            comparePrice: '€40',
            rate: 5,
            numberRate: 8471,
            image: './assets/img/product6.jpg'
        }
    ]
}

engine
    .renderFile('template', ctx)
    .then((template) => {
        fs.writeFile('index.html', template, function () { })
    })