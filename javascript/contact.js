let popup = document.getElementById("popup");
    let field = document.getElementById("field");
    const form = document.getElementById("form");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");
   
    form.addEventListener("submit", () => {
      popup.classList.add("open-popup");
      right.classList.add("remove-field");
      left.classList.add("remove-field")
      var x = document.getElementById("email").value;
      document.getElementById("demo").innerHTML = x;
    })