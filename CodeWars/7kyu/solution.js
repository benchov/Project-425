// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
  const str_arr = str.toLowerCase().split('').sort()
  for(i=0; i < str_arr.length-1; i++) {
      if(str_arr[i].toLowerCase() === str_arr[i+1].toLowerCase()) {
        return false
      }
  }
  return true
}

// This solution was the best practices and the cleverest solution
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}