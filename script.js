const  form = document.querySelector('.form');
const resultado  = document.querySelector('.calculo');
const x  = document.querySelector('.x');
const altura = document.querySelector('.altura');

function pegaoform(evento){

    evento.preventDefault();

    const peso = Number(document.querySelector('.peso').value);
    const altura = Number(document.querySelector('.altura').value);

    if (altura <= 0.5 || altura >= 2.5) {
        x.innerHTML = `<p>Altura deve estar entre 0.5 m e 2.5`;
        return;
    }

    if (peso <= 10 || peso >= 300) {
        x.innerHTML = `<p>Peso deve estar entre 10 kg e 300 kg.`;
        return;
        
    }

    const imc = peso / (altura * altura);

    const operacao = [

        [imc <= 18.5, "Abaixo do peso"],
        [imc >= 18.5 && imc <= 24.9, "Peso normal"],
        [imc >= 25 && imc <= 29.9, "Sobrepeso"],
        [imc >= 30 && imc <= 34.9, "Obesidade Grau 1"],
        [imc >= 35 && imc <= 39.9, "Obesidade Grau 2"],
        [imc >= 40, "Obesidade Grau 3"]
    ];

        const mensagem = operacao.find(item => item[0]);
        
        x.innerHTML = `<p>${imc.toFixed(2)} </p>`;
        x.innerHTML += `<p>${mensagem ? mensagem[1] : "Número errado meu camadara"} </p>`;
}

form.addEventListener('submit', pegaoform);
altura.addEventListener('input', () => {

    const ponto = altura.value.slice(0, 1) + "." + altura.value.slice(2);
    altura.value = ponto;

});