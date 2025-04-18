function printSquare(num) {
    if (typeof num !== 'number') return 'Data yang dimasukkan harus angka'

    for (let i = 0; i < num; i++) {
        let row = ''
        for (let j = 1; j <= num; j++) {
            row += j
        }
        console.log(row)
    }
}

printSquare(5)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrSpread = [...arr1, ...arr2]

console.log(arrSpread)