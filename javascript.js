const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    // add a click listener for each box
    box.addEventListener('click', () => {
        console.log(box.id);
    });
});
//if box is clicked
    //id is stored
    //computer selects a random choice
    //the choices get compared via a comparator

