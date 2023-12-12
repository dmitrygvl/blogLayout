export default class Slider {
  slides = [];

  currentSlideInd = 0;

  intervalTimer = null;

  constructor(
    element,
    { gap = "5%", duration = "0.5s", interval = null } = {},
  ) {
    this.options = { gap, duration, interval };
    this.slider = element;
  }

  initialize() {
    this.slider.classList.add("slider");
    this.initializeSlides();
    this.addButtons();
    this.setOptions();
  }

  startAutoPlay() {
    const clickEvent = new Event("click");
    this.intervalTimer = setInterval(() => {
      this.rightArrow.dispatchEvent(clickEvent);
    }, this.options.interval);
  }

  setOptions() {
    this.slider.style.gap = this.options.gap;
    this.slider.querySelectorAll(".slider__item").forEach((slide) => {
      slide.style["transition-duration"] = this.options.duration;
    });

    if (this.options.interval !== null) {
      this.startAutoPlay();
    }
  }

  initializeSlides() {
    if (!this.slider) return;

    for (const slide of this.slider.children) {
      if (slide) {
        slide.classList.add("slider__item");
      }
      if (slide.firstElementChild) {
        slide.firstElementChild.classList.add("slider__image");
        this.slides.push(slide);
      }
    }
  }

  addButtons() {
    function moveSlides(direction) {
      this.currentSlideInd += direction;

      if (this.intervalTimer) {
        clearInterval(this.intervalTimer);
        this.startAutoPlay();
      }

      if (this.currentSlideInd >= this.slides.length) {
        this.slides.forEach((slide) => {
          slide.style.transform = "translateX(0)";
          this.currentSlideInd = 0;
          this.leftArrow.style.display = "none";
        });
        return;
      }

      if (this.leftArrow.style.display === "none" && this.currentSlideInd > 0) {
        this.leftArrow.style.display = "block";
      } else if (this.currentSlideInd === 0) {
        this.leftArrow.style.display = "none";
      }

      this.slides.forEach((slide) => {
        const translateX =
          this.currentSlideInd * 100 +
          this.currentSlideInd * parseFloat(this.options.gap);
        slide.style.transform = `translateX(-${translateX}%)`;
      });
    }

    this.leftArrow = this.createButton("left-arrow", moveSlides.bind(this, -1));
    this.leftArrow.style.display = "none";
    this.rightArrow = this.createButton(
      "right-arrow",
      moveSlides.bind(this, 1),
    );
  }

  createButton(name, eventHandler) {
    const button = document.createElement("button");
    button.classList.add(`slider__${name}`);
    button.addEventListener("click", eventHandler);
    const icon = document.createElement("div");
    icon.classList.add(`slider__${name}-icon`);
    button.appendChild(icon);
    this.slider.appendChild(button);

    return button;
  }
}

export function sliderInit() {
  const options = { gap: "7%", duration: "1s", interval: "10000" };
  const carousel = new Slider(document.querySelector(".slider"), options);
  carousel.initialize();
}
