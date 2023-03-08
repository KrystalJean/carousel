const prevOne = document.getElementById('prev-one');
const nextOne = document.getElementById('next-one');
const prevScroll = document.getElementById('prev-scroll');
const nextScroll = document.getElementById('next-scroll');
const viewbox = document.getElementById('viewbox');
const images = document.getElementsByClassName('image');
const imageWidth = viewbox.scrollWidth / images.length

prevOne.addEventListener('click', () => {
    viewbox.scrollLeft -= imageWidth;
});

nextOne.addEventListener('click', () => {
    viewbox.scrollLeft += imageWidth;
});

prevScroll.addEventListener('mouseover', ()=> {
    viewbox.scrollLeft = -viewbox.scrollWidth;
});

nextScroll.addEventListener('mouseover', ()=> {
    viewbox.scrollLeft = viewbox.scrollWidth;
});

