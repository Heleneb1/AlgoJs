// 1. Vérifier un Palindrome
// Écris une fonction isPalindrome(str) qui prend une chaîne de caractères et retourne true si c'est un palindrome (se lit de la même manière en avant et en arrière) et false sinon. Ignore la casse et les espaces.
// const isPalindrome = (str) => {
//     let cleanedStr = '';

//     // Étape 1 : Conserver uniquement les caractères alphanumériques et convertir en minuscules
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i].toLowerCase();
//       if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
//         cleanedStr += char;
//       }
//     }

//     // Étape 2 : Comparer la chaîne nettoyée à sa version inversée
//     const reversedStr = cleanedStr.split('').reverse().join('');

//     return cleanedStr === reversedStr;
//   };

//ou
// const isPalindrom=(str)=>{
//     return str.replace(/[^\w]/g, '').toLowerCase().split("").reverse().join("") === str.replace(/[^\w]/g, '').toLowerCase().split("").join('')
//   }
// Recherche tous les caractères non alphanumériques dans la chaîne (ce qui exclut les lettres, les chiffres et le caractère _).
// Supprime ces caractères en les remplaçant par une chaîne vide.
// \w est une classe de caractères qui correspond à tous les caractères alphanumériques ainsi qu'au caractère de soulignement (_). Cela inclut les lettres majuscules et minuscules (A-Z, a-z), les chiffres (0-9) et le caractère _.
// ^ placé au début d'un ensemble de caractères (entre crochets []) est un opérateur de négation, ce qui signifie "tout sauf". Ainsi, [^\w] signifie tout ce qui n'est pas un caractère alphanumérique ou le caractère souligné.

//   console.log(isPalindrom("radar"))
//   console.log(isPalindrom("Elle"))
//   console.log(isPalindrom("Ai-buddy"))

//   console.log(isPalindrom("A Cuba, Anna a bu ca."))
// 2. Fusionner Deux Tableaux
// Écris une fonction mergeArrays(arr1, arr2) qui prend deux tableaux en entrée et retourne un tableau contenant tous les éléments des deux tableaux, sans doublons.

// const mergeArrays = (arr1, arr2) => {
//     const newArr = arr1.concat(arr2)
//     const noDouble = [...new Set(newArr)]
//     return noDouble

// }
//ou en simplififié
// const mergeArrays = (arr1, arr2) => {
//     return [... new Set(arr1.concat(arr2))]
// }
// console.log(mergeArrays([1, 2, 3, 5, "poisson"], [1, 2, 3, 5, 6, 7, 8, "poisson"]))
// 3. Multiplier les Nombres d'un Tableau
// Écris une fonction multiplyNumbers(arr, factor) qui prend un tableau de nombres et un facteur, et retourne un nouveau tableau avec chaque nombre multiplié par le facteur.

// const multiplyNumbers = (arr, factor) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * factor)
//     }
//     return result
// }
// ou
// const multiplyNumbers = (arr, factor) => {
//     return arr.map((num) => num * factor) //on mappe chaque élément du tableau et on le multiplie par le facteur Logique non?😉
// }


// console.log(multiplyNumbers([1, 5, 3, 9, 2], 5))//

// 4. Compter les Consonnes
// Écris une fonction countConsonants(str) qui prend une chaîne de caractères et retourne le nombre de consonnes présentes dans la chaîne.

// const countConsonants = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let count = 0;
//     let string = str.toLowerCase()
//     for (const letter of string) {
//         if (/[a-z]/.test(letter) && !vowels.includes(letter)) {//ici pour vérifier que letter est une lettre
//             count++
//         }
//     }
//     return count
// }
// console.log(countConsonants('heleneb est joie'))
// console.log(countConsonants('roots'))

// 5. Trouver le Moins Nombre
// Écris une fonction findMinNumber(arr) qui prend un tableau de nombres et retourne le plus petit nombre.


// const findMinNumber = (arr) => {
//     return Math.min(...arr)
// }
// console.log(findMinNumber([5, 3, 9, 2]))
//ou
// const findMinNumber = (arr) => {
//     let num = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] <= num)
//             num = arr[i]
//     }
//     return num
// }
// console.log(findMinNumber([5, 3, 9, 2]))

// 6. Inverser un Tableau
// Écris une fonction reverseArray(arr) qui prend un tableau et retourne un nouveau tableau contenant les mêmes éléments mais dans l'ordre inverse.

// const reverseArray = (arr) => {
//     return arr.slice().reverse()//créer une copie du tableau en utilisant slice()
// }
// console.log(reverseArray([1, 2, 3, 5, "poisson"]))
//ou
// const reverseArray = (arr) => {
//     const newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {

//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(reverseArray([1, 2, 3, 5, "poisson"]))
//TODO:revoir
// 7. Trouver les Nombres Primes
// Écris une fonction findPrimes(max) qui prend un nombre maximal et retourne un tableau contenant tous les nombres premiers jusqu'à ce nombre.
// const findMax = (maxNumber) => {
//     const prime = []

//     for (let i = 2; i < maxNumber; i++) {
//         let isPrime = true//On initialise isPrime à true pour chaque nombre i.
//         for (let j = 2; j < i; j++)//Cette condition vérifie si i est divisible par j sans reste (i % j === 0). Si c'est le cas, i n'est pas un nombre premier.
//             if (i % j === 0) {
//                 isPrime = false//i est divisible par un autre nombre, on change isPrime à false, indiquant que ce nombre n'est pas premier.
//                 break; // On sort de la boucle interne dès qu'on trouve un diviseur. Inutile de continuer à vérifier d'autres nombres, car i ne peut plus être un nombre premier.

//             }
//         if (isPrime) {
//             prime.push(i)
//         }
//     }
//     return prime
// }

// console.log((findMax(25)))



// 8. Générer une Liste de Carrés
// Écris une fonction generateSquares(n) qui prend un nombre n et retourne un tableau contenant les carrés des nombres de 1 à n.
// const generateSquares = (n) => {
//     let squares = []
//     for (let i = 1; i <= n; i++) {
//         squares.push(i * i)
//     }
//     return squares
// }

// console.log(generateSquares(6))

// 9. Compter les Mots
// Écris une fonction countWords(str) qui prend une chaîne de caractères et retourne le nombre de mots dans cette chaîne. Les mots sont séparés par des espaces.
// const countWords = (str) => {
//     return str.split(" ").length
// }
// 10. Remplacer les Voyelles
// Écris une fonction replaceVowels(str, char) qui prend une chaîne de caractères et un caractère, et remplace toutes les voyelles de la chaîne par ce caractère.
// const replaceVowels = (str, char) => {
//     const vowels = ["a", "e", "i", "o", "u"]
//     const string = str.split("")
//     for (let i = 0; i < string.length; i++) {

//         if (vowels.includes(string[i].toLowerCase())) {

//             string[i] = char
//         }
//     }
//     return string.join("")

// }

// console.log(replaceVowels('Le petit chat dort dans la chambre.', '*'));
// // Résultat attendu : "L* p*t*t ch*t d*rt d*ns l* ch*mbr*"

// console.log(replaceVowels('HELLO world', '#'));
// // Résultat attendu : "H#LL# w#rld"

// console.log(replaceVowels('Ai-buddy est génial!', '-'));
// // Résultat attendu : "---b-ddy -st gén--l!"

// 1. Trier un Tableau
// Écris une fonction sortArray(arr) qui prend un tableau de nombres et le retourne trié par ordre croissant.

// const sortArray = (arrNum) => {
//     return arrNum.sort((a, b) => a - b)
// }


// console.log(sortArray([-2, -10, 15, 5, 8, 2, 0, 1]))

// 2. Filtrer les Nombres Pairs
// Écris une fonction filterEvenNumbers(arr) qui prend un tableau de nombres et retourne un nouveau tableau contenant uniquement les nombres pairs.

// const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0)
// //ou
// const filterEvenNumbers = (arr) => {
//     let num = arr[0]
//     let evenArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenArr.push(arr[i])
//         }
//     }
//     return evenArr
// }

// console.log(filterEvenNumbers([-2, -10, 15, 5, 8, 2, 0, 1]))//[ -2, -10, 8, 2, 0 ]

// 3. Trouver la Longueur du Mot le Plus Long
// Écris une fonction longestWord(str) qui prend une phrase et retourne la longueur du mot le plus long dans cette phrase.
// 3. Trouver la Longueur du Mot le Plus Long
// Écris une fonction longestWord(str) qui prend une phrase et retourne la longueur du mot le plus long dans cette phrase.
// const longestWord = (str) => {

//     let string = str.replace(/[^\w]g/).toLowerCase().split(" ")
//     let longest = 0
//     console.log(string)
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].length > longest) {
//             longest = string[i].length
//         }
//     }
//     return longest
// }
// console.log(longestWord("Salut les petits, je vous aime"))

// 4. Calculer la Somme des Éléments d'un Tableau
// Écris une fonction sumArray(arr) qui prend un tableau de nombres et retourne la somme de ses éléments.



// const sumArray = (arr) => {
//     return arr.reduce((acc, curr) => acc + curr, 0)
// }

// console.log(sumArray([1, 2, 3, 4, 5]))//15

// 5. Trouver l'Indice d'un Élément
// Écris une fonction findIndex(arr, element) qui prend un tableau et un élément, et retourne l'indice de cet élément dans le tableau (ou -1 si l'élément n'existe pas).
// const findIndex = (arr, element) => arr.indexOf(element)

// //ou manuellement
// const findIndex = (arr, element) => {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(findIndex([10, 20, 30, 40, 50], 30)); // Devrait afficher 2
// console.log(findIndex(['apple', 'banana', 'orange'], 'banana')); // Devrait afficher 1
// console.log(findIndex([true, false, true], false)); // Devrait afficher 1
// console.log(findIndex([1, 2, 3, 4, 5], 6)); // Devrait afficher -1
// console.log(findIndex([], 'test')); // Devrait afficher -1

// 6. Vérifier si une Chaîne Contient un Mot
// Écris une fonction containsWord(str, word) qui prend une chaîne de caractères et un mot, et retourne true si la chaîne contient ce mot, false sinon.

// const containsWord=(str, word)=>{
//   // return str.toLowerCase().split(" ").filter((findStr)=>findStr===word)//retourne le mot
//   return str.includes(word)
// }
//ou
// const containsWord = (str, word) => {
//     str = str.split(' ')
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === word) {
//             return true
//         }
//     }
//     return false
// }

// console.log(containsWord("Salut les petits, je vous aime", "rien"))
// console.log(containsWord("Salut les petits, je vous aime", "aime"))
// 7. Calculer la Factorielle
// Écris une fonction factorial(n) qui prend un nombre n et retourne sa factorielle.
// 7. Calculer la Factorielle
// Écris une fonction factorial(n) qui prend un nombre n et retourne sa factorielle.
//     n != n×(n−1)×(n−2)×…×3×2×1

// const factorial = (n) => {
//     let result = 1
//     for (let i = 1; i <= n; i++) {
//         result *= i
//     }
//     return result
// }
// console.log(factorial(5))

// 8. Fusionner et Trier Deux Tableaux
// Écris une fonction mergeAndSort(arr1, arr2) qui prend deux tableaux, les fusionne, puis retourne le tableau fusionné trié.

// const mergeAndSort = (arr1, arr2) => {
//     return arr1.concat(arr2).sort((a, b) => a - b)
// }
// console.log(mergeAndSort([3, 1, 4], [2, 5, 0])); // Devrait afficher [0, 1, 2, 3, 4, 5]
// console.log(mergeAndSort([-1, -5, 3], [2, 0, 1])); // Devrait afficher [-5, -1, 0, 1, 2, 3]
// console.log(mergeAndSort([], [1, 2, 3])); // Devrait afficher [1, 2, 3]
// console.log(mergeAndSort([7, 8, 9], [])); // Devrait afficher [7, 8, 9]
// console.log(mergeAndSort([], [])); // Devrait afficher []
