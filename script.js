// generate default grid square density (16x16)
// grid shoud be composed of square divs, preferably without borders
// only the container of these divs has a border
// use Flexbox to achieve this
const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
const fragment = document.createDocumentFragment();

let i = 1;
let fill = 64;
let x =  fill * fill;
// create pixel x times for row (X)
for (; i <= x; i++) {
  //container.append(pixel);
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  fragment.appendChild(pixel);
}

container.appendChild(fragment);


// create pixel x times for column (Y)

// modify grid square density via prompt or a slide bar to a maximum of 100x100
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
// squares should change its color fill upon mouse hover and keep that fill after the pointer is away
// this color fill should change upon repeating mouse hovers
// eg. let's say they get 10% darker every pass (check CSS opacity property)
