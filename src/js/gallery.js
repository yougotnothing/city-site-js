const modalButtons = document.querySelectorAll('.photoButton');
modalButtons.forEach(modalButton => {
  modalButton.addEventListener('click', () => {
    sliderElm.dataset.showIndex = modalButton.dataset.index;
  });
});

const sliderElm = document.querySelector('.splide');
const SLIDE_SPEED = 400;
const slider = new Splide(sliderElm, {
  type: 'fade',
  rewind: true,
  speed: SLIDE_SPEED,
}).mount();

MicroModal.init({
  onShow: () => {
    slider.options = {
      speed: 0
    };
    slider.go(Number(sliderElm.dataset.showIndex));
    slider.options = {
      speed: SLIDE_SPEED
    };
  }
});