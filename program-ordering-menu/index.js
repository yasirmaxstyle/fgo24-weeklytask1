const readline = require('node:readline');
const { stdin: input, stdout: output, off } = require('node:process');
const { asciiArt } = require('./UI/ascii')
const { homeMenu } = require('./UI/homeMenu');
const { orderMenu } = require('./UI/menu');
const { foods, beverages, sideDishes, snacks, desserts } = require('./UI/orderUI');
const { objectMenu } = require('./UI/objectMenu');

const rl = readline.createInterface({ input, output });

rl.question(asciiArt, homeDisplay)
const item = objectMenu.order
const cart = objectMenu.cart

function homeDisplay() {
    rl.question(homeMenu, (answer) => {
        switch (answer) {
            case "1":
                chooseOrder()
                break;
            case "2":
                openCart()
                break;
            case "3":
                checkout()
                break;
            case "0":
                rl.on('close', () => {
                    console.log('Terima kasih sudah mampir.')
                })
                rl.close()
                break;
            default:
                console.error(new Error('invalid input'))
                homeDisplay()
                break;
        }
    });
}

function chooseOrder() {
    rl.question(orderMenu, (answer) => {
        switch (answer) {
            case "1":
                chooseFoods()
                break;
            case "2":
                chooseBeverages()
                break;
            case "3":
                chooseSideDishes()
                break;
            case "4":
                chooseSnacks()
                break;
            case "5":
                chooseDesserts()
                break;
            case "0":
                homeDisplay()
                break;
            default:
                console.error(new Error('invalid input'))
                chooseOrder()
                break;
        }
    })
}

function chooseFoods() {
    rl.question(foods, (idx) => {
        if (idx > 0 && idx <= item.foods.length) {
            rl.question(`Anda yakin mau membeli ${item.foods[idx - 1].name} seharga Rp. ${item.foods[idx - 1].price}? (y/n) `,
                (answer) => {
                    switch (answer) {
                        case "y":
                            cart.foods[cart.foods.length] = { name: item.foods[idx - 1].name, price: item.foods[idx - 1].price }
                            console.log('Item berhasil ditambahkan ke keranjang')
                            rl.question(`Apakah anda ingin membeli lagi? (y/n) `, (answer) => {
                                switch (answer) {
                                    case "y":
                                        chooseOrder()
                                        break;
                                    case "n":
                                        homeDisplay()
                                        break;
                                    default:
                                        console.error(new Error('invalid input'))
                                        chooseFoods()
                                        break;
                                }
                            })
                            break;
                        case "n":
                            chooseFoods()
                        default:
                            console.error(new Error('invalid input'))
                            chooseFoods()
                            break;
                    }
                })
        }
        else if (idx === "0") chooseOrder()
        else if (idx === "99") homeDisplay()
        else if (idx > item.foods.length && idx < 99) {
            console.error(new Error('menu tidak tersedia'))
            chooseFoods()
        }
        else {
            console.error(new Error('invalid input'))
            chooseFoods()
        }
    });
}

function chooseBeverages() {
    rl.question(beverages, (idx) => {
        if (idx > 0 && idx <= item.beverages.length) {
            rl.question(`Anda yakin mau membeli ${item.beverages[idx - 1].name} seharga Rp. ${item.beverages[idx - 1].price}? (y/n) `,
                (answer) => {
                    switch (answer) {
                        case "y":
                            cart.beverages[cart.beverages.length] = { name: item.beverages[idx - 1].name, price: item.beverages[idx - 1].price }
                            console.log('Item berhasil ditambahkan ke keranjang')
                            rl.question(`Apakah anda ingin membeli lagi? (y/n) `, (answer) => {
                                switch (answer) {
                                    case "y":
                                        chooseOrder()
                                        break;
                                    case "n":
                                        homeDisplay()
                                        break;
                                    default:
                                        console.error(new Error('invalid input'))
                                        chooseBeverages()
                                        break;
                                }
                            })
                            break;
                        case "n":
                            chooseBeverages()
                        default:
                            console.error(new Error('invalid input'))
                            chooseBeverages()
                            break;
                    }
                })
        }
        else if (idx === "0") chooseOrder()
        else if (idx === "99") homeDisplay()
        else if (idx > item.beverages.length && idx < 99) {
            console.error(new Error('menu tidak tersedia'))
            chooseBeverages()
        }
        else {
            console.error(new Error('invalid input'))
            chooseFoods()
        }
    });
}

function chooseSideDishes() {
    rl.question(sideDishes, (idx) => {
        if (idx > 0 && idx <= item.sideDishes.length) {
            rl.question(`Anda yakin mau membeli ${item.sideDishes[idx - 1].name} seharga Rp. ${item.sideDishes[idx - 1].price}? (y/n) `,
                (answer) => {
                    switch (answer) {
                        case "y":
                            cart.sideDishes[cart.sideDishes.length] = { name: item.sideDishes[idx - 1].name, price: item.sideDishes[idx - 1].price }
                            console.log('Item berhasil ditambahkan ke keranjang')
                            rl.question(`Apakah anda ingin membeli lagi? (y/n) `, (answer) => {
                                switch (answer) {
                                    case "y":
                                        chooseOrder()
                                        break;
                                    case "n":
                                        homeDisplay()
                                        break;
                                    default:
                                        console.error(new Error('invalid input'))
                                        chooseSideDishes()
                                        break;
                                }
                            })
                            break;
                        case "n":
                            chooseSideDishes()
                        default:
                            console.error(new Error('invalid input'))
                            chooseSideDishes()
                            break;
                    }
                })
        }
        else if (idx === "0") chooseOrder()
        else if (idx === "99") homeDisplay()
        else if (idx > item.sideDishes.length && idx < 99) {
            console.error(new Error('menu tidak tersedia'))
            chooseSideDishes()
        }
        else {
            console.error(new Error('invalid input'))
            chooseSideDishes()
        }
    });
}

function chooseSnacks() {
    rl.question(snacks, (idx) => {
        if (idx > 0 && idx <= item.snacks.length) {
            rl.question(`Anda yakin mau membeli ${item.snacks[idx - 1].name} seharga Rp. ${item.snacks[idx - 1].price}? (y/n) `,
                (answer) => {
                    switch (answer) {
                        case "y":
                            cart.snacks[cart.snacks.length] = { name: item.snacks[idx - 1].name, price: item.snacks[idx - 1].price }
                            console.log('Item berhasil ditambahkan ke keranjang')
                            rl.question(`Apakah anda ingin membeli lagi? (y/n) `, (answer) => {
                                switch (answer) {
                                    case "y":
                                        chooseOrder()
                                        break;
                                    case "n":
                                        homeDisplay()
                                        break;
                                    default:
                                        console.error(new Error('invalid input'))
                                        chooseSnacks()
                                        break;
                                }
                            })
                            break;
                        case "n":
                            chooseSnacks()
                        default:
                            console.error(new Error('invalid input'))
                            chooseSnacks()
                            break;
                    }
                })
        }
        else if (idx === "0") chooseOrder()
        else if (idx === "99") homeDisplay()
        else if (idx > item.snacks.length && idx < 99) {
            console.error(new Error('menu tidak tersedia'))
            chooseSnacks()
        }
        else {
            console.error(new Error('invalid input'))
            chooseSnacks()
        }
    });
}

function chooseDesserts() {
    rl.question(desserts, (idx) => {
        if (idx > 0 && idx <= item.desserts.length) {
            rl.question(`Anda yakin mau membeli ${item.desserts[idx - 1].name} seharga Rp. ${item.desserts[idx - 1].price}? (y/n) `,
                (answer) => {
                    switch (answer) {
                        case "y":
                            cart.desserts[cart.desserts.length] = { name: item.desserts[idx - 1].name, price: item.desserts[idx - 1].price }
                            console.log('Item berhasil ditambahkan ke keranjang')
                            rl.question(`Apakah anda ingin membeli lagi? (y/n) `, (answer) => {
                                switch (answer) {
                                    case "y":
                                        chooseOrder()
                                        break;
                                    case "n":
                                        homeDisplay()
                                        break;
                                    default:
                                        console.error(new Error('invalid input'))
                                        chooseDesserts()
                                        break;
                                }
                            })
                            break;
                        case "n":
                            chooseDesserts()
                        default:
                            console.error(new Error('invalid input'))
                            chooseDesserts()
                            break;
                    }
                })
        }
        else if (idx === "0") chooseOrder()
        else if (idx === "99") homeDisplay()
        else if (idx > item.desserts.length && idx < 99) {
            console.error(new Error('menu tidak tersedia'))
            chooseDesserts()
        }
        else {
            console.error(new Error('invalid input'))
            chooseDesserts()
        }
    });
}

function openCart() {
    if (cart.foods.length !== 0 || cart.beverages.length !== 0 || cart.sideDishes.length !== 0 || cart.snacks.length !== 0 || cart.desserts.length !== 0) {
        if (cart.foods.length !== 0) {
            for (let i = 0; i < cart.foods.length; i++) {
                console.log(`item: ${cart.foods[i].name}, harga: Rp. ${cart.foods[i].price}`)
            }
        }
        if (cart.beverages.length !== 0) {
            for (let i = 0; i < cart.beverages.length; i++) {
                console.log(`item: ${cart.beverages[i].name}, harga: Rp. ${cart.beverages[i].price}`)
            }
        }
        if (cart.sideDishes.length !== 0) {
            for (let i = 0; i < cart.sideDishes.length; i++) {
                console.log(`item: ${cart.sideDishes[i].name}, harga: Rp. ${cart.sideDishes[i].price}`)
            }
        }
        if (cart.snacks.length !== 0) {
            for (let i = 0; i < cart.snacks.length; i++) {
                console.log(`item: ${cart.snacks[i].name}, harga: Rp. ${cart.snacks[i].price}`)
            }
        }
        if (cart.desserts.length !== 0) {
            for (let i = 0; i < cart.desserts.length; i++) {
                console.log(`item: ${cart.desserts[i].name}, harga: Rp. ${cart.desserts[i].price}`)
            }
        }
        rl.question('apakah anda ingin melakukan pembayaran? (y/n) ', (answer) => {
            switch (answer) {
                case "y":
                    checkout()
                    break;
                case "n":
                    homeDisplay()
                    break;
                default:
                    console.error(new Error('invalid input'))
                    openCart()
                    break;
            }
        })
    }

    else {
        console.log('keranjang kosong, silakan berbelanja dulu')
        chooseOrder()
    }
}

function checkout() {
    let total = 0
    if (cart.foods.length !== 0 || cart.beverages.length !== 0 || cart.sideDishes.length !== 0 || cart.snacks.length !== 0 || cart.desserts.length !== 0) {
        if (cart.foods.length !== 0) {
            for (let i = 0; i < cart.foods.length; i++) {
                total += cart.foods[i].price
            }
        }
        if (cart.beverages.length !== 0) {
            for (let i = 0; i < cart.beverages.length; i++) {
                total += cart.beverages[i].price
            }
        }
        if (cart.sideDishes.length !== 0) {
            for (let i = 0; i < cart.sideDishes.length; i++) {
                total += cart.sideDishes[i].price
            }
        }
        if (cart.snacks.length !== 0) {
            for (let i = 0; i < cart.snacks.length; i++) {
                total += cart.snacks[i].price
            }
        }
        if (cart.desserts.length !== 0) {
            for (let i = 0; i < cart.desserts.length; i++) {
                total += cart.desserts[i].price
            }
        }
        rl.question(`total pembayaran anda adalah Rp. ${total}, lakukan pembayaran? (y/n) `, (answer) => {
            switch (answer) {
                case "y":
                    rl.on('close', () => {
                        console.log('Pembayaran diterima. Terima kasih sudah mampir.')
                    })
                    rl.close()
                    break;
                case "n":
                    homeDisplay()
                    break;
                default:
                    console.error(new Error('invalid input'))
                    checkout()
                    break;
            }
        })
    }

    else {
        console.log('belum ada transaksi apapun, silakan berbelanja dulu')
        chooseOrder()
    }

}