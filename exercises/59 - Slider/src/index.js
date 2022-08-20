function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('Slider must be defined');
  }
  
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSLider = Slider(document.querySelector('.dog-slider'));
