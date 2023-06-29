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

  // You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
  // Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
  // []                                -->  "no one likes this"
  // ["Peter"]                         -->  "Peter likes this"
  // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"

  function likes(names) {
    // TODO
    if(names.length === 1 ) {
      return `${names[0]} likes this`
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length > 3) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }else {
      return 'no one likes this'
    }
  }

  // Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
  // Examples:
  // a = "xyaabbbccccdefww"
  // b = "xxxxyyyyabklmopq"
  // longest(a, b) -> "abcdefklmopqwxy"

  function longest(s1, s2) {
    return Array.from(new Set([...s1, ...s2])).sort().join('')
  }