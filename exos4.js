// Exercice 1 : Remplacer les voyelles Écris une fonction replaceVowels qui prend une chaîne de caractères et retourne une nouvelle chaîne où toutes les voyelles sont remplacées par un symbole spécifique (par exemple '*').


// const replaceVowels = (str) => {
//   // Ton code ici
// }

// const replaceVowels = (str) => {
//     const replaceArr = []
//     const vowels = ["a", "e", "i", "o", "u"]
//     const letter = str.split("")

//     for (const elem of letter) {
//         (vowels.includes(elem) ?
//             replaceArr.push("*") : replaceArr.push(elem))


//     }

//     return replaceArr.join("")
// }
// ou
// const replaceVowels = (str) => {
//     const replaceArr = []
//     const vowels = ["a", "e", "i", "o", "u"]
//     const letter = str.split("")
//     for (let i = 0; i < letter.length; i++) {
//         vowels.includes(letter[i]) ? replaceArr.push("*") : replaceArr.push(letter[i])
//     }
//     return replaceArr.join("")
// }
//ou
// const replaceVowels = (str) => {
//     return str.replace(/[aeiou]/gi, '*'); // Remplace toutes les voyelles par '*'
// }


// // Test
// console.log(replaceVowels("hello")); // Devrait retourner "h*ll*"
// console.log(replaceVowels("javascript")); // Devrait retourner "j*v*scr*pt"
// console.log(replaceVowels("aeiou")); // Devrait retourner "*****"




// Exercice 2 : Filtrer les éléments supérieurs à une valeur Crée une fonction filterGreaterThan qui prend un tableau de nombres et une valeur, puis retourne un nouveau tableau avec uniquement les nombres supérieurs à cette valeur.


// const filterGreaterThan = (array, value) => {
//   const largestThan =[]
//     for(let i = 0; i<array.length; i++){
//       if(array[i]>value){
//         largestThan.push(array[i])
//       }
//     }
//   return largestThan
// }
// const filterGreaterThan = (array, value) => {
//     return array.filter(num => num > value); // Filtre les nombres supérieurs à la valeur donnée
// }
// // Test
// console.log(filterGreaterThan([1, 5, 10, 20], 10)); // Devrait retourner [20]
// console.log(filterGreaterThan([30, 15, 5, 50, 8], 10)); // Devrait retourner [30, 15, 50]
// console.log(filterGreaterThan([1, 2, 3, 4], 5)); // Devrait retourner []


// const countChar = (str, char) => {
//     const array = str.split('')
//     let count = 0
//     const vowels = ["a", "e", "i", "o", "u"]
//     if (array.includes(char)) {
//         const result = array.filter(elem => elem == char).length
//         // console.log(result)
//         return result
//     }

// }
//ou
// il existe une méthode plus simple et concise pour compter les occurrences d'un caractère dans une chaîne de caractères. Tu peux utiliser la méthode split combinée avec length, sans avoir besoin de la condition if. Voici comment :


// const countChar = (str, char) => {
//   return str.split(char).length - 1;
// }
//["mi", "", "", "ippi"]
//En comptant les segments, tu vois qu'il y a trois "", ce qui signifie qu'il y a quatre occurrences de 's' dans "mississippi". Donc, pour avoir le bon nombre d'occurrences, tu fais segments.length - 1.
// Test
// console.log(countChar("hello", 'l')); // Devrait retourner 2
// console.log(countChar("javascript", 'a')); // Devrait retourner 2
// console.log(countChar("mississippi", 's')); // Devrait retourner 4
// Exercice 1 : Inverser une chaîne
// Écris une fonction reverseString qui prend une chaîne de caractères et retourne cette chaîne inversée.
// const reverseString=(string)=>{
//   const wordArr= string.split("")
//    return wordArr.reverse().join('')
// }
// const reverseString = (string) => string.split("").reverse().join("");

// console.log(reverseString("helene"))
// Exercice 2 : Trouver les nombres uniques
// Crée une fonction findUnique qui prend un tableau de nombres et retourne un nouveau tableau contenant uniquement les nombres qui apparaissent une seule fois dans le tableau d'origine.
// const findUnique = (array) => {
//     return [...new Set(array)]
// }
//ou
// const findUnique=(array)=>{
//  let newArr =[]
//  for(let i=0; i<array.length; i++){
//    if(!newArr.includes(array[i])){
//      newArr.push(array[i])
//    }
//  }
//   return newArr
// }
//ou
// const findUnique=(array)=>{
//  let newArr =[]
// for(const elem of array){
//   if(!newArr.includes(elem)){
//     newArr.push(elem)
//   }
// }
//   return newArr
// }
// console.log(findUnique(["1", "15", "14", "1", "15", "1", "14", "17"]))
// Exercice 3 : Compter les mots
// Écris une fonction countWords qui prend une chaîne de caractères et retourne le nombre de mots dans cette chaîne. Considère qu'un mot est défini comme une séquence de caractères séparés par des espaces.

// const countWords=(string)=>{
//   return string.split("").length
// }
// console.log(countWords("helene"))//retourne 6


// Écrivez une fonction qui prend une chaîne d'un ou plusieurs mots et renvoie la même chaîne, mais avec tous les mots qui ont cinq lettres ou plus inversés (tout comme le nom de ce Kata). Les chaînes transmises seront constituées uniquement de lettres et d'espaces. Les espaces ne seront inclus que lorsque plusieurs mots sont présents.


// function spinWords(string) {
//     let words = string.split(" ")
//     console.log(words)
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length >= 5) {
//             const inverse = words[i].split('').reverse().join("")
//             words[i] = inverse
//         }
//     }
//     return words.join(' ')
// }
// console.log(spinWords("Hey fellow warriors"))  //--> "Hey wollef sroirraw"
// console.log(spinWords("This is a test"))     //  --> "This is a test"
// console.log(spinWords("This is another test"))// --> "This is rehtona test"

// // Étant donné une chaîne de mots, vous devez trouver le mot avec le score le plus élevé.
// // Chaque lettre d'un mot rapporte des points en fonction de sa position dans l'alphabet : a = 1, b = 2, c = 3etc.
// // Par exemple, le score de abadest 8(1 + 2 + 1 + 4).
// // Vous devez renvoyer le mot ayant le score le plus élevé sous forme de chaîne.
// // Si deux mots ont le même score, renvoyez le mot qui apparaît le plus tôt dans la chaîne d'origine.
// // Toutes les lettres seront en minuscules et toutes les entrées seront valides

// function high(x) {
//     const word = x.split(" ");
//     console.log(word)
//     let maxScore = 0
//     let highestWord = "";
//     for (let i = 0; i < word.length; i++) {
//         let score = 0
//         for (let j = 0; j < word[i].length; j++) {
//             const charValue = word[i].charCodeAt(j) - 96 //a est 97 en ASCII donc on soustrait 96
//             console.log(charValue)
//             score += charValue;
//         }
//         if (score > maxScore) {
//             maxScore = score;
//             highestWord = word[i];
//         }

//     }
//     return highestWord;
// }



// // Tests
// console.log(high('man i need a taxi up to ubud')); // Devrait retourner 'taxi'
// console.log(high('what time are we climbing up the volcano')); // Devrait retourner 'volcano'
// console.log(high('take me to semynak')); // Devrait retourner 'semynak'
// console.log(high('aa b')); // Devrait retourner 'aa'
// console.log(high('b aa')); // Devrait retourner 'b'
// console.log(high('bb d')); // Devrait retourner 'bb'
// console.log(high('d bb')); // Devrait retourner 'd'
// console.log(high('aaa b')); // Devrait retourner 'aaa'

// function pigIt(str) {
//     let transform = [];
//     let splitStr = str.split(' '); // Divise la chaîne en mots

//     for (let word of splitStr) {
//         if (/^[a-zA-Z]+$/.test(word)) { // Vérifie si le mot ne contient que des lettres
//             // Transforme le mot
//             let firstLetter = word.charAt(0); // Prend la première lettre
//             let restOfWord = word.slice(1); // Prend le reste du mot
//             transform.push(restOfWord + firstLetter + "ay"); // Ajoute le mot transformé
//         } else {
//             transform.push(word); // Si ce n'est pas un mot, ajoute le mot tel quel
//         }
//     }

//     return transform.join(' '); // Joint les mots transformés en une seule chaîne
// }

// // Tests
// console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
// console.log(pigIt('Hello world !'));     // elloHay orldway !
// console.log(pigIt('This is my string')); // hisTay siay ymay tringsay

// // Tests
// console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
// console.log(pigIt('Hello world !'));     // elloHay orldway !
// console.log(pigIt('This is my string')); // hisTay siay ymay tringsay


// Écrivez une fonction qui prend une seule chaîne non vide contenant uniquement des lettres ascii minuscules et majuscules ( word) comme argument et renvoie une liste ordonnée contenant les indices de toutes les lettres majuscules (majuscules) de la chaîne.

// const capitals =  (word)=> {
//     const arr =[]
//   for(let i =0;i< word.length; i++){

//   }
//     return arr
//   };
//   console.log(capitals("CodEWaRs"))

// 


