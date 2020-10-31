
let hourWork = document.querySelector('#hour-work'); // target input field for main hour work
let extraWork = document.querySelector("#extra-hour"); // target input fiield for extra hour work
let calBtn = document.querySelector("#cal-btn"); // target submit button
let payslip = document.querySelector("#payslip"); // target div for printing of pay slip
let ts = document.querySelector("#ts"); // target li to display total salary
let tp = document.querySelector("#tp"); // target li to display total main pay
let ep = document.querySelector("#ep"); // target li to display extra pay


// function to calculate salary
// This function calculate total salary in hours plus extra over time pay
// hourly pay is #1000 while extra pay is #200
// Since the pay per hour is #1000 the extra hour work will be entitle to #1000 as well before calculating #200 on the extra hour.
// the function take two argument one for main hour the other for extra hour.
function salaryCalculator(hourlywork, extrahour) {
    if(typeof hourlywork === 'string' || typeof extrahour === 'string'){
        return 'Provide a number';
    }
    let hourWage = 1000; // pay per hour
    let extraWage = 200; // overtime pay
    let totalHour = hourlywork + extrahour; // total hour work both main and overtime 
    let totalPay = hourWage * totalHour; // total pay excluding overtime
    let extraPay = extrahour * extraWage; // overtime pay
    let totalSalary = totalPay + extraPay; // salary
    return totalSalary;

}


// function to show pay slip
// eventlistner to calculate.
calBtn.addEventListener('click', function (e) {
    e.preventDefault();


    // display info
    let hw = Number(hourWork.value);
    let ew = Number(extraWork.value);
    let total = salaryCalculator(hw, ew);
    let totalPays = (hw + ew) * 1000
    let extraPays = ew *200
    console.log(total);
    tp.innerHTML = `Total Hour Pay: <span>&#8358;</span>${totalPays}`;
    ep.innerHTML = `Extra Pay: <span>&#8358;</span>${extraPays}`;
    ts.innerHTML = `Total Salary: <span>&#8358;</span>${total}`;
    hourWork.value = "";
    extraWork.value = "";
});


