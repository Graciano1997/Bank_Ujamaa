const nomeField = document.querySelector("#nome");
const emailField = document.querySelector("#email");
const senhaField = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");
const cadastrarBtn = document.querySelector("#cadastrarBtn");
const passwordConfirm = document.querySelector("#passwordConfirm");

loginForm.addEventListener("submit", (element) => {
    element.preventDefault();
});

cadastrarBtn.addEventListener("click", async () => {
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
        console.log(data); // Log the response data to the console
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
});

passwordConfirm.addEventListener("input", (el) => {
    if (el.target.value !== "" && el.target.value === senhaField.value) {
        cadastrarBtn.style.display = 'block';
    } else {
        cadastrarBtn.style.display = 'none';
    }
})