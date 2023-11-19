const botoesAdicionar = document.querySelectorAll('.adicionar');
const itensCarrinho = document.getElementById('itens-carrinho');
const total = document.getElementById('total');
let carrinho = [];
let valorTotal = 0;

botoesAdicionar.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    const produto = botao.parentNode;
    const titulo = produto.querySelector('h3').innerText;
    const preco = parseFloat(produto.querySelector('p').innerText.replace('Preço: R$ ', ''));

    carrinho.push({ titulo, preco });
    valorTotal += preco;

    const itemCarrinho = document.createElement('li');
    itemCarrinho.innerHTML = `${titulo} - R$ ${preco.toFixed(2)} <button class="remover-item">Excluir</button>`;
    itensCarrinho.appendChild(itemCarrinho);

    total.innerText = `Total: R$ ${valorTotal.toFixed(2)}`;

    // Adicionando evento de clique para remover item
    const botoesRemover = document.querySelectorAll('.remover-item');
    botoesRemover.forEach(botao => {
      botao.addEventListener('click', () => {
        const itemIndex = Array.from(itensCarrinho.children).indexOf(itemCarrinho);
        const precoRemovido = carrinho[itemIndex].preco;
        valorTotal -= precoRemovido;
        carrinho.splice(itemIndex, 1);
        itemCarrinho.remove();
        total.innerText = `Total: R$ ${valorTotal.toFixed(2)}`;
      });
    });
  });
});
