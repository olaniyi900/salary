
let hourWork = document.querySelector('#hour-work');
let extraWork = document.querySelector("#extra-hour");
let calBtn = document.querySelector("#cal-btn");
let payslip = document.querySelector("#payslip");
let ts = document.querySelector("#ts");
let tp = document.querySelector("#tp");
let ep = document.querySelector("#ep");


// function to calculate salary
function salaryCalculator(hourlywork, extrahour) {
    if(typeof hourlywork === 'string' || typeof extrahour === 'string'){
        return 'Provide a number';
    }
    let hourWage = 1000;
    let extraWage = 200;
    let totalHour = hourlywork + extrahour;
    let totalPay = hourWage * totalHour;
    let extraPay = extrahour * extraWage;
    let totalSalary = totalPay + extraPay;
    return totalSalary;

}


// function to show pay slip
calBtn.addEventListener('click', function (e) {
    e.preventDefault();

  // function to calculate salary
    

    // display info
    let hw = Number(hourWork.value);
    let ew = Number(extraWork.value);
    let total = salaryCalculator(hw, ew);
    let totalPays = (hw + ew) * 1000
    let extraPays = ew *200
    console.log(total);
    tp.innerText = `Total Hour Pay: ${totalPays}`;
    ep.innerText = `Extra Pay: ${extraPays}`;
    ts.innerText = `Total Salary: ${total}`;
    hourWork.value = "";
    extraWork.value = "";
});


