let header=document.querySelector('header')
let menu=document.getElementById('menu')
let navbar=document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow',window.scrollY>0)
})

menu.addEventListener('click',()=>{
  menu.classList.toggle('fa-bars')
  navbar.classList.toggle('active')
})
window.addEventListener('scroll',()=>{
  menu.classList.remove('fa-bars')
  navbar.classList.remove('active')
})


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });
  var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 55000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints:{
      0:{
        slidesPerView:2,
      },
      568:{
        slidesPerView:3,
      },
      768:{
        slidesPerView:4,
      },
      968:{
        slidesPerView:5,
      },
    },
  });