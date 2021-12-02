import React from 'react';
import burgerImg from './../../assets/images/burgerImg.png';
import pastaImg from './../../assets/images/pastaImg.png';
import meatImg from './../../assets/images/mealImg.png';
import homeIcon from  '../../assets/images/homeIcon.png';
import profileIcon from  '../../assets/images/profileIcon.png';
import orderIcon from  '../../assets/images/ordersIcon.png';
import cartIcon from  '../../assets/images/cartIcon.png';
import pancakeImg from  '../../assets/images/pancakeImg.png';
import soupImg from  '../../assets/images/soupImg.png';
import pastaImg2 from '../../assets/images/topPastaImage.png';


const mealOfDayData = [
    {
        name:'Stir fry Pasta',
        description: 'Stir fry pasta yada yada yada because of Sesan',
        mealImg: burgerImg,
    },
    {
        name:'Meat Balls',
        description: 'Stir fry pasta yada yada yada because of Sesan',
        mealImg: pastaImg,

    },
    {
        name:'Burger Meal',
        description: 'Stir fry pasta yada yada yada because of Sesan',
        mealImg: meatImg,

    }
];

const companyAllInfo = [
    ['Company','About Us','Careers'],
    ['Support','Help Center','Safety Center'],
    ['Legal','Cookies Policy','Privacy Policy','Terms of Service','Dispute resolution']
];

const dashboardListData = [
    {
        icon:homeIcon,
        text:'Dashboard'
    },
    {
        icon:profileIcon,
        text:'Your Profile'
    },
    {
        icon:orderIcon,
        text:'Orders'
    },
    {
        icon:cartIcon,
        text:'Your Cart'
    }
];

const productsData  = [
    {
        foodImg:burgerImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:0,
    },
    {
        foodImg:pastaImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:1,
    },
    {
        foodImg:meatImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:2,
    },
    {
        foodImg:pancakeImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:3,
    },
    {
        foodImg:soupImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:4,
    },
    {
        foodImg:pastaImg2,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:5,
    },
    {
        foodImg:burgerImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:6,
    },
    {
        foodImg:pastaImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:7,
    },
    {
        foodImg:meatImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:8,
    },
    {
        foodImg:pancakeImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:9,
    },
    {
        foodImg:soupImg,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:10,
    },
    {
        foodImg:pastaImg2,
        foodName:'Stir Fry Pasta',
        foodDescription:'The in-house pasta and chicken by chef Moose',
        price:1000,
        add:'Add to cart',
        fullDescription:'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
        cookingTime: '10-20',
        availablePcs:10,
        qty:0,
        id:11,
    },
];


export {
    mealOfDayData,
    companyAllInfo,
    dashboardListData,
    productsData

}