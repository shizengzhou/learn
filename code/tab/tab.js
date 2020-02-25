function handleClick() {
  const oldLi = document.querySelector('.nav > .active');
  oldLi.classList.remove('active');

  const oldSelector = oldLi.getAttribute('data-target');
  const oldContent = document.querySelector(oldSelector);
  oldContent.classList.remove('active');


  const selector = this.getAttribute('data-target');
  this.classList.add('active');

  const content = document.querySelector(selector);
  content.classList.add('active');
}

const nav = document.querySelector('.nav');
const lis = nav.querySelectorAll('.nav > li');
Array.prototype.slice.apply(lis).forEach(function (elem) {
  elem.addEventListener('click', handleClick);
});