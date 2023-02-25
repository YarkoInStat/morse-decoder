const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let array = [];
    let morse = '';

    for (i = 0; i < expr.length; i = i + 10) {

        if (expr.slice(i, i+2) === '**') {
            array.push(' ');
        } else for (j = 0; j < 9; j = j + 2) {
            
            if (expr.slice(i, i+10).slice(j, j+2) === '11') {
                morse += '-';
            } else if (expr.slice(i, i+10).slice(j, j+2) === '10') {
                morse += '.';
            }

        } array.push(MORSE_TABLE[morse]);
        morse = '';
    }
return array.join('');
}


module.exports = {
    decode
}