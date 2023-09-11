// step 1: targeting button and input filed 
const depositField = document.getElementById('deposit-field');
const depositTotal = document.getElementById('deposit-total');
const blanceTotal = document.getElementById('balance-total');
const withdrawTotal = document.getElementById('withdraw-total');
const withdrawField = document.getElementById('withdraw-field');


// deposit 
document.getElementById('btn-deposit').addEventListener('click', () => {
  // getting value depost input field
  const depositFieldValue = parseFloat(depositField.value);
  console.log('inputed-depost', depositFieldValue);

    // showing innertext deposit input field
  const newdeposit = depositFieldValue;
  const previousDeposi = parseFloat(depositTotal.innerText);
//   sum of deposit input and showing deposit blace 
  const depositsum = newdeposit + previousDeposi;
  depositTotal.innerText = depositsum;
  depositField.value = '';
//   get blance 
 const previousBlace = blanceTotal.innerText;
blanceTotal.innerText = parseFloat(previousBlace) + depositsum;

  
})




// withdraw blance

document.getElementById('btn-withdraw').addEventListener('click', ()=>{
    // get withdraw amount 
    const withdrawAmount = parseFloat(withdrawField.value);
    const previousWidthdraw =  withdrawTotal.innerText;
    withdrawField.value = ''

    withdrawTotal.innerText = parseFloat(previousWidthdraw) + withdrawAmount;
    // console.log('withdraw amount', parseFloat(withdrawTotal.innerText));


    const blancebeforeWithdraw = blanceTotal.innerText;
    blanceTotal.innerText = parseFloat(blancebeforeWithdraw) - parseFloat(withdrawTotal.innerText);
   
})