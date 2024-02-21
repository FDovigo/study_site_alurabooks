const btFilters = document.querySelectorAll('.btn')
btFilters.forEach(bt => bt.addEventListener('click', filterBooks))

function filterBooks() {
    const btElement = document.getElementById(this.id)
    const category = btElement.value
    console.log(category)
    let filteredBooks = category == 'disponivel' ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria == category)
    showBooksOnScreen(filteredBooks)
    if (category == 'disponivel') {
        const totalValue = calcTotalValue(filteredBooks)
        showTotalValue(totalValue)
    }
}

function showTotalValue(totalValue) {
    elementWithTotalValue.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
        </div>
    `
}