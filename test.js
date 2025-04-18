function isPalindrom(word) {
    if (typeof word !== 'string') return 'data harus bertipe string'

    const len = word.length

    let result = true
    for (let i = 0; i < len; i++) {
        // comparing both end of letter, and going inside gradually
        // letter in the centre would be compared to its ownself
        if (word[i] !== word[len - 1 - i]) result = false

        // if any of comparison not same the result will change
        // othewise the result remain the same
    }

    // show the result
    let output
    if (result === true) output = `kata ${word} adalah palindrom`
    else output = `kata ${word} bukan palindrom`

    return output
}

console.log(isPalindrom('malam'))

function reverseWords(sentence) {
    if (typeof sentence !== 'string') return 'tipe data harus string'
    if (!sentence.includes(' ')) return 'input harus berupa kalimat'

    let word = ''
    let reversed = ''
    const len = sentence.length

    for (let i = 0; i < len; i++) {
        if (sentence[i] === ' ') {
            // add space before new word to make it like sentence
            reversed = ' ' + word + reversed
            // stop collecting to word
            word = ''
        } else word = word + sentence[i]
    }

    // last word is not inserted to reversed thus we add it in result
    return word + reversed
}

console.log(reverseWords('Saya belajar Javascript'))