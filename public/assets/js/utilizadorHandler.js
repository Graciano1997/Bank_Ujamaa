const nomeField = document.querySelector("#nome");
const emailField = document.querySelector("#email");
const senhaField = document.querySelector("#password");
const codigoSecretoField = document.querySelector("#codigoSecretoField");
const loginForm = document.querySelector("#loginForm");
const recoverForm = document.querySelector("#recoverForm");
const cadastrarBtn = document.querySelector("#cadastrarBtn");
const loginBtn = document.querySelector("#loginBtn");
const quantidadeDinheiro = document.querySelector("#quantidadeDinheiro");
const passwordConfirm = document.querySelector("#passwordConfirm");
const infoParaph = document.querySelector(".info");
const ibanField = document.querySelector("#ibanField");
const logoutBtn = document.querySelector("#btnSair");
const logoutBtnNO = document.querySelector("#btnSairNO");
const logoutBtnYES = document.querySelector("#btnSairYES");
const chocolateMenu = document.querySelector(".chocolateContainer");
const mainArea = document.querySelector(".mainArea");
const validaCountBtn = document.querySelector("#validaCountBtn");
const validaCodeBtn = document.querySelector("#validaCodeBtn");
const salvarNovasCredenciasBtn = document.querySelector("#salvarNovasCredenciasBtn");
const recuperarBtn = document.querySelector("#recuperarBtn");
const chaveField = document.querySelector("#chaveField");
const validationForm = document.querySelector("#validationForm");
const validationCodeForm = document.querySelector("#validationCodeForm");
const codeInput = document.querySelector("#codeInput");
const levantamentoFormContainer = document.querySelector("#levantamentoFormContainer");

if (validationForm != null) {
  validationForm.addEventListener("submit", async (el) => {
    el.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/utilizador/confirmacaoconta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: localStorage.getItem("currentSessionEmail"),
          code: chaveField.value,
        }
        )
      });
      const data = await response.json();
      console.log("From validation", data);
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      }

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}
if (levantamentoFormContainer != null) {
  levantamentoFormContainer.addEventListener("submit", async (el) => {
    el.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/dashboard/levantamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: codigoSecretoField.value,
          quantidade:quantidadeDinheiro.value
        }
        )
      });
      const data = await response.json();
      console.log("levantamento", data);
      if (data.redirectUrl) {
        // window.location.href = data.redirectUrl;
      }

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}


if (validationCodeForm != null) {
  validationCodeForm.addEventListener("submit", async (el) => {
    el.preventDefault();
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
if (recoverForm != null) {
  recoverForm.addEventListener("submit", async (element) => {
    element.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/utilizador/${localStorage.getItem("_")}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          senha: senhaField.value
        }
        )
      });
      const data = await response.json();
      if (data.sucesso) {
        infoParaph.textContent = data.message;
        recoverForm.reset();
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

// if (salvarNovasCredenciasBtn != null) {
//   salvarNovasCredenciasBtn.addEventListener("submit", async (element) => {
//     element.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:3000/api/utilizador/${localStorage.getItem("_")}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           senha: senhaField.value
//         }
//         )
//       });
//       const data = await response.json();
//       if (data.sucesso) {
//         infoParaph.textContent = data.message;
//         // loginForm.reset();
//       }
//       if (data.error) {
//         infoParaph.classList.add('infoError');
//         infoParaph.textContent = data.message;
//       }
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   });
// }

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
if (recuperarBtn !== null) {
  recuperarBtn.addEventListener("click", async () => {
    try {
      const response = await fetch('http://localhost:3000/api/utilizador/recover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: emailField.value,
        }
        )
      });
      const data = await response.json();
      infoParaph.textContent = data.message;
      if (data.error) {
        infoParaph.classList.add('infoError');
      } else {
        infoParaph.classList.remove('infoError');
      }
      if (data.redirectUrl) {
        localStorage.setItem("currentSessionEmail", emailField.value);
        window.location.href = data.redirectUrl;
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  });
}
if (validaCodeBtn !== null) {
  validaCodeBtn.addEventListener("click", async () => {
    try {
      const response = await fetch('http://localhost:3000/api/utilizador/recovervalidation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email:localStorage.getItem("currentSessionEmail"),
          code:codeInput.value!==null?codeInput.value:''
        })
      });

      const data = await response.json();
      infoParaph.textContent = data.message;
      if (data.error) {
        infoParaph.classList.add('infoError');
      } else {
        infoParaph.classList.remove('infoError');
      }
      if (data.redirectUrl) {
        localStorage.removeItem("currentSessionEmail");
        localStorage.setItem("_",data.userId);
        window.location.href = data.redirectUrl;
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
      if(cadastrarBtn!==null){
        cadastrarBtn.style.display = 'block';
      }else{
        salvarNovasCredenciasBtn.style.display = 'block';
      }
    } else {
      if(cadastrarBtn!==null){
        cadastrarBtn.style.display = 'none';
      }else{
        salvarNovasCredenciasBtn.style.display = 'none';
      }    }
  });
}

if (chocolateMenu !== null) {
  chocolateMenu.addEventListener("click", () => {
    document.querySelector(".sideBarControler").classList.toggle('show');
  });
}

if (mainArea !== null) {
  mainArea.addEventListener("click", () => {
    document.querySelector(".sideBarControler").classList.remove('show');
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
