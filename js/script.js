//open hamburger

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-button').onclick = () =>{
    closer.style.display = 'block';
    navbar.classList.toggle('active');
}

//open cart

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-button').onclick = () =>{
    closer.style.display = 'block';
    cart.classList.toggle('active');
}

//open login

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-button').onclick = () =>{
    closer.style.display = 'block';
    loginForm.classList.toggle('active');
}

//close hamburger/cart/login

let closer = document.querySelector('#closer');

closer.onclick = () =>{
    closer.style.display = 'none';
    navbar.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

//image slider

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
