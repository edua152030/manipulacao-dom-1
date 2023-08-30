function digitarNome() {
    const nome = prompt('Digite seu nome')
    const texto = document.getElementById('paragrafo')
    
    
    texto.textContent = `E aí ${nome}! Você está deixando o seu site dinâmico.`;

    console.log(nome)
    console.log(texto.textContent);
}