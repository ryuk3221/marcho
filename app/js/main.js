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

  $('.product-details__subslider').slick({
    focusOnSelect: true, 
    slidesToShow: 4,
    arrows: true,
    asNavFor: '.product-details__slider',
    draggable: false, 
    vertical: true,
    
  });
  $('.product-details__slider').slick({
    arrows: true,
    fade: true,
    asNavFor: '.product-details__subslider',
    draggable: false, 
    
  })

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






