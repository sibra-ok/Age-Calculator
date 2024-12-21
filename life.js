


ok=document.getElementById('button')
ok.addEventListener('click',function(){

    let UserInput=document.getElementById('UserDate')
let UserDate=new Date(UserInput.value);
let currentDate=new Date();
let NewDate=currentDate.getFullYear()-UserDate.getFullYear();
let NewDateInMonths=currentDate.getMonth()-UserDate.getMonth()
let NewDateInDays=currentDate.getDay()-UserDate.getDay()
let NewDateInHours=currentDate.getHours()-UserDate.getHours()
let NewDateInMin=currentDate.getMinutes()-UserDate.getMinutes()
let NewDateInSec=currentDate.getSeconds()-UserDate.getSeconds()

if(NewDateInMonths<0){
    NewDate--;
    NewDateInMonths+=12;
}
if(NewDateInDays<0){
    NewDateInMonths--;
NewDateInDays++;}

inner=document.getElementById('inner')
hi=document.getElementById('hi')
hii=document.getElementById('hii')
hiiI=document.getElementById('hiiI')
hiiIi=document.getElementById('hiiIi')

bi=document.getElementById('bi')

inner.innerText ="YEARS:" +NewDate;
hi.innerText='MONTHS:' +NewDateInMonths;
hii.innerText= 'DAYS:'+NewDateInDays;

hiiI.innerText= 'HOURS:'+NewDateInHours;
hiiIi.innerText='MIN:'+ NewDateInMin;
bi.innerText='SEC:'+NewDateInSec;
console.log(NewDate,NewDateInMonths,NewDateInDays);


});

