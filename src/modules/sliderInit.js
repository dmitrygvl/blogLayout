import Slider from "./sliderLogic";

export function sliderInit() {
  const options = { gap: "7%", duration: "1s", interval: "10000" };
  const carousel = new Slider(document.querySelector(".slider"), options);
  carousel.initialize();
}
