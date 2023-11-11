export const addSliderUI = (el) => {
  // const sliderBox = document.querySelector('slider__box');
  el.innerHTML = `
  <ul class="slider">
          <button class="button button__preview"></button>
          <li><a href="article.html"><img class="slider__img" src="../assets/img/img4.png" alt="Slider image"/></a></li>
          <li><a href="article.html"><img class="slider__img" src="../assets/img/img5.png" alt="Slider image"/></a></li>
          <li><a href="article.html"><img class="slider__img" src="../assets/img/img6.png" alt="Slider image"/></a></li>
          <li><a href="article.html"><img class="slider__img" src="../assets/img/img7.png" alt="Slider image"/></a></li>
          <li><a href="article.html"><img class="slider__img" src="../assets/img/img8.png" alt="Slider image"/></a></li>
          <li><a href="article.html"><img class="slider__img" src="../assets/img/img9.png" alt="Slider image"/></a></li>
          <button class="button button__next"></button>
        </ul>
  `;
};
