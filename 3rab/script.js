//Табы
let tab = function(){
    let tabNav = document.querySelectorAll('.item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
    tabNav.forEach(item => {item.addEventListener('click', selectTabNav)})
    function selectTabNav(){
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName){
        tabContent.forEach(item =>{
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
}
tab();

//Слайдер
let slideIndex = 1,
    slides = document.querySelectorAll('.sliderNew-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

    showSlides(slideIndex);
function showSlides (n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';

    }
function plusSlides(n) {
    showSlides(slideIndex += n); 
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
})

//Аккордеон
const accordion = () => {
    const btns = document.querySelectorAll(".ac-head");
    const blocks = document.querySelectorAll(".ac-block");
    blocks.forEach((block) => {
		block.classList.add("animate__animated", "animate__fadeIn");
    });
    btns.forEach((btn) => {
		btn.addEventListener("click", function () {
            if (!this.classList.contains("active")) {
                btns.forEach((btn) => {
                    btn.classList.remove("active", "active-style");
                });
                this.classList.add("active", "active-style");
	        } else {
                btns.forEach((btn) => {
	                btn.classList.remove("active", "active-style");
                });
	    	}
        });
	});
}
accordion();

//Фильтрация 

const nav = document.querySelector('.filtr-nav'),
    content = document.querySelectorAll('.cont'),
    navLis = document.querySelectorAll('.li')

function filter() {
    nav.addEventListener('click', event =>{
        const targetId = event.target.dataset.id
        const target = event.target
        
        if (target.classList.contains('id')){
            navLis.forEach(navLi => navLi.classList.remove('active'))
            target.classList.add('active')
        }

        switch(targetId){
            case 'all':
                getItems('cont')
                break
            case 'new':
                getItems(targetId)
                break
            case 'popular':
                getItems(targetId)
                break
            case 'best':
                getItems(targetId)
                break    
        }
    })
}
filter()
function getItems(className){
    content.forEach(item =>{
        if (item.classList.contains(className)){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
}

//Бургер-меню
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener('click', function()
    {
        document.querySelector("header").classList.toggle("open")
    })
})

//Модальное окно
let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close_modal_window")[0];

let allBtn = document.querySelectorAll('.podr'); /* Берем все кнопки */
allBtn.forEach(function(element) {
    element.onclick = showModal;
    
})

function showModal() {
    modal.style.display = "block"; /* Выводим модальное окно */
}

span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  function hideModal(event) {
    if (event.target === modal){
        closeModal();
    }
}



