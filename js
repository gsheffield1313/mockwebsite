let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
   let subject = document.getElementById("subject");

  if (fname.value == "" || lname.value == "" ||subject.value=="") {
    alert("Ensure you input a value in both fields!");
  } else {
   
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a firstname of ${fname.value} and password of ${lname.value}`
    );

    fname.value = "";
    lname.value = "";
    subject.value = "";
  }
});
