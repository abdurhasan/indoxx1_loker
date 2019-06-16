function cekPalindrome(word) {
    return word ===word.split("").reverse().join("");
}

function hitungPalindrome(word) {
    let panjangKata = word.length
    let subStrings = [];
    for (let i = 0; i < panjangKata; i++) {
        for (let j = 0; j < panjangKata - i; j++) {
            let subString = word.substring(j, j + i + 1);
            if(cekPalindrome(subString)){
                subStrings.push(subString)
            }            
        }
    }
    return {
        output : subStrings.length,
        penjelasan : subStrings
    }
}


console.log(hitungPalindrome("aaa"))
