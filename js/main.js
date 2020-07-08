/* Initial values */
let sketch = document.getElementById('sketch');
let etched = document.getElementsByClassName('etch');
let boxes = 16;
let reset = document.getElementById('reset');
let color = document.getElementById('color');
let black = document.getElementById('black');
let randomHue;
let vibrant = 'vibrant';
let mono = 'mono';
let coloring = mono;

/* events */

window.addEventListener('load', () => {
  grid(boxes);
});

window.addEventListener('load', () => {
  changeColor();
});

reset.addEventListener('click', () => {
  boxes = prompt('Please enter a grid size:');
  clearGrid();
  grid(boxes);
  changeColor();
});

color.addEventListener('click', () => {
  coloring = vibrant;
  console.log(coloring);
  changeColor();
});

black.addEventListener('click', () => {
  coloring = mono;
  console.log(coloring);
  changeColor();
});

/* create grid */
function grid(boxes) {
  let gridCount = boxes * boxes;
  for(i = 0; i < gridCount; i++) {
    let etch = document.createElement('div');
    etch.setAttribute('class', 'etch');
    sketch.appendChild(etch);
  }
  for(var i = 0; i < etched.length; i++) {
    etched[i].style.cssText = 'background: #7B828A';
  }
  sketch.style.cssText = `grid-template-columns: repeat(${boxes}, 1fr); grid-template-rows: repeat(${boxes}, 1fr)`;
}

/* change colour */

function changeColor() {
  if (coloring === vibrant) {
    for(let i = 0; i < etched.length; i++) {
      etched[i].addEventListener("mouseover", function() {
        randomHue = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.style.cssText = `background: ${randomHue}`;
      })
    }
  } else {
    for(let i = 0; i < etched.length; i++) {
      etched[i].addEventListener("mouseover", function() {
        randomHue = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.style.cssText = `background: #000`;
      })
    }
  }
}

/* clear the grid */

function clearGrid() {
  for(var i = etched.length; i >= 0; i--) {
    sketch.removeChild(sketch.firstChild);
    return true;
  }
}