const featuresContainerRows = document.querySelectorAll(
  ".editors-features-container-row"
);

const featuresLeftController = document.querySelector(
  ".editors-carousel-controller.left"
);

const featuresRightController = document.querySelector(
  ".editors-carousel-controller.right"
);

const indicators = document.querySelectorAll(
  ".editors-carousel-indicator-image"
);

let slidesCount = 0;

function MoveRight() {
  featuresRightController.addEventListener("click", () => {
    if (slidesCount == featuresContainerRows.length - 1) return;

    ++slidesCount;

    featuresRightController.style.scale = "0.8";

    featuresContainerRows.forEach((container) => {
      container.style.translate = -container.clientWidth * slidesCount + "px 0";
    });

    ControllerAnimation();
    IndicatorAnimation();
  });
}

function MoveLeft() {
  featuresLeftController.addEventListener("click", () => {
    if (slidesCount == 0) return;

    --slidesCount;

    featuresLeftController.style.scale = "0.8";

    featuresContainerRows.forEach((container) => {
      container.style.translate = -container.clientWidth * slidesCount + "px 0";
    });

    ControllerAnimation();
    IndicatorAnimation();
  });
}

function ControllerAnimation() {
  setTimeout(() => {
    featuresLeftController.style.scale = "1";
    featuresRightController.style.scale = "1";
  }, 125);
}

function IndicatorAnimation() {
  for (let i = 0; i < indicators.length; i++) {
    if (i === slidesCount) {
      indicators[i].style.scale = "1.2";
      indicators[i].style.opacity = "1";
    } else {
      indicators[i].style.opacity = "0.35";
      indicators[i].style.scale = "0.85";
    }
  }
}

export default function FeaturesCarousel() {
  MoveRight();
  MoveLeft();
}
