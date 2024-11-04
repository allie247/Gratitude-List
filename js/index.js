
function addGratitude() {
    const inputValue = document.getElementById('typeOfGratitude').value;
    const newItem = document.createElement('li');
    newItem.textContent = inputValue;
    document.getElementById('listOfItems').appendChild(newItem);
   
};