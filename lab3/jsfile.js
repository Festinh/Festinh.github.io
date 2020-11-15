"use strict";

document.addEventListener('DOMContentLoaded', () => {
    if (performance.navigation.type == 1) { //on reload
    if (checkCookie('divisors')){
        if (prompt(`These Cookies have been created on this page: \n${document.cookie} \n Do you want to save them?`)) {
            document.querySelector('#numForm').remove();
            alert('Cookies were saved. Page will be reloaded')
        }
        else {
            setCookie('divisors','',3);
            alert('Cookies were successfully deleted.');
        }
      }
    }
    swapText('links_class', 'left_bottom');  // complete task 1
    const a = 3;
    const b = 2;
    const height = 2;
    findAreaOfTrapezoid(a, b, height, 'middle_text'); // complete task 2
    
    document.querySelector('#numBtn').addEventListener('click', () => {  // complete task 3
        find_divisors(document.getElementById('numInput').value);
        alert(document.cookie);
    });
    
    
})

const swapText = (id1, id2) => {
  let block1 = document.getElementById(id1);
  let block2 = document.getElementById(id2);
  let content1 = block1.innerHTML;
  block1.innerHTML = block2.innerHTML;
  block2.innerHTML = content1;
 }

const findAreaOfTrapezoid = (sideA, sideB, heightTr, outputId) => {
  let area = (sideA + sideB)/2 * heightTr;
  document.getElementById(outputId).insertAdjacentHTML("beforeend", 
  `<p>Area of Trapezoid equals:<br>${area}</p>`
  );
 }

const find_divisors = (chislo) => {
    let massive = [];
    for (let i = 1; i <= chislo; i++) {
        if (chislo % i == 0) {
            massive.push(i);
        }
    }
        setCookie("divisors", massive, 3);

}

const setCookie = (name, data, expDays) => {
  const d = new Date();
  let str = "";
  d.setDate(d.getDate() + expDays);
  for (let i = 0; i < data.length; i++) {   
      str = str + data[i] + ", ";
  }
  document.cookie = `${name}=${str};expires=${d.toUTCString()};path=/`;
 }

 const checkCookie = (name) => {
  return (document.cookie.includes(name) && document.cookie!=`${name}=`);
 }

 const getCookie = (name) => {
   return checkCookie(name) ? document.cookie.split(';').find((c) => c.includes(name)).split('=')[1] : 0;
 }