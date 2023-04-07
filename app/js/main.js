let x = false;
const menuBtn = document.querySelector('.header__btn');
menuBtn.onclick = function() {
  if (x === false) {
    document.querySelector('.menu').style.transform = 'translateX(-0%)';
    x = true;
  }
  else {
    document.querySelector('.menu').style.transform = 'translateX(-100%)';
    x = false
  }
};

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
  $('.product-details__stars').rateYo({
    starWidth: "18px",
    numStars: 5,
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
  });
  $('.reviews__rate').rateYo({
    starWidth: "18px",
    numStars: 5,
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
  });
  $('.product-details__number').styler();
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

  $('.product-details__subslider').slick({
    focusOnSelect: true, 
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.product-details__slider',
    draggable: false, 
    vertical: true,
  });

  $('.product-details__slider').slick({
    arrows: false,
    fade: true,
    asNavFor: '.product-details__subslider',
    draggable: false, 
  });

  $('.blog-list__item-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g id="surface1"><path style=" stroke:none;" d="M 0.332031 6.382812 C -0.109375 6.722656 -0.109375 7.277344 0.332031 7.621094 L 5.957031 11.996094 C 6.394531 12.335938 7.109375 12.335938 7.546875 11.996094 C 7.988281 11.652344 7.988281 11.097656 7.546875 10.757812 L 2.71875 7 L 7.542969 3.242188 C 7.984375 2.902344 7.984375 2.347656 7.542969 2.003906 C 7.105469 1.664062 6.390625 1.664062 5.953125 2.003906 L 0.328125 6.378906 Z M 0.332031 6.382812 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g id="surface1"><path style=" stroke:none;" d="M 8.667969 6.382812 C 9.109375 6.722656 9.109375 7.277344 8.667969 7.621094 L 3.042969 11.996094 C 2.605469 12.335938 1.890625 12.335938 1.453125 11.996094 C 1.011719 11.652344 1.011719 11.097656 1.453125 10.757812 L 6.28125 7 L 1.457031 3.242188 C 1.015625 2.902344 1.015625 2.347656 1.457031 2.003906 C 1.894531 1.664062 2.609375 1.664062 3.046875 2.003906 L 8.671875 6.378906 Z M 8.667969 6.382812 "/></g></svg></button>',
  })

})

const tabsBtn = document.querySelectorAll('[data-tab]');
tabsBtn.forEach(function(item) {
  item.onclick = function() {
    const tabsContent = document.querySelectorAll('[data-tab-content]');
    tabsContent.forEach(function(el) {
      el.classList.add('product-tabs__content--hide');
    })
    document.querySelector(`#${this.dataset.tab}`).classList.remove('product-tabs__content--hide')
    tabsBtn.forEach(function(el){
      el.classList.remove('product-tabs__btn--active');
    });
    this.classList.add('product-tabs__btn--active')
  }
});


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
  });

  document.querySelectorAll('.product-item__text').forEach(function(el){
    el.style.display = 'block'
  });

  const productImgBox = document.querySelectorAll('.product-item__img-box');
  productImgBox.forEach(function(item) {
    item.classList.add('product-item__img-box--list');
  });

  const productImg = document.querySelectorAll('.product-item__image');
  productImg.forEach(function(item) {
    item.classList.add('product-item__image--list');
  });

  const productItemContentBox = document.querySelectorAll('.product-item__content-box');
  productItemContentBox.forEach(function(item) {
    item.classList.add('product-item__content-box--list')
  });

  const productTitle = document.querySelectorAll('.product-item__title');
  productTitle.forEach(function(item) {
    item.classList.add('product-item__title--list');
  });

  const productItemStars = document.querySelectorAll('.product-item__stars');
  productItemStars.forEach(function(item) {
    item.classList.add('product-item__stars--list')
  });

  const productItemPrice = document.querySelectorAll('.product-item__price');
  productItemPrice.forEach(function(item) {
    item.classList.add('product-item__price--list');
  });

  const productItemText = document.querySelectorAll('.product-item__text');
  productItemText.forEach(function(item) {
  item.classList.add('product-item__text--list');
  });

  document.querySelectorAll('.product-item__btn').forEach(function(item) {
    item.style.display = 'block';
  });

  const productItemLinkBox = document.querySelectorAll('.product-item__link-box');
  productItemLinkBox.forEach(function(item) {
    item.classList.add('product-item__link-box--list');
  });

  const productLink = document.querySelectorAll('.product-item__link');
  productLink.forEach(function(item) {
    item.classList.add('product-item__link--list');
  });
  
  const productLinkHide = document.querySelectorAll('.product-item__link--hide');
  productLinkHide.forEach(function(item) {
    item.classList.add('hide');
  });

  document.querySelector('.pagination').style.paddingTop = '0';
  document.querySelector('.pagination').style.borderTop = 'none';

} 


function hideShopContentList() {
  const shopContentInner = document.querySelector('.shop-content__inner');
  shopContentInner.classList.remove('shop-content__inner--list');
  const shopContentItems = document.querySelectorAll('.product-item');
  shopContentItems.forEach(function(item) {
    item.classList.remove('product-item__shop-page');
  });
  document.querySelectorAll('.product-item__text').forEach(function(el){
    el.style.display = 'none'
  });
  const productImgBox = document.querySelectorAll('.product-item__img-box');
  productImgBox.forEach(function(item) {
    item.classList.remove('product-item__img-box--list');
  });

  const productImg = document.querySelectorAll('.product-item__image');
  productImg.forEach(function(item) {
    item.classList.remove('product-item__image--list');
  });

  const productItemContentBox = document.querySelectorAll('.product-item__content-box');
  productItemContentBox.forEach(function(item) {
    item.classList.remove('product-item__content-box--list')
  });

  const productTitle = document.querySelectorAll('.product-item__title');
  productTitle.forEach(function(item) {
    item.classList.remove('product-item__title--list');
  });

  const productItemStars = document.querySelectorAll('.product-item__stars');
  productItemStars.forEach(function(item) {
    item.classList.remove('product-item__stars--list')
  });

  const productItemPrice = document.querySelectorAll('.product-item__price');
  productItemPrice.forEach(function(item) {
    item.classList.remove('product-item__price--list');
  });

  const productItemText = document.querySelectorAll('.product-item__text');
  productItemText.forEach(function(item) {
  item.classList.remove('product-item__text--list');
  });


  document.querySelectorAll('.product-item__btn').forEach(function(item) {
    item.style.display = 'none';
  })

  const productItemLinkBox = document.querySelectorAll('.product-item__link-box');
  productItemLinkBox.forEach(function(item) {
    item.classList.remove('product-item__link-box--list');
  })

  const productLink = document.querySelectorAll('.product-item__link');
  productLink.forEach(function(item) {
    item.classList.remove('product-item__link--list');
  })
  
  const productLinkHide = document.querySelectorAll('.product-item__link--hide');
  productLinkHide.forEach(function(item) {
    item.classList.remove('hide');
  })

  document.querySelector('.pagination').style.paddingTop = '40px';
  document.querySelector('.pagination').style.borderTop = '1px solid #efefef';
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

//-----map-----
let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 40.75106927018396, lng: -73.98590798562749 },
    zoom: 12,
  });
}

initMap();
//-----map-----




