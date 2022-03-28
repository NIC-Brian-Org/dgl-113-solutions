'use strict';

let payroll = [];

function setPayroll(...thePayroll) {
    payroll = [...thePayroll];
}

class Payroll {
    constructor(iName, iHrs, iPayrate = 20) {
      this.name = iName;
      this.hours = iHrs;
      this.payRate = iPayrate;
    }
    pay() {
      return this.hours * this.payRate;
    }
  }

setPayroll( 
    new Payroll( 'Alice', 15, 15 ),
    new Payroll( 'Bob', 37.5, 45 ),
    new Payroll( 'Carol', 40, 20 )
 );

let showButton = document.getElementById('show');
showButton.addEventListener('click', showPayroll );

function showPayroll(e) {
    // add the required code to show the payroll data
    // in the table
    console.log('in showPayroll');

    let parent = document.querySelector("#payroll");

    for(let i = 0; i < payroll.length; i++){
      const tr = document.createElement('tr');
      const tdname = document.createElement('td');
      const tdhours = document.createElement('td');
      const tdpayRate = document.createElement('td');
      const tdtotalPay = document.createElement('td');

      const name = document.createTextNode(payroll[i].name);
      const hours = document.createTextNode(payroll[i].hours);
      const payRate = document.createTextNode(payroll[i].payRate);
      const payTotal = document.createTextNode(payroll[i].pay());

      

      tdname.appendChild(name);
      tdhours.appendChild(hours);
      tdpayRate.appendChild(payRate);
      tdtotalPay.appendChild(payTotal);

      tr.appendChild(tdname);
      tr.appendChild(tdhours);
      tr.appendChild(tdpayRate);
      tr.appendChild(tdtotalPay);

      parent.appendChild(tr);
    }
}