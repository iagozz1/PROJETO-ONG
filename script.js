const card = document.getElementById("card-doacao");

const resultado = document.getElementById("resultado-pix");
const inputNome = document.getElementById("nome");



card.addEventListener("submit", (e) =>{
    e.preventDefault();

    resultado.classList.remove("oculto");
    const chavePix = "3f8a1c7e-52b4-4d9a-9e61-b7c04a2d58f3";

    if (nome === "") {
    resultado.classList.add("oculto");
    return;
    }

    resultado.innerHTML = 
    ` 
    <div class="card-pix">
      <p>Chave Pix para a doação: <span id="chave-texto">${chavePix}</span> </p>
        <button type="button" id="btn-copiar">Copiar</button>
      </div>
    </div>
  `;


  const botao = document.getElementById("btn-copiar");


  botao.addEventListener("click", (e) =>{
    navigator.clipboard.writeText(chavePix);
    e.target.textContent = "Copiado!";


  });
});