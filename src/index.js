import "./styles/SCSS/style.scss";
// import { addSliderUI } from "./styles/modules/addSliderUI";
// import { sliderInit } from "./styles/modules/sliderLogic";

import { initialize } from "./modules/sliderLogic";

// const sliderBox = document.querySelector('slider__box');

// addSliderUI(sliderBox);

// sliderInit(document.querySelectorAll('.slider'));

initialize(document.querySelectorAll(".slider"));
