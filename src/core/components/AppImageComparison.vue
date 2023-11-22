<script setup>
defineProps({
  beforeImage: {
    type: Object,
    required: true
  },
  afterImage: {
    type: Object,
    required: true
  }
})

const sliderContainer = ref(null)
const updateSliderView = ($event) => {
  if (sliderContainer.value) {
    sliderContainer.value.style.setProperty('--position', `${$event?.target?.value}%`);
  }
}
</script>

<template>
  <main>
    <div ref="sliderContainer" class="slider-container">
      <div class="image-container">
        <img
            class="image-before slider-image"
            :src="beforeImage.path"
            :alt="beforeImage.alt"
        />
        <img
            class="image-after slider-image"
            :src="afterImage.path"
            :alt="afterImage.alt"
        />
      </div>
      <!-- step="10" -->
      <input
          type="range"
          min="0"
          max="100"
          value="50"
          aria-label="Percentage of before photo shown"
          class="slider"
          @input="updateSliderView"
      />
      <div class="slider-line" aria-hidden="true"></div>
      <div class="slider-button" aria-hidden="true">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
              x1="128"
              y1="40"
              x2="128"
              y2="216"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
          ></line>
          <line
              x1="96"
              y1="128"
              x2="16"
              y2="128"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
          ></line>
          <polyline
              points="48 160 16 128 48 96"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
          ></polyline>
          <line
              x1="160"
              y1="128"
              x2="240"
              y2="128"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
          ></line>
          <polyline
              points="208 96 240 128 208 160"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
          ></polyline>
        </svg>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  place-items: center;
}

.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  --position: 50%;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
}

.image-before {
  position: absolute;
  inset: 0;
  width: var(--position);
}

.slider {
  position: absolute;
  inset: 0;
  cursor: pointer;
  opacity: 0;
  /* for Firefox */
  width: 100%;
  height: 100%;
}

.slider:focus-visible ~ .slider-button {
  outline: 5px solid black;
  outline-offset: 3px;
}

.slider-line {
  position: absolute;
  inset: 0;
  width: .2rem;
  height: 100%;
  background-color: #fff;
  /* z-index: 10; */
  left: var(--position);
  transform: translateX(-50%);
  pointer-events: none;
}

.slider-button {
  position: absolute;
  background-color: #fff;
  color: black;
  padding: .5rem;
  border-radius: 100vw;
  display: grid;
  place-items: center;
  top: 50%;
  left: var(--position);
  transform: translate(-50%, -50%);
  pointer-events: none;
  /* z-index: 100; */
  box-shadow: 1px 1px 1px hsl(0, 50%, 2%, .5);
}
</style>
