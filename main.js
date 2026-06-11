const radioButtons = document.querySelectorAll('.preorder__radio');

  let selectedRadio = null;

  radioButtons.forEach((radio) => {
    radio.addEventListener('click', () => {
      if (selectedRadio === radio) {
        radio.checked = false;
        selectedRadio = null;
      } else {
        selectedRadio = radio;
      }
    });
  });

const catalogPrice = document.querySelector('.catalog__price--main');
const mobileMedia = window.matchMedia('(max-width: 767px)');

function updateCatalogPrice(event) {
  if (!catalogPrice) return;

  catalogPrice.textContent = event.matches
    ? 'от 90 000 ₽'
    : 'от 120 000 ₽';
}

updateCatalogPrice(mobileMedia);
mobileMedia.addEventListener('change', updateCatalogPrice);