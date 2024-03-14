const nomeField = document.querySelector("#nome");
const emailField = document.querySelector("#email");
const senhaField = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");
const cadastrarBtn = document.querySelector("#cadastrarBtn");
const loginBtn = document.querySelector("#loginBtn");
const passwordConfirm = document.querySelector("#passwordConfirm");
const infoParaph = document.querySelector(".info");
const ibanField = document.querySelector("#ibanField");
const logoutBtn = document.querySelector("#btnSair");
const logoutBtnNO = document.querySelector("#btnSairNO");
const logoutBtnYES = document.querySelector("#btnSairYES");
const chocolateMenu = document.querySelector(".chocolateContainer");
const validaCountBtn = document.querySelector("#validaCountBtn");
const chaveField = document.querySelector("#chaveField");
const validationForm = document.querySelector("#validationForm");

if(validationForm!=null){
  validationForm.addEventListener("submit",async (el)=>{
    el.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/utilizador/confirmacaoconta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: localStorage.getItem("currentSessionEmail"),
          code: chaveField.value
        }
        ) 
      });
      const data= await response.json();
      console.log("From validation",data);
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }
     
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}

if (loginForm != null) {

  loginForm.addEventListener("submit", async (element) => {
    element.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/utilizador/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nomeField.value,
          email: emailField.value,
          senha: senhaField.value
        }
        )
      });
      const data = await response.json();
      if (data.sucesso) {
        infoParaph.textContent = data.message;
        loginForm.reset();
      }
      if (data.error) {
        infoParaph.classList.add('infoError');
        infoParaph.textContent = data.message;
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}

if (loginBtn !== null) {
  loginBtn.addEventListener("click", async () => {
    try {
      const response = await fetch('http://localhost:3000/api/utilizador/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailField.value,
          senha: senhaField.value
        }
        )
      });
      const data = await response.json();
      if (data.redirectUrl) {
        localStorage.setItem("currentSessionEmail", emailField.value);
        window.location.href = data.redirectUrl;
      }
       if (data.error) {
        infoParaph.classList.add('infoError');
         infoParaph.textContent = data.message;
       }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}
// if (validaCountBtn !== null) {
//   validaCountBtn.addEventListener("click", async () => {
   
//   });
// }

if (passwordConfirm !== null) {
  passwordConfirm.addEventListener("input", (el) => {
    if (el.target.value !== "" && el.target.value === senhaField.value) {
      cadastrarBtn.style.display = 'block';
    } else {
      cadastrarBtn.style.display = 'none';
    }
  });
}

if (chocolateMenu !== null) {
  chocolateMenu.addEventListener("click", () => {
    document.querySelector(".sideBarControler").classList.toggle('show');
  });
}

// Function to add separators every four digits
function addSeparators(input) {
  var value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
  var formattedValue = '';
  for (var i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += '.'; // Add a space after every four digits
    }
    formattedValue += value[i];
  }
  input.value = formattedValue;
}

if (ibanField !== null) {

  ibanField.addEventListener('input', function () {
    addSeparators(this);
  });
}

if (logoutBtn !== null) {
  logoutBtn.addEventListener('click', (el) => {
    document.querySelector(".logoutModal").classList.remove('hide');
  });
}

if (logoutBtnNO !== null) {
  logoutBtnNO.addEventListener('click', (el) => {
    document.querySelector(".logoutModal").classList.add('hide');
  });
}

if (logoutBtnYES !== null) {
  logoutBtnYES.addEventListener('click', (el) => {
    localStorage.removeItem("currentSessionEmail");
    window.location.href = '/dashboard/logout';
  });
}