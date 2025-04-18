function countDiscount(total) {
    if (typeof total !== 'number') return 'data harus berupa angka'
    if (total <= 0) return 'jumlah harus diatas 0'

    let discount
    if (total >= 1000000) discount = 10 / 100
    else if (total >= 500000 && total < 1000000) discount = 5 / 100
    else if (total < 500000) return `Anda tidak mendapatkan diskon, total belanja anda Rp. ${total}`

    const result = total - discount * total
    return `Anda mendapatkan diskon ${discount * 100}%, total belanja anda menjadi Rp. ${result}`
}

console.log(countDiscount(1000000))