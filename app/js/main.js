$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });
  $('.product-item__stars').rateYo({
    starWidth: "18px",
    numStars: 5,
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    // readOnly: true
  });
  $('.js-range-slider').ionRangeSlider({
    onChange(data) {
      $('.data-from').text(`$${data.from}`);
      $('.data-to').text(`$${data.to}`);
    },
    onStart(data) {
      $('.data-from').text(`$${data.from}`);
      $('.data-to').text(`$${data.to}`);
    }
  });
  $('.select-style').styler();
})


const myCheckboxes = document.getElementsByClassName('filter-size__input');
const myText = document.getElementsByClassName('filter-size__text');
for (let k of myCheckboxes) {
  k.onchange = func;
}
function func() {
  for (let i = 0; i < myCheckboxes.length; i++) {
    if (myCheckboxes[i].checked) {
      myText[i].style.color = '#fe3e57';
    }
    else {
      myText[i].style.color = '#8d8d8d';
    }
  }
}

//-----скрипты для отображения shop-content-list-----
const buttonsView = document.querySelectorAll('.shop-content__filter-btn');
buttonsView[0].addEventListener('click', hideShopContentList);
buttonsView[1].addEventListener('click', showShopContentList);


function showShopContentList() {
  const shopContentInner = document.querySelector('.shop-content__inner');
  shopContentInner.classList.add('shop-content__inner--list');

  const shopContentItems = document.querySelectorAll('.product-item');
  shopContentItems.forEach(function(item) {
    item.classList.add('product-item__shop-page');
  })

  document.querySelectorAll('.product-item__text').forEach(function(el){
    el.style.display = 'block'
  });

  const productImgBox = document.querySelectorAll('.product-item__img-box');
  productImgBox.forEach(function(item) {
    item.classList.add('product-item__img-box--list');
  })

  const productImg = document.querySelectorAll('.product-item__image');
  productImg.forEach(function(item) {
    item.classList.add('product-item__image--list');
  })

  const productItemContentBox = document.querySelectorAll('.product-item__content-box');
  productItemContentBox.forEach(function(item) {
    item.classList.add('product-item__content-box--list')
  })
}


function hideShopContentList() {
  const shopContentInner = document.querySelector('.shop-content__inner');
  shopContentInner.classList.remove('shop-content__inner--list');
  const shopContentItems = document.querySelectorAll('.product-item');
  shopContentItems.forEach(function(item) {
    item.classList.remove('product-item__shop-page');
  })
  document.querySelectorAll('.product-item__text').forEach(function(el){
    el.style.display = 'none'
  });
}
//-----скрипты для отображения shop-content-list-----


//-----скрипты для кнопок в shop-content-----
for (let i of buttonsView) {
  i.onclick = shopContentShow;
}

function shopContentShow() {
  buttonsView.forEach((el) => {
    el.classList.remove('shop-content__filter-btn--active');
  })
  let myBtn = this;
  myBtn.classList.toggle('shop-content__filter-btn--active');
}
//-----скрипты для кнопок в shop-content-----




//-----TIMER-----
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = '2023-05-11';
initializeClock('clockdiv', deadline);
//-----TIMER-----

