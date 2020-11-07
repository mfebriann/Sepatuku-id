// Membuat hamburger menu interaktif
const menu = document.querySelector('.list-menu input');
const tampil = document.querySelector('.menu-links');

menu.addEventListener('click', function() {
    tampil.classList.toggle('muncul')
})

// Membuat scroll jadi ada ketika di scroll
const scrollTop = document.querySelector('#scroll-bar');

window.addEventListener('scroll', function() {
    scrollTop.classList.toggle('scroll-bar', window.scrollY > 600)
})

// Membuat loading
const loading = document.querySelector('.loading');
window.addEventListener('load', function(){
    loading.style.display = 'none';
})

// Cart Alert
const cart = document.querySelector('.fa-shopping-cart');
cart.addEventListener('click', function cart() {
    alert('Kamu belum belanja apapun :(');
});

// Heart Alert 
const heart = document.querySelector('.fa-heart');
heart.addEventListener('click', function heart() {
    alert('Terima kasih telah menyukai website ini :D')
})

// Button Alert 
const langganan = document.querySelector('#button');
langganan.addEventListener('click',function button() {
    alert('Terima kasih telah berlangganan')
})
