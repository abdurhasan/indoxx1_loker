let dict = ['', '', ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['g', 'h', 'i'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']]


function phoneCombinator(num) {
    let soal = ("" + num).split("").map(snap => {
        return dict[snap]
    });

    return kombinasi(soal)
}

console.log(phoneCombinator(23))



function kombinasi(arr) {
    if (arr.length == 1) {
      return arr[0];
    } else {
      var result = [];
      var arraySisa = kombinasi(arr.slice(1));  // recur with the rest of array
      for (var i = 0; i < arraySisa.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
          result.push(arr[0][j] + arraySisa[i]);
        }
      }
      return result;
    }
  
  }

