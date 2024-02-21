let btOrderByPrice = document.querySelector('#btnOrdenarPorPreco')
btOrderByPrice.addEventListener('click', orderByPrice)

function orderByPrice() {
    let ordenedBooks = books.sort((a, b) => a.preco - b.preco)
    showBooksOnScreen(ordenedBooks)
}