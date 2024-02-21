function applyDiscount(books) {
    const discount = 0.3
    discountBooks = books.map(book => {
        return {...book, preco: book.preco * (1 - discount)}
    })
    return discountBooks
}
