var open = document.getElementsByClassName('menu-open')
var close = document.getElementsByClassName('menu-close')
var mobile = document.getElementById('mobile-nav')
open[0].addEventListener("click", function() {
    mobile.style.display = 'block'
    open[0].style.display = 'none'
})


close[0].addEventListener("click", function() {
    mobile.style.display = 'none'
    open[0].style.display = 'block'
})
