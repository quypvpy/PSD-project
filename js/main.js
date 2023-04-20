const menuToggle = document.querySelector('.menu-respontive')
const menuHeader = document.querySelector('.header-menu')

const expandClass = 'is-expand'

menuToggle.addEventListener('click', function () {
  menuHeader.classList.add(expandClass)
})
// kkhi nhấn ngpoaif phần menu thì toggle chạy vô lại.
//  nếu kích vào window thifg kiểm tra nếu k phải menu header và k phải nút nhấn mở ra.
// nhows là để class .mewnu-respontive ở thẻ i k là die
window.addEventListener('click', function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches('.menu-respontive')) {
    menuHeader.classList.remove(expandClass)
  }
})
