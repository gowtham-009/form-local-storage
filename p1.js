function page1(){
  let val1=document.getElementById("fname").value;
  let val2=document.getElementById("lname").value;
  let val3=document.getElementById("email").value;
  let val4=document.getElementById("pnum").value;
  let val5=document.getElementById("addr").value;
  localStorage.setItem("fname", val1)
  localStorage.setItem("lname", val2)
  localStorage.setItem("email", val3)
  localStorage.setItem("pnum", val4)
  localStorage.setItem("addr", val5)
}