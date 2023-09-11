
// get input values  
const getInputValue = (inputId) =>{
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldValueNumber;
} 


// get text element value 

const getTextElementValue = elementID => {
    const textElement = document.getElementById(elementID);
    const textElementNumber = textElement.innerText;
    const textElementValue = parseFloat(textElementNumber);
    return textElementValue;

}


// set text element value

const setTextElementValue = (elementID, updatedValue) =>{
    const setElement = document.getElementById(elementID);
    setElement.innerText = updatedValue;
   
}



const stroderInLocalStorage = (elementID, updatedValue) => {
    const storedData = localStorage.setItem(elementID, updatedValue);
    return storedData;
}