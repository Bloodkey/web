 function checkForm() {
            var a = document.forms["Regform"]["name"].value;
            var b = document.forms["Regform"]["surn"].value;
            if (!isNaN(a)) {
                alert("Ім`я може містити тільки букви");
                document.forms["Regform"]["name"].select();
                return false;
            }

            if (!isNaN(b)) {
                alert("Прізвище може містити тільки букви");
                document.forms["Regform"]["surn"].select();
                return false;
            }
        }

  function myFunction() {
    document.getElementById("pic").Hovered();
  alert("Hovered");
}

function myFunction2() {
  document.getElementById("accept").click(); 
  alert("Clicked");
}