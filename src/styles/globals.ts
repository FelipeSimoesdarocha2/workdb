import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root {
/* COLORS */
--black-primary: rgba(0, 0, 0, 0.8);

  /* GRADIENT COLOR */

/* TYPOGRAPHY */

/* text */

/* line-height */

/* letter-spacing */

/* SPACING */

/* SHADOW */

/* BORDER RADIUS */

/* TRANSITION */
--transition-1: 250ms ease;
--transition-2: 500ms ease;
--transition-3: 1000ms ease;
}

/* #RESET */
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
font-synthesis: none;
text-rendering:optimizeLegibility;
}

li { list-style: none; }

img::selection{
background: none;
}

label::selection{
background: none;
}

a,
img,
data,
span,
input,
button,
select,
textarea { display: block; }

a {
color: inherit;
text-decoration: none;
}

img { height: auto; }

input,
button,
select,
textarea {
background: none;
border: none;
font: inherit;
}

input,
select,
textarea {
outline: none;
}

button {
cursor: pointer;
}

html {
font-size: 10px;
scroll-behavior: smooth;
scroll-snap-type: y mandatory;
}

body,
h1,
h2,
h3,
p,
a,
blockquote {
text-decoration: none;
}

body {
font-size: var(--fontSize-body-4);
line-height: var(--lineHeight-5);
font-family: "Quicksand", sans-serif;
}

@media screen and (min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@media (min-width: 1100px) {
:root {
}
}

@media (min-width: 991px) {
:root {
  --section-space: 100px;
}
}

@media (min-width: 560px) {
:root {
}
}
`;

export default Global;
