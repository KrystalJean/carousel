const prevOne = document.getElementById('prev-one');
const nextOne = document.getElementById('next-one');
const prevScroll = document.getElementById('prev-scroll');
const nextScroll = document.getElementById('next-scroll');
const viewbox = document.getElementById('viewbox');
const images = document.getElementsByClassName('image');
const imageWidth = viewbox.scrollWidth / images.length

let lastImage = images.length - 1;


console.log(viewbox.scrollLeft)






//NEXT AUTOSCROLL

let nextScrollInterval;


function setNextScrollInterval() {
    if (!nextScrollInterval) {
        nextScrollInterval = setInterval(autoscrollNext, 1);
    }
}

function autoscrollNext() {
    viewbox.scrollLeft += 1;
}

function clearNextScrollInterval() {
    clearInterval(nextScrollInterval);
    nextScrollInterval = null;
}


//PREVIOUS AUTOSCROLL

let prevScrollInterval;


function setPrevScrollInterval() {
    if (!prevScrollInterval) {
        prevScrollInterval = setInterval(autoscrollPrev, 1);
    }
}

function autoscrollPrev() {
    viewbox.scrollLeft -= 2;
}

function clearPrevScrollInterval() {
    clearInterval(prevScrollInterval);
    prevScrollInterval = null;
}



// prevOne.addEventListener('click', () => {
//     viewbox.scrollLeft -= imageWidth;
// });

nextOne.addEventListener('click', () => {
    viewbox.scrollLeft += imageWidth;
});

nextScroll.addEventListener('mouseover', setNextScrollInterval);
nextScroll.addEventListener('mouseout', clearNextScrollInterval);
prevScroll.addEventListener('mouseover', setPrevScrollInterval);
prevScroll.addEventListener('mouseout', clearPrevScrollInterval);





// prevScroll.addEventListener('mouseover', () => {
//     viewbox.scrollLeft = -viewbox.scrollWidth;
// });

// nextScroll.addEventListener('mouseover', ()=> {
//     viewbox.scrollLeft = viewbox.scrollWidth;
// });

// let scrollInterval;


// function setScrollInterval() {
//     if (!scrollInterval) {
//         scrollInterval = setInterval(autoscrollNext, 1)
//     }
// }

// function autoscrollNext() {
//     viewbox.scrollLeft += 1;
// }

// function clearScrollInterval() {
//     clearInterval(scrollInterval);
//     scrollInterval = null;
// }

// nextScroll.addEventListener('mouseover', setScrollInterval);
// nextScroll.addEventListener('mouseout', clearScrollInterval);