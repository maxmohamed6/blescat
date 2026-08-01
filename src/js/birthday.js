const nascimento = new Date("2003-06-04");
const hoje = new Date();

let idade = hoje.getFullYear() - nascimento.getFullYear();

if ( hoje.getMonth() < nascimento.getMonth() || (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate()) ) {
    idade--;
}

document.getElementById("idade").innerText = idade;