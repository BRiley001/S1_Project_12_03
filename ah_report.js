"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Brenden Riley
   Date:   2.28.19
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/

// The donations total sum starts at 0
var donationTotal = 0;

// For each donor the calcSum function will find the sum of the donations
donors.forEach(calcSum);

// The summaryTable contains a text sting that will be used to create the table at the top, with total donors and donation totals
var summaryTable = "<table><tr><th>Donors</th><td>" + donors.length + "</td></tr><tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr></table>";

// The page will have the text string from above inserted into the divs.
document.getElementById("donationSummary").innerHTML = summaryTable;

// The majorDonors variable will filter the array and find all the major donors
var majorDonors = donors.filter(findMajorDonors);

// The array will be sorted in descending order
majorDonors.sort(donorSortDescending);

// The main table with donor information is contained in the text string below. 
var donorTable = "<table><caption>Major Donors</caption><tr><th>Donation</th><th>Donor ID</th> <th>Date</th><th>Name</th><th>Address</th><th>Phone</th><th>E-mail</th></tr>";

//For each of the major donors it will write a row into the table
majorDonors.forEach(writeDonorRow);

// The donorTable is ended here
donorTable += "</table>";

// The text string, which contains all the donors information, is added into the page
document.getElementById("donorTable").innerHTML = donorTable;
//BELOW WAS PREMADE
function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}