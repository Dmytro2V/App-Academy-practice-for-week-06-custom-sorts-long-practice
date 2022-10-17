function ageSort(users) {
  // Your code here
  return users.sort((a,b) =>    a.age - b.age)
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    if (a % 2 === 0 && b % 2 === 1) return 1 // even/odd, swap
    if (a % 2 === 1 && b % 2 === 0) return -1 // odd/even, no swap
    return a - b; //usual - swap to asc
  })
}

function validAnagrams(s, t) {
  // Your code here
  return s.split('').sort().join('') === t.split('').sort().join('') 
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    let baseA = String(a).length;
    let baseB = String(b).length;
    if (baseA === baseB) return  a - b; // inside group asc
    else return baseB - baseA // groups desc; 
  })
}

function frequencySort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    let table = {}
    let freqA = freq(arr, a, table);
    let freqB = freq(arr, b, table);
    if (freqA === freqB) return b - a //desc
    else return freqA - freqB // asc
  })
}
function freq(arr, n, table) {
  
  if (table[n] === undefined) { // no data, calc
    table[n] = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) table[n]++;
    }
  }
  
  return table[n];
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];