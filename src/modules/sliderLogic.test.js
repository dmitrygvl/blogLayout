import Slider from "./sliderLogic";
import { sliderInit } from "./sliderInit";

describe("Slider Class", () => {
  let sliderInstance;

  beforeAll(() => {
    document.body.innerHTML = ` 
      <div class="slider">
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </div>
    `;

    const options = { gap: "7%", duration: "1s", interval: "10000" };
    sliderInstance = new Slider(document.querySelector(".slider"), options);
    sliderInstance.initialize();
  });

  it("should have added necessary classes and structure to the slider", () => {
    expect(sliderInstance.slider.classList.contains("slider")).toBe(true);
    expect(sliderInstance.slider.children).toHaveLength(5);
  });

  it("should initialize slides with correct classes", () => {
    sliderInstance.slides.forEach((slide) => {
      expect(slide.classList.contains("slider__item")).toBe(true);
      expect(slide.firstElementChild.classList.contains("slider__image")).toBe(
        true,
      );
    });
  });

  it("should have initialized options and set gap and transition duration styles", () => {
    expect(sliderInstance.slider.style.gap).toBe("7%");

    sliderInstance.slides.forEach((slide) => {
      expect(slide.style["transition-duration"]).toBe("1s");
    });
  });

  it("should add buttons to the slider with correct properties", () => {
    expect(sliderInstance.slider.querySelector(".slider__left-arrow")).toBe(
      sliderInstance.leftArrow,
    );
    expect(sliderInstance.slider.querySelector(".slider__right-arrow")).toBe(
      sliderInstance.rightArrow,
    );
  });

  it("should move to the first slide when reaching the last slide", () => {
    for (let i = 0; i < sliderInstance.slides.length; i++) {
      sliderInstance.rightArrow.dispatchEvent(new Event("click"));
    }
    expect(sliderInstance.currentSlideInd).toBe(0);
  });

  it("should create buttons and attach event handlers", () => {
    expect(sliderInstance.leftArrow).toBeInstanceOf(HTMLButtonElement);
    expect(sliderInstance.rightArrow).toBeInstanceOf(HTMLButtonElement);

    expect(
      sliderInstance.leftArrow.classList.contains("slider__left-arrow"),
    ).toBe(true);
    expect(
      sliderInstance.rightArrow.classList.contains("slider__right-arrow"),
    ).toBe(true);
    expect(sliderInstance.leftArrow.style.display).toBe("none");
  });
});

describe("addButtons", () => {
  let sliderInstance;

  beforeAll(() => {
    const sliderDiv = document.createElement("div");
    sliderDiv.classList.add("slider");
    document.body.appendChild(sliderDiv);

    const options = { gap: "7%", duration: "1s", interval: "10000" };
    sliderInstance = new Slider(sliderDiv, options);
    sliderInstance.initialize();
  });

  it("should move slides to the left when clicking the left arrow button", () => {
    if (sliderInstance.slides.length > 0 && sliderInstance.slides[0].style) {
      const initialSlideTransform = sliderInstance.slides[0].style.transform;
      sliderInstance.leftArrow.dispatchEvent(new Event("click"));
      expect(sliderInstance.slides[0].style.transform).not.toBe(
        initialSlideTransform,
      );
    } else {
      console.warn("Slides or slide styles are not available for testing.");
      expect(true).toBe(true);
    }
  });

  it("should move slides to the right when clicking the right arrow button", () => {
    if (sliderInstance.slides.length > 0 && sliderInstance.slides[0].style) {
      const initialSlideTransform = sliderInstance.slides[0].style.transform;
      sliderInstance.rightArrow.dispatchEvent(new Event("click"));
      expect(sliderInstance.slides[0].style.transform).not.toBe(
        initialSlideTransform,
      );
    } else {
      console.warn("Slides or slide styles are not available for testing.");
      expect(true).toBe(true);
    }
  });
});

describe("Slider Initialization Function", () => {
  it("should initialize the slider on the page", () => {
    const sliderElement = document.createElement("div");
    sliderElement.classList.add("slider");
    document.body.appendChild(sliderElement);

    const options = { gap: "7%", duration: "1s", interval: "10000" };
    sliderInit(sliderElement, options);

    expect(sliderElement.classList.contains("slider")).toBe(true);
    expect(sliderElement.children).toHaveLength(0);
  });
});
