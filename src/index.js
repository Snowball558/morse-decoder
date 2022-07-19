const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let addDelZeros = [];
    let result = [];

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }
    arr.forEach(element => {
        if (element == '**********') {
            addDelZeros.push('*');
        } else {
            addDelZeros.push(element.match(/(((10)|(11))+)/)[0]);
        }
    })
    arr = [];
    addDelZeros.forEach(element => {
        arr.push(element.replace(/(10)/g, '.').replace(/(11)/g, '-'));
    })
    arr.forEach(element => {
        if (typeof (MORSE_TABLE[element]) == 'undefined') {
            result.push(' ');
        } else {
            result.push(MORSE_TABLE[element]);
        }
    })
    return result.join('');
}


module.exports = {
    decode
}