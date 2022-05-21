const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    // add a click listener for each box
    box.addEventListener('click', () => {
        console.log(box.id);
    });
});

//make box go back to normal when clicked
// boxes.forEach((box) => {
//     // add a click listener for each box
//     box.addEventListener('click', function() {
//         this.classList.toggle('half');
//     });
// });
boxes.forEach(box => box.addEventListener('transitionend',removeTransition));

boxes.forEach(box => box.addEventListener('click', decreaseSizeOnClick));

function decreaseSizeOnClick(e) {
    e.target.classList.add('small');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('small');
}

//if box is clicked
    //id is stored
    //computer selects a random choice
    //the choices get compared via a comparator