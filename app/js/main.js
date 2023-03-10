$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  })
  $('.product-item__stars').rateYo({
    starWidth: "18px",
    numStars: 5,
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    // readOnly: true
  })
})