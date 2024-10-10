// Exercice 1 : Calcul de la Somme des Nombres Pairs
// Écris une fonction sumEvenNumbers(arr) qui prend un tableau de nombres en entrée et retourne la somme de tous les nombres pairs dans le tableau.
// const sumEvenNumbers = (arr) => {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             count += arr[i]
//         }
//     }
//     return count
// }
//ou
// const sumEvenNumbers = (arr) => {
//     return arr.filter((num) => num % 2 === 0).reduce((acc, curr) => acc + curr)
// }


// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
// console.table(sumEvenNumbers([7, 10, 15, 20]));    // 30

// Exercice 2 : Inversion de Mot
// Écris une fonction reverseWord(word) qui prend un mot en entrée et retourne ce mot inversé.
// const reverseWord = (word) => word.split('').reverse().join('')


// console.log(reverseWord('javascript')); // 'tpircsavaj'
// console.log(reverseWord('hello'));      // 'olleh'

// Exercice 3 : Trouver la Plus Longue Chaîne
// Écris une fonction longestWord(arr) qui prend un tableau de chaînes de caractères et retourne la plus longue chaîne.
// const longestWord = (arr) => {
//     return arr.reduce((acc, curr) => {
//       return acc.length >= curr.length ? acc : curr; // Utilise >= pour retourner le premier en cas d'égalité
//     });
//   };

//   console.log(longestWord(['apple', 'banana', 'cherry'])); // 'banana' ou 'cherry' en fonction de l'ordre
//   console.log(longestWord(['hi', 'hello', 'hey']));        // 'hello'

//ou
// const longestWord = (arr) => {
//     let longuest = ""
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > longuest.length) {
//             longuest = arr[i]
//         }
//     }
//     return longuest
// }

// Exercice 4 : Filtrer les Nombres Impairs
// Écris une fonction filterOddNumbers(arr) qui prend un tableau de nombres et retourne un nouveau tableau contenant uniquement les nombres impairs.
// const filterOddNumbers = (arr) => {
//     let oddNmbArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             oddNmbArr.push(arr[i])
//         }
//     }
//     return oddNmbArr
// }
//ou

// const filterOddNumbers = (arr) => {
//     return arr.filter((num) => num % 2 !== 0)
// }

// console.log(filterOddNumbers([1, 2, 3, 4, 5, 6]));  // [1, 3, 5]
// console.log(filterOddNumbers([10, 15, 20, 25, 30])); // [15, 25]



// Exercice 5 : Compter les Caractères
// Écris une fonction countCharacter(str, char) qui prend une chaîne de caractères et un caractère, et retourne le nombre de fois où ce caractère apparaît dans la chaîne.

// const countCharacter = (str, char) => {
//     let count = 0
//     let character = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++
//             character = str[i]
//         }
//     }
//     return count + character
// }
// console.log(countCharacter('hello', 'l'));  // 2l
// console.log(countCharacter('javascript', 'a')); // 2a

// Exercice 1 : Inverser une chaîne
// Écris une fonction reverseString(str) qui prend une chaîne de caractères en entrée et retourne la chaîne inversée.
// const reverseString = (str) => str.split("").reverse().join("")


// console.log(reverseString('hello'));  // 'olleh'
// console.log(reverseString('Ai-buddy'));  // 'yddub-iA'

// Exercice 2 : Trouver les nombres pairs
// Écris une fonction findEvenNumbers(arr) qui prend un tableau de nombres en entrée et retourne un nouveau tableau contenant uniquement les nombres pairs.
// const findEvenNumbers = (arr) => {
//     return arr.filter(num => num % 2 === 0)
// }

// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));  // [2, 4, 6]
// Exercice 3 : FizzBuzz
// Écris une fonction fizzBuzz(n) qui prend un nombre en entrée et retourne un tableau de nombres de 1 à n. Pour chaque multiple de 3, remplace le nombre par "Fizz", pour chaque multiple de 5, remplace par "Buzz", et pour chaque multiple de 3 et 5, remplace par "FizzBuzz".
// const fizzBuzz = (number) => {
//     for (let i = 1; i <= number; i++) {
//         if (i % 5 === 0 && (i % 3 === 0)) {
//             console.log("FizzBuzz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz")
//         } else {
//             console.log(i)
//         }
//     }

// }

// fizzBuzz(15);
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']


// Exercice 4 : Filtrer les mots courts
// Écris une fonction filterShortWords(arr, maxLength) qui prend un tableau de chaînes de caractères et un nombre maxLength, et retourne un nouveau tableau contenant uniquement les chaînes de caractères dont la longueur est inférieure ou égale à maxLength.
// const filterShortWords=(arr, maxLength)=>{
//   const shortWords =[]
//   for (let i =0; i< arr.length; i++){
//     if(arr[i].length<=maxLength){
//      shortWords.push(arr[i])
//     }
//   }
//   return shortWords
// }
//ou
//  const filterShortWords=(arr, maxLength)=>{
//        return arr.reduce((acc,curr)=>{
//           if(curr.length  <=maxLength){
//        acc.push(curr);
//      }
//      return acc
//    },[])
//    }
//ou
// const filterShortWords=(arr, maxLength)=>{
//     return arr.filter((word)=>word.length<=maxLength)
//   }

// console.log(filterShortWords(['apple', 'banana', 'cherry', 'fig'], 5));  // ['apple', 'fig']


// Exercice 5 : Somme des éléments impairs
// Écris une fonction sumOddNumbers(arr) qui prend un tableau de nombres en entrée et retourne la somme des nombres impairs.
// const sumOddNumbers = (arr) => {
//     return arr.filter((num) => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0)
// }

// console.log(sumOddNumbers([1, 2, 3, 4, 5]));  // 9

// Exercice 6 : Trouver le plus grand nombre
// Écris une fonction findMaxNumber(arr) qui prend un tableau de nombres en entrée et retourne le plus grand nombre.
// const findMaxNumber=(arr)=>{
// return Math.max(...arr)//Math.max pas sur un tableau vide au risque d'avoir -Infinity 
// }
// //ou
// const findMaxNumber=(arr)=>{
// let elem = 0
// for (const num of arr){
//   if(num > elem){
//    elem= num
//   }
// }
//   return elem
// }
// //ou
// const findMaxNumber=(arr)=>{
//   let elem = arr[0] //pas 0 mais arr[0] en cas de tableau avec des valeurs négatives
// for(let i =1 ; i<arr.length; i++){
//   if(arr[i]> elem){
//     elem = arr[i]
//   }
// }
//   return elem
// }

// console.log(findMaxNumber([1, 5, 3, 9, 2]));  // 9

// Exercice 7 : Compter les voyelles
// Écris une fonction countVowels(str) qui prend une chaîne de caractères et retourne le nombre de voyelles (a, e, i, o, u) présentes dans la chaîne.

// function countVowels(str) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0; // Initialiser à 0
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) { // Vérifie les voyelles en minuscules
//             count++; // Incrémente le compteur
//         }
//     }
//     return count; // Retourne le compteur final
// }

// console.log(countVowels('hello world'));  // 3
function countVowels(str) {
    const matches = str.match(/[aeiou]/gi); // Utilise une regex pour trouver toutes les voyelles, `g` pour global, `i` pour insensible à la casse
    return matches ? matches.length : 0; // Retourne le nombre de voyelles trouvées ou 0 si aucune n'est trouvée
}

console.log(countVowels('hello world'));  // 3
// Explication :
// Regex /[aeiou]/gi :

// [aeiou] : correspond à n'importe quelle voyelle.
// g : signifie "global", donc la recherche se fait sur toute la chaîne.
// i : signifie "insensible à la casse", ce qui permet de prendre en compte à la fois les lettres minuscules et majuscules.
// match() : Retourne un tableau de toutes les correspondances. Si aucune voyelle n'est trouvée, il retourne null.

// matches ? matches.length : 0 : Si matches est null, cela signifie qu'aucune voyelle n'a été trouvée, donc on retourne 0.

