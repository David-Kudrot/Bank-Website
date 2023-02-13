// login part
let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener("click", function (event) { 
    //console.log("Hey Bro You Clicked me!!!");
    let login = document.getElementById('login_part');
    login.style.display = 'none';
    let main = document.getElementById('main-part');
    main.style.display = 'block';
 });


 // balance deposit and withdraw part
// deposit part
 let balanceAddBtn = document.getElementById('addBtn');
 balanceAddBtn.addEventListener("click", function (event) { 
    // get deposit amount from input
    let deposit_amount = document.getElementById("deposit_amount").value;
    let get_deposit_amount = parseFloat(deposit_amount);

    // If you click button without input amount then this will solve
    if(document.getElementById("deposit_amount").value === "") {
        get_deposit_amount = 0;
    };
    
    // get and show deposit amount
    let deposit = document.getElementById('depositBal').innerText;
    let depositBal = parseFloat(deposit);

    // get total amount 
    let total = document.getElementById('totalAmount').innerText;
    let totalAmount = parseFloat(total);

    let current_deposit_bal = get_deposit_amount + depositBal;
    let current_Total_bal = get_deposit_amount + totalAmount;

    //showing deposit
    document.getElementById('depositBal').innerText = current_deposit_bal;
    //showing total amount
    document.getElementById('totalAmount').innerText = current_Total_bal;

    // after input amount input element will be blank as before
    document.getElementById("deposit_amount").value = "";
    


  });

  //withdraw part

let withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function (event) { 
    //console.log("Hey buddy you wanna withdraw your balance??????");
    let withdrawAmount = document.getElementById('withdrawAmount').value;
    let withdrawBalance = parseFloat(withdrawAmount);
    
    // If you click button without input amount then this will solve
    if(document.getElementById("withdrawAmount").value === "") {
      withdrawBalance = 0;
    };




    // get and show deposit amount
    let withdrawBal = document.getElementById('withdrawBal').innerText;
    let withdrawAmountShow = parseFloat(withdrawBal);
    
    // get total amount 
    let total = document.getElementById('totalAmount').innerText;
    let totalAmount = parseFloat(total);

    let currentWithdrawBal = withdrawBalance + withdrawAmountShow;
    let currentTotalBal = totalAmount - withdrawBalance;

    //showing deposit
    document.getElementById('withdrawBal').innerText = currentWithdrawBal;
    // //showing total amount
    document.getElementById('totalAmount').innerText = currentTotalBal;
    // clear input field
    document.getElementById('withdrawAmount').value = "";

    
 });