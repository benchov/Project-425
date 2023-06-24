// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
function digitalRoot(n) {
    let result = 0
    const convert_to_single = (num) => {
        
        let single_num_arr = num.toString().split('').map(n => Number(n))
        
        result = single_num_arr.reduce((a,c) => a + c, 0)
        if(result.toString().length > 1) {
          result = convert_to_single(result)
        } 
      return result
    }
    return convert_to_single(n)
  }