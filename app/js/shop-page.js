
//-----filter ataptive
var a = false;
const filterAdaptiveBtn = document.querySelector('.filter-adaptive-btn');
filterAdaptiveBtn.onclick = function(){
  if (a === false) {
    document.querySelector('.shop__filters').style.transform = 'translateX(0)';
    a = true;
  }
}
const arrowBack = document.querySelector('.filter-btn-adaptive-hide');
arrowBack.onclick = function() {
  document.querySelector('.shop__filters').style.transform = 'translateX(110%)';
    a = false;
}
//-----filter ataptive
