/*
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n = 6;
console.log(`Число фібоначчі ${n} є ${fibonacci(n)}`);
*/

/*
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

function findPalindrome(num) {
    let steps = 0;
    while (!isPalindrome(num)) {
        num += reverseNumber(num);
        steps++;
    }
    return { result: num, steps: steps };
}

let number = 96;
let result = findPalindrome(number);
console.log(`Palindrome: ${result.result}, Steps: ${result.steps}`);
*/



function permutation(arr) {
    if (arr.length === 0) return [[]];
    
    let [first, ...rest] = arr;
    let permsWithoutFirst = permutation(rest);
    
    function allPosition(perm, first, index = 0) {
        if (index > perm.length) return [];
        let start = perm.slice(0, index);
        let end = perm.slice(index);
        let newPerm = [...start, first, ...end];
        return [newPerm, ...allPosition(perm, first, index + 1)];
    }
    
    return permsWithoutFirst.reduce((acc, perm) => {
        return acc.concat(allPosition(perm, first));
    }, []);
}

let array = [3, 4, 5];
let permutations = permutation(array);
console.log(permutations);