// Exercice 1 : Somme des chiffres
// Écris une fonction qui prend un nombre entier en paramètre et retourne la somme de tous ses chiffres.

// Exemple : sumDigits(123) devrait retourner 6 (1 + 2 + 3).


// const sumDigits = (number) => {
//     const convert = number.toString()
//     console.log(convert)
//     let sum = 0
//     for (let i = 0; i < convert.length; i++) {
//         sum += parseInt(convert[i])
//         console.log(sum)
//     }
//     return sum
// }


// console.log(sumDigits(123))

// const sumDigits = (number) => {

//     const convert = number.toString().split('')
//     console.log(convert)
//     return convert.reduce((acc, curr) => parseInt(acc) + parseInt(curr))
// }
// console.log(sumDigits(123))
// Exercice 2 : Palindrome
// Crée une fonction qui vérifie si une chaîne de caractères est un palindrome (la même chose lue de gauche à droite et de droite à gauche).

// Exemple : isPalindrome("radar") devrait retourner true, tandis que isPalindrome("hello") devrait retourner false.

// const isPalindrome = (str) => {
//     const reversed = str.split('').reverse().join('')
//     return str === reversed
// }
// console.log(isPalindrome("hello"))
// console.log(isPalindrome("radar"))
// Exercice 3 : Nombre premier
// Écris une fonction qui détermine si un nombre donné est un nombre premier.

// Exemple : isPrime(7) devrait retourner true, et isPrime(4) devrait retourner false.

// Exercice 3 : Nombre premier
// Écris une fonction qui détermine si un nombre donné est un nombre premier.

// Exemple : isPrime(7) devrait retourner true, et isPrime(4) devrait retourner false.

// const isPrime = (number) => {
//     if (number <= 1) {
//         return false; // Les nombres <= 1 ne sont pas des nombres premiers
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false; // Si divisible par un nombre autre que 1 et lui-même, ce n'est pas un nombre premier
//         }
//     }
//     return (`${number} est un nombre premier`); // Si aucun diviseur trouvé, le nombre est premier
// }

// // Tests
// console.log(isPrime(7));  // true
// console.log(isPrime(4));  // false
// console.log(isPrime(13)); // true
// console.log(isPrime(25)); // false
// console.log(isPrime(1));  // false
// console.log(isPrime(-7)); // false
// console.log(isPrime(2));  // true

// // Exercice 4 : Fusionner deux tableaux
// // Écris une fonction qui prend deux tableaux et retourne un nouveau tableau qui contient tous les éléments des deux tableaux, sans doublons.

// // Exemple : mergeArrays([1, 2, 3], [3, 4, 5]) devrait retourner [1, 2, 3, 4, 5].

// const mergeArrays = (arr1, arr2) => {
//     const concatArr = arr1.concat(arr2)
//     const noDoble = [...new Set(concatArr)]

//     return noDoble
// }

// console.log(mergeArrays([1, 2, 3], [3, 4, 5]))

// Exercice 5 : Compter les mots
// Crée une fonction qui prend une chaîne de caractères et retourne le nombre de mots dans cette chaîne.

// Exemple : countWords("Bonjour tout le monde") devrait retourner 4.

// La méthode .split() en JavaScript est utilisée pour diviser une chaîne de caractères en un tableau de sous-chaînes, en fonction d'un séparateur que tu spécifies.

// Voici comment ça fonctionne :

// Syntaxe : str.split(separateur, limite)
// separateur : C'est le caractère ou la chaîne de caractères sur laquelle la division est effectuée (par exemple, un espace, une virgule, etc.).
// limite (optionnel) : Un entier qui spécifie le nombre maximal d'éléments à retourner.

// countWords=(sentence)=>{
//   return sentence.split(' ').length

// }

// console.log(countWords("Bonjour tout le monde"))

// Exemple : countWords("Bonjour tout le monde") devrait retourner 4.




// // Exercice 6 : Tri d'un tableau
// // Écris une fonction qui trie un tableau de nombres par ordre croissant.

// const sortedNumbers=(array)=>{
//   return array.sort((a,b)=>a-b)

// }
// console.log(sortedNumbers([1,10,5,15,25]))


// Exemple : sortArray([3, 1, 4, 2]) devrait retourner [1, 2, 3, 4].

// Exercice 7 : Trouver le maximum
// Crée une fonction qui retourne le plus grand nombre d'un tableau.

// Exemple : findMax([1, 5, 3, 9, 2]) devrait retourner 9.

// const findMax = (array)=>{
//   // const largest = array.sort((a,b)=>a-b)
//   // console.log(largest)
//   let number = array[0]
//   for(const num of array){
//     if(num>number){
//       number = num
//     }

//   }
//   return number
// }
// console.log(findMax([1, 5, 3, 9, 2]) )
//autre méthode

// const findMax = (array) => {
//   return Math.max(...array);
// }

// console.log(findMax([1, 5, 3, 9, 2])); // Devrait retourner 9

// Exercice 8 : Retirer les doublons
// Écris une fonction qui prend un tableau et retourne un nouveau tableau sans doublons.
// Exemple : removeDuplicates([1, 2, 2, 3, 4, 4]) devrait retourner [1, 2, 3, 4].
// const removeDuplicates=(array)=>{
//   return [...new Set(array) ]
// }


// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))


// Exercice 9 : FizzBuzz
// Crée une fonction qui imprime les nombres de 1 à 100, mais pour les multiples de 3 imprime "Fizz", pour les multiples de 5 imprime "Buzz", et pour les multiples de 3 et 5 imprime "FizzBuzz".

// Exemple : Pour les nombres de 1 à 15, cela devrait imprimer :
// Copier le code
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// const fizzBuzz = () => {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 5 === 0 && i % 3 === 0) {
//             console.log("FizzBuzz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz")
//         } else {
//             console.log(i);  // Affiche les autres nombres
//         }
//     }
// }
// fizzBuzz(); // Appelle la fonction pour qu'elle s'exécute
// Exercice 10 : Facteur de croissance
// Écris une fonction qui calcule la croissance d'une population. La fonction prend trois paramètres : la population initiale, le taux de croissance (en pourcentage) et le nombre d'années. La fonction retourne la population après le nombre d'années.

// Exemple : populationGrowth(1000, 5, 10) devrait retourner 1628 (environ).


// const populationGrowth = (population, rate, years) => {

//     for (let i = 0; i < years; i++) {
//         const calculate = population * rate / 100
//         population += calculate
//     }
//     return Math.round(population)
// }
// console.log(populationGrowth(1000, 5, 10))

//Autre méthode

// const populationGrowth = (initialPopulation, growthRate, years) => {
//     const growth = initialPopulation * (1 + growthRate / 100) ** years
//     return Math.round(growth)
// }
//Exercice 4 : Fusionner deux tableaux
// Écris une fonction mergeArrays qui prend deux tableaux et retourne un nouveau tableau contenant tous les éléments des deux tableaux, sans doublons.


// const mergeArrays = (arr1, arr2) => {
//     const newArr = arr1.concat(arr2)
//     return [...new Set(newArr)]
// }

// console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // Devrait retourner [1, 2, 3, 4, 5]
// console.log(mergeArrays(['a', 'b', 'c'], ['b', 'c', 'd'])); // Devrait retourner ['a', 'b', 'c', 'd']
// Exercice 7 : Calculer la factorielle
// Écris une fonction factorial qui prend un nombre et retourne sa factorielle.


// Exercice 7 : Calculer la factorielle
// Écris une fonction factorial qui prend un nombre et retourne sa factorielle.


// const factorial = (num) => {
//     let result = 1
//     for (let i = num - 1; i > 0; i--) {
//         result = num *= i
//     }
//     return result
// }
// console.log(factorial(5)); // Devrait retourner 120 (5! = 5 × 4 × 3 × 2 × 1)
// console.log(factorial(0)); // Devrait retourner 1 (0! = 1)
// console.log(factorial(1)); // Devrait retourner 1 (1! = 1)

// for (let i = num; i > 0; i--)

//     let i = num : Initialise une variable i avec la valeur de num. num est supposé être un nombre défini précédemment dans le code.
//     i > 0 : C'est la condition de continuation de la boucle. La boucle continuera tant que i est supérieur à zéro.
//     i-- : C'est l'expression qui est exécutée à la fin de chaque itération. Elle décrémente i de 1 à chaque tour de boucle.

// Exercice 8 : Extraire les nombres d'un tableau
// Crée une fonction extractNumbers qui prend un tableau contenant différents types d'éléments et retourne un tableau contenant seulement les nombres.

// Exercice 8 : Extraire les nombres d'un tableau
// Crée une fonction extractNumbers qui prend un tableau contenant différents types d'éléments et retourne un tableau contenant seulement les nombres.

// const extractNumbers = (array) => {
//     const numbers = []
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'number') {
//             numbers.push(array[i])
//         }

//     }
//     return numbers;
// }

// // Exercice 8 : Extraire les nombres d'un tableau
// // javascript
// // Copier le code
// console.log(extractNumbers([1, 'a', 2, 'b', 3])); // Devrait retourner [1, 2, 3]
// console.log(extractNumbers(['x', 10, 20, 'y', 30]));

// Exercice 1 : Trouver les nombres pairs
// Énoncé : Écris une fonction findEvenNumbers qui prend un tableau de nombres et retourne un nouveau tableau contenant seulement les nombres pairs.


// Exercice 1 : Trouver les nombres pairs
// const findEvenNumbers = (array) => {
//     const evenArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             evenArray.push(array[i])
//         }
//     }
//     return evenArray
// }

// Test
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // Devrait retourner [2, 4, 6]
// console.log(findEvenNumbers([7, 8, 9, 10, 11])); // Devrait retourner [8, 10]

// ou
// const findEvenNumbers = (array) => {
//   const newArr=[]
//   for(number of array){
//     if(number % 2===0){
//        newArr.push(number)
//     }
//   }
//   return newArr
// }
// // Test
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // Devrait retourner [2, 4, 6]
// console.log(findEvenNumbers([7, 8, 9, 10, 11])); // Devrait retourner [8, 10]

// Exercice 2 : Convertir en majuscules
// Énoncé : Écris une fonction convertToUpperCase qui prend un tableau de chaînes de caractères et retourne un nouveau tableau avec toutes les chaînes en majuscules.


// Exercice 2 : Convertir en majuscules
// Exercice 2 : Convertir en majuscules
// Énoncé : Écris une fonction convertToUpperCase qui prend un tableau de chaînes de caractères et retourne un nouveau tableau avec toutes les chaînes en majuscules.


// Exercice 2 : Convertir en majuscules
// const convertToUpperCase = (array) => {
//   let upper =[]
//     for (const word of array){
//    const transform= word.toUpperCase()
//    console.log(transform)
//       upper.push(transform)
//     }
//   return upper
// }
//ou
// const convertToUpperCase = (array) => {
//     const upper = []
//     for (let i = 0; i < array.length; i++) {
//         const transform = array[i].toUpperCase()
//         console.log(transform)
//         upper.push(transform)
//     }
//     return upper
// }
// // Test
// console.log(convertToUpperCase(['hello', 'world'])); // Devrait retourner ['HELLO', 'WORLD']
// console.log(convertToUpperCase(['javaScript', 'is', 'fun'])); // Devrait retourner ['JAVASCRIPT', ...

// Exercice 3 : Filtrer les éléments supérieurs à un nombre donné
// Énoncé : Crée une fonction filterGreaterThan qui prend un tableau de nombres et un nombre seuil, et retourne un tableau contenant seulement les nombres du tableau d'origine qui sont supérieurs au seuil.


// Exercice 3 : Filtrer les éléments supérieurs à un nombre donné
// const filterGreaterThan = (array, threshold) => {
//   const newArr=[]
//    for (const number of array){
//      if(number >threshold ){
//        newArr.push(number)
//      }
//    }
//   return newArr
// }
// ou
// const filterGreaterThan=(array,threshold )=>{
//   const newArr = []
//   for (let i =1; i<threshold;i++){
//     if(array[i]>threshold){
//       newArr.push(array[i])
//     }
//   }
//   return newArr
// }
// // Test
// console.log(filterGreaterThan([1, 5, 10, 15, 20], 10)); // Devrait retourner [15, 20]
// console.log(filterGreaterThan([3, 7, 2, 12, 9], 5)); // Devrait retourner [7, 12, 9]
// Exercice 3 : Vérifier si un tableau est trié
// Énoncé : Écris une fonction isSorted qui prend un tableau de nombres et retourne true si le tableau est trié en ordre croissant, sinon false.


const isSorted = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }
    return true

}


console.log(isSorted([1, 2, 3, 4, 5])) // Devrait retourner true
console.log(isSorted([5, 3, 4, 2, 1]))// Devrait retourner false
