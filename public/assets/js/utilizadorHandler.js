const nomeField = document.querySelector("#nome");
const emailField = document.querySelector("#email");
const senhaField = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");
const cadastrarBtn = document.querySelector("#cadastrarBtn");
const passwordConfirm = document.querySelector("#passwordConfirm");
const infoParaph = document.querySelector("#info");

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
            infoParaph.textContent=data.message;
            loginForm.reset();
        }
        if (data.error) {
            infoParaph.textContent=data.message;
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});

cadastrarBtn.addEventListener("click", async () => {

});

passwordConfirm.addEventListener("input", (el) => {
    if (el.target.value !== "" && el.target.value === senhaField.value) {
        cadastrarBtn.style.display = 'block';
    } else {
        cadastrarBtn.style.display = 'none';
    }
})