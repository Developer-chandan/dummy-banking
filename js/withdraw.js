
// withdraw 
document.getElementById('btn-withdraw').addEventListener('click', () => {

    const newWithdraw = getInputValue('withdraw-field');
    const previousWithdrawField = getTextElementValue('withdraw-total');
    const totalWithdraw = newWithdraw + previousWithdrawField;
    setTextElementValue('withdraw-total', totalWithdraw);
    stroderInLocalStorage('withdraw-total', totalWithdraw);
// update blacne 
const previousBlance = getTextElementValue('balance-total');
const newBlance = previousBlance - newWithdraw;
setTextElementValue('balance-total', newBlance);
stroderInLocalStorage('balance-total', newBlance);

    })
  
  
  
  
  
  