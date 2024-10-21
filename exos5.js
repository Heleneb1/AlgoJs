// Exercice 1 : Vérification des Anagrammes
// Écris une fonction areAnagrams(str1, str2) qui prend deux chaînes en entrée et retourne true si elles sont des anagrammes (c'est-à-dire qu'elles contiennent les mêmes lettres dans des ordres différents) et false sinon.

// const areAnagrams = (str1, str2) => {
//     const strSplit1 = str1.split('').sort().join('')
//     const strSplit2 = str2.split('').sort().join('')
//     // console.log(strSplit1)
//     // console.log(strSplit2)
//     if (strSplit1 === strSplit2) {
//         return true
//     } else {
//         return false
//     }
// }


// areAnagrams('listen', 'silent'); // true
// areAnagrams('hello', 'world');   // false
//ou
// const areAnagrams = (str1, str2) => {
//     return str1.split('').sort().join('') === str2.split('').sort().join('')
// }



// Exercice 2 : Filtrer les Nombres Pairs
// Écris une fonction filterEvenNumbers(arr) qui prend un tableau de nombres en entrée et retourne un nouveau tableau contenant uniquement les nombres pairs.

// const filterEvenNumbers = (arr) => {
//     let evenArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenArr.push(arr[i])
//         }
//     }
//     return evenArr
// }
//ou
// const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// filterEvenNumbers([1, 2, 3, 4, 5, 6]); // [2, 4, 6]
// filterEvenNumbers([10, 15, 20, 25]);    // [10, 20]


// Exercice 3 : Compter les Voyelles
// Écris une fonction countVowels(str) qui prend une chaîne de caractères en entrée et retourne le nombre total de voyelles (a, e, i, o, u) dans cette chaîne.

// countVowels = (str) => {
//     const vowels = ["a", "e", "i", "o", "u"]
//     let count = 0

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++
//         }
//     }
//     return count
// }


// countVowels('Hello World'); // 3
// countVowels('Programming');  // 3



// Voici trois exercices un peu plus compliqués en JavaScript :

// Exercice 4 : Tri des Objets par Propriété
// Écris une fonction sortByProperty(arr, property) qui prend un tableau d'objets et une propriété en entrée, puis retourne le tableau trié par cette propriété. Assure-toi que le tri soit effectué dans l'ordre croissant.


// const sortByProperty = (arr, property) => {
//     return arr.sort((a, b) => {
//       if (a[property] < b[property]) {
//         return -1;  // a vient avant b
//       } else if (a[property] > b[property]) {
//         return 1;   // a vient après b
//       } else {
//         return 0;   // a et b sont égaux
//       }
//     });
//   };


//   const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 30 }
//   ];

//   console.log(sortByProperty(people, 'age'));
// Résultat :
// [
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 30 }
// ]

// Exercice 4 bis : Tri des Produits par Prix
// Écris une fonction sortProductsByPrice(arr) qui prend un tableau d'objets représentant des produits,
// et retourne le tableau trié par la propriété "price" dans l'ordre croissant.

// const products = [
//     { name: 'Laptop', price: 1000 },
//     { name: 'Smartphone', price: 800 },
//     { name: 'Tablet', price: 600 },
//     { name: 'Smartwatch', price: 200 }
// ];

// Écris ta fonction ici
// const sortProductsByPrice = (products) => {
//     return products.sort((a, b) =>
//         a.price - b.price
//     )

// }
// // Exemple d'appel :
// console.log(sortProductsByPrice(products));

// Exemple d'appel :

// Résultat attendu :
// [
//   { name: 'Smartwatch', price: 200 },
//   { name: 'Tablet', price: 600 },
//   { name: 'Smartphone', price: 800 },
//   { name: 'Laptop', price: 1000 }
// ]

// Exercice 5 : Trouver le Nombre Manquant
// Écris une fonction findMissingNumber(arr) qui prend un tableau d'entiers de 0 à n et qui a un nombre manquant. La fonction doit retourner le nombre manquant.
const findMissingNumber = (arr) => {
    let missing = 0
    for (let i = 0; i <= arr.length; i++) {//let i =0; i<arr.length +1; i++
        if (arr.indexOf(i) === -1) {//Dans ta fonction findMissingNumber, tu utilises arr.indexOf(i). Cela signifie que tu cherches si le nombre i est présent dans le tableau arr. Si indexOf(i) retourne -1, cela signifie que i n'est pas dans le tableau, ce qui indique que c'est le nombre manquant.
            return i
        }
    }


}
console.log(findMissingNumber([0, 1, 2, 3, 5])); // 4
// console.log(findMissingNumber([1, 2, 3, 5, 0])); // 4




// Exercice 6 : Générateur de Palindrome
// Écris une fonction isPalindrome(str) qui prend une chaîne de caractères en entrée et retourne true si la chaîne est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche), et false sinon. Ignore les espaces et la ponctuation.

// const isPalindrome = (str) => {
//     const string = str.replace(/[^\w]/g, '').toLowerCase()// supprimer tout caractère non alphanumérique avant de faire d'autres opérations
//     const reverse = string.split("").reverse().join("")
//     console.log(reverse)
//     return string === reverse
// }
// console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
// console.log(isPalindrome('Hello, World!'));                  // false



// Exercice 7 : Compression de Chaîne
// Écris une fonction compressString(str) qui prend une chaîne de caractères en entrée et retourne une nouvelle chaîne qui contient les caractères compressés. Chaque caractère sera suivi du nombre de fois qu'il apparaît consécutivement.

// const compressString = (string) => {
//     let result = "";
//     let count = 1;

//     for (let i = 1; i <= string.length; i++) {
//         // Compare le caractère actuel avec le précédent
//         if (string[i] === string[i - 1]) {
//             count++; // Incrémente le compteur si c'est le même caractère
//         } else {
//             result += string[i - 1] + count; // Ajoute le caractère précédent et son compteur
//             count = 1; // Réinitialise le compteur
//         }
//     }

//     return result; // Retourne la chaîne compressée
// }




// // Exemples d'appel :
// console.log(compressString('aaabbc')); // 'a3b2c1'
// console.log(compressString('abcd'));    // 'a1b1c1d1'
// console.log(compressString('aaabaaa')); // 'a3b1a3'
// console.log(compressString('aaabbaaa')); // 'a3b2a3'


// Exercice 8 : Anagrammes
// Écris une fonction areAnagrams(str1, str2) qui prend deux chaînes de caractères en entrée et retourne true si elles sont des anagrammes (c'est-à-dire qu'elles contiennent les mêmes lettres dans un ordre différent) et false sinon. Ignore la casse et les espaces.

// areAnagrams('listen', 'silent');    // true
// areAnagrams('hello', 'world');      // false
// areAnagrams('A gentleman', 'Elegant man'); // true



// Exercice 9 : Trouver les Duplicatas
// Écris une fonction findDuplicates(arr) qui prend un tableau d'éléments en entrée et retourne un tableau des éléments dupliqués, sans répétition.
// const findDuplicates = (array) => {
//     let duplicates = [];
//     let seen = [];

//     for (let i = 0; i < array.length; i++) {
//         if (seen.includes(array[i]) && !duplicates.includes(array[i])) {
//             duplicates.push(array[i]);
//         } else {
//             seen.push(array[i]);
//             console.log(seen.push(array[i]))
//         }
//     }

//     return duplicates;
// }


// findDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 7]); // [4, 6]
// findDuplicates(['apple', 'banana', 'apple', 'orange', 'banana']); // ['apple', 'banana']

// Exercice 10 : Calculatrice d'Expressions
// Écris une fonction evaluateExpression(expr) qui prend une chaîne représentant une expression mathématique (ex. "3 + 5 * (2 - 8)") et retourne le résultat de l'évaluation de cette expression.

// evaluateExpression("3 + 5 * (2 - 8)"); // -13
// evaluateExpression("10 + 2 * 6");      // 22
// evaluateExpression("100 * 2 + 12");    // 212