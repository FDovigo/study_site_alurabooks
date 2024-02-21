const insertionElement = document.getElementById('livros')
const elementWithTotalValue = document.getElementById('valor_total_livros_disponiveis')

function showBooksOnScreen(booksList) {
    elementWithTotalValue.innerHTML = ''
    insertionElement.innerHTML = ''
    booksList.forEach(book => {
        let bookClass = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        insertionElement.innerHTML += `
        <div class = "livro">
            <img class = "${bookClass}" 
                src="${book.imagem}"
                alt = "${book.alt}" />
            <h2 class = "livro__titulo">${book.titulo}</h2>
            <p class = "livro__descricao"> ${book.autor} </p>
            <p class = "livro__preco">R$ ${book.preco.toFixed(2)}</p>
            <div class = "tags">
                <span class = "tag"> ${book.categoria} </span>
            </div>
        </div>  `
    })
}
