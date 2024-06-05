import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root{
--bg_about: radial-gradient(
circle at 94.35384114583333% 89.61588541666666%,
#105c86 0%,
20%,
rgba(16, 92, 134, 0) 40%
),
radial-gradient(
circle at 6.503906249999999% 88.037109375%,
rgba(0, 175, 211, 0.99) 0%,
20.950000000000003%,
rgba(0, 175, 211, 0) 50%
),
radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #105c86 0%, 84.6%, rgba(16, 92, 134, 0) 100%),
radial-gradient(circle at 93.6865234375% 11.42578125%, #2db6d4 0%, 42%, rgba(45, 182, 212, 0) 70%),
radial-gradient(circle at 48.9013671875% 49.521484375%, #dbdbdb 0%, 100%, rgba(219, 219, 219, 0) 100%);

--bg_contact:  radial-gradient(
circle at 94.35384114583333% 89.61588541666666%,
#105c86 0%,
20%,
rgba(16, 92, 134, 0) 40%
),
radial-gradient(
circle at 6.503906249999999% 88.037109375%,
rgba(0, 160, 211, 0.99) 0%,
20.950000000000003%,
rgba(0, 175, 211, 0) 50%
),
radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #105c86 0%, 84.6%, rgba(16, 92, 134, 0) 100%),
radial-gradient(circle at 93.6865234375% 11.42578125%, #2db6d4 0%, 42%, rgba(45, 182, 212, 0) 70%),
radial-gradient(circle at 48.9013671875% 49.521484375%, #dbdbdb 0%, 100%, rgba(219, 219, 219, 0) 100%);

--bg_solutions: radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #105C86 0%, 20%, rgba(16,92,134,0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(0,175,211,0.99) 0%, 20.950000000000003%, rgba(0,175,211,0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #105C86 0%, 84.6%, rgba(16,92,134,0) 100%), radial-gradient(circle at 93.6865234375% 11.42578125%, #2DB6D4 0%, 42%, rgba(45,182,212,0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #DBDBDB 0%, 100%, rgba(219,219,219,0) 100%)
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

a[title]:hover:after {
    content: attr(title);
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 5px;
    position: absolute;
    z-index: 9999;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
}

a[title] {
    position: relative;
}

a[title]:hover {
    text-decoration: none;
}

body {
font-size: var(--fontSize-body-4);
line-height: var(--lineHeight-5);
font-family: "Open Sans" , "poppins-semibold", "poppins", sans-serif;
}

::-webkit-scrollbar {
width: 8px !important;
}

::-webkit-scrollbar-thumb {
border-radius: 3px;
background: rgba(63, 67, 80, 0.24);
}

::-webkit-scrollbar-thumb:hover {
background: rgba(63, 67, 80, 0.32);
}

@media screen and (min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx) {
body {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
}
`;

export default Global;
