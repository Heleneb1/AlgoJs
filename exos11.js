// function addLength(str) {
//     let newArr = []
//     strSplit = str.split(' ')
//     for (let i = 0; i < strSplit.length; i++) {
//         newArr.push(strSplit[i] + " " + strSplit[i].length)
//     }
//     return newArr
// }

//ou

// const addLength = (str) => str.split(' ').map((word) => word + " " + word.length)//on split la chaine de caractère et on map sur chaque élément pour ajouter la longueur de chaque mot


/*"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]*/
// console.log((addLength("apple ban")))
// console.log(addLength("you will win")); // ["you 3", "will 4", "win 3"]


// const encode=(str)=> {

//     let newStr= []
//     str = str.toLowerCase().split('')
//     for (let i = 0; i<str.length; i++){
//       if(isNaN(str[i])&& /^[a-zA-Z]$/.test(str[i])){
//      const result = str[i].charCodeAt(str[i]) -96
//         newStr.push(result)
//       } else {
//         newStr.push(str[i]);
//       }
//     }
//   return newStr.join("")
//   }
//ou
// const encode = (str) => {
//     return str.toLowerCase().replace(/[a-z]/g, (char) => char.charCodeAt(0) - 96);
// }
// console.log(encode('abc'))
// console.log(encode('codewars'))
// console.log(encode('abc-#@5'))

// encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
// encode('codewars') == '315452311819'
// encode('abc-#@5') == '123-#@5'

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// const unusedDigits = (...number) => {//...number permet de passer un nombre indéfini d'arguments

//   number = number.toString().split('')
//   const unused = []
//   const verify = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//   for (let i = 0; i < verify.length; i++) {//on parcourt le tableau verify
//     if (!number.includes(verify[i])) {//si le tableau number ne contient pas verify[i]
//       unused.push(verify[i])//
//     }
//   }
//   return unused.sort().join('')
// }
// console.log(unusedDigits(12, 34, 56, 78))//, "09"
// console.log(unusedDigits(2015, 8, 26))//, "3479"
// console.log(unusedDigits(276, 575))//, "013489"
// Write

// const validatePIN = (pin) => {
//   pin = pin.toString().split("")
//   console.log(pin)
//   //pin 4 chiffres ou 6 chiffres
//   const regex = /^\d+$/;//regex pour verifier si c'est un nombre
//   const pinSize = pin.length === 4 || pin.length === 6
//   if (pinSize && regex.test(pin.join(''))) {//on verifie si la taille du pin est 4 ou 6 et si c'est un

//     return true

//   } else {
//     return false
//   }

// }
// const validatePIN = (pin) => {
//   const pinSize = pin.length === 4 || pin.length === 6;
//   const regex = /^\d+$/;
//   return pinSize && regex.test(pin);
// }
// console.log(validatePIN("1234"))  //true
// console.log(validatePIN("12345"))//false
// console.log(validatePIN("a234"))//false
// console.log(validatePIN("123456"))//true
// console.log(validatePIN("1"))//false

// Given a sorted array of numbers, return the summary of its ranges.


// const summaryRanges = (nums) => {
//   const newArr = []
//   let start = nums[0]
//   let end = nums[0]
//   nums = [...new Set(nums)]//on enleve les doublons
//   console.log(nums)
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + 1 === nums[i + 1]) {//si le nombre suivant est égal à nums[i] + 1
//       end = nums[i + 1]
//     } else {
//       if (start === end) {
//         newArr.push(end.toString())
//       } else {

//         newArr.push(start !== nums[i] ? start + "->" + nums[i] : nums[i].toString());//si start est different de nums[i] on ajoute start + "->" + nums[i] sinon on ajoute nums[i]
//       }
//       start = nums[i + 1];

//     }

//   }
//   return newArr
// }




// console.log(summaryRanges([1, 2, 3, 4])) // ["1->4"]
// console.log(summaryRanges([1, 1, 1, 1, 1])) // ["1"]
// console.log(summaryRanges([0, 1, 2, 5, 6, 9])) // ["0->2", "5->6", "9"]
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7])) // ["0->7"]
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10])) // ["0->7", "9->10"]
// console.log(summaryRanges([-2, 0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12])) // ["-2", "0->7", "9->10", "12"]

// Vous devez créer une méthode « compoundArray » qui doit prendre en entrée deux tableaux int de longueurs différentes et renvoyer un tableau int avec les numéros des deux tableaux mélangés un par un. Si l'un des tableaux est plus long que l'autre, les éléments supplémentaires doivent être placés à la fin du tableau résultant.

// function compoundArray(a, b) {
//   const newArr = [];

//   // Calcule la longueur maximale entre les deux tableaux
//   const maxLength = Math.max(a.length, b.length);

//   for (let i = 0; i < maxLength; i++) {//on parcourt le tableau le plus long
//     // Vérifie si l'index existe dans le tableau a
//     if (i < a.length) {//si i est inferieur à la longueur de a
//       newArr.push(a[i]);
//     }
//     // Vérifie si l'index existe dans le tableau b
//     if (i < b.length) {
//       newArr.push(b[i]);
//     }
//   }

//   return newArr;
// }

// console.log(compoundArray([1, 2, 3, 4, 5, 6], [9, 8, 7, 6]))// [1, 9, 2, 8, 3, 7, 4, 6, 5, 6]

// Input - {1,2,3,4,5,6} and {9,8,7,6}
// Output - {1,9,2,8,3,7,4,6,5,6}

// Exercice : Fusion de Tableaux Alternés
// Objectif : Créer une fonction qui prend en entrée deux tableaux de nombres et renvoie un tableau fusionné en alternant les éléments des deux tableaux.

// Détails :

// Crée une fonction nommée mergeArrays qui accepte deux tableaux arr1 et arr2.

// La fonction doit renvoyer un nouveau tableau où les éléments de arr1 et arr2 sont mélangés de manière alternée.

// Si l'un des tableaux est plus long que l'autre, les éléments restants du tableau le plus long doivent être ajoutés à la fin du tableau fusionné.

// Voici quelques exemples d'entrées et de sorties attendues :

// mergeArrays([1, 2, 3], [4, 5, 6]) devrait renvoyer [1, 4, 2, 5, 3, 6].
// mergeArrays([1, 2], [3, 4, 5, 6]) devrait renvoyer [1, 3, 2, 4, 5, 6].
// mergeArrays([1, 2, 3, 7], [4, 5]) devrait renvoyer [1, 4, 2, 5, 3, 7].
// Conseils :

// Pense à utiliser une boucle pour itérer à travers les éléments des tableaux.
// Utilise la méthode Math.max() pour déterminer la longueur maximale à parcourir.
// Assure-toi de vérifier si l'index existe avant d'ajouter un élément d'un tableau.

// const mergeArrays = (a, b) => {
//   const newArr = []
//   const maxLength = Math.max(a.length, b.length)
//   for (let i = 0; i < maxLength; i++) {
//     if (i < a.length) {
//       newArr.push(a[i])
//     }
//     if (i < b.length) {
//       newArr.push(b[i])
//     }
//   }
//   return newArr
// }

// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 4, 2, 5, 3, 6]
// console.log(mergeArrays([1, 2], [3, 4, 5, 6])); // [1, 3, 2, 4, 5, 6]
// console.log(mergeArrays([1, 2, 3, 7], [4, 5])); // [1, 4, 2, 5, 3, 7]
// console.log(mergeArrays([], [1, 2, 3])); // [1, 2, 3]
// console.log(mergeArrays([1, 2, 3], [])); // [1, 2, 3]
// console.log(mergeArrays([], [])); // []

// Exercice : Compter les voyelles
// Écris une fonction countVowels qui prend en entrée une chaîne de caractères et retourne le nombre total de voyelles (a, e, i, o, u) dans cette chaîne, en ignorant la casse (majuscules ou minuscules).
// const countVowels = (string) => {
//   const vowels = ["a", "e", "i", "o", "u"]
//   let count = 0
//   string = string.toLowerCase().split('')
//   console.log(string)
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i])) { count++ }
//   }
//   return count
// }

// console.log(countVowels("Hello World")); // 3
// console.log(countVowels("JavaScript")); // 3
// console.log(countVowels("AEIOU")); // 5
// console.log(countVowels("xyz")); // 0
// console.log(countVowels("")); // 0



// Exercice : Compter les consonnes
// Énoncé : Écris une fonction countConsonants qui prend en entrée une chaîne de caractères et retourne le nombre total de consonnes dans cette chaîne. Ignore les espaces, les chiffres et les caractères spéciaux.
// const countConsonants = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"]
//   const regex = /[^aeiou\s\d\W]/i
//   // [^aeiou] : Correspond à tout caractère qui n'est pas une voyelle.
//   // \s : Ignore les espaces.
//   // \d : Ignore les chiffres.
//   // \W : Ignore les caractères spéciaux (non-alphanumériques).
//   // i : Option "case-insensitive" pour que la regex fonctionne avec des lettres majuscules et minuscules.

//   let count = 0
//   newArr = []
//   str = str.toLowerCase().split('')
//   console.log(str)
//   for (let i = 0; i < str.length; i++)
//     // if(!vowels.includes(str[i])){
//     //   count ++
//     // }
//     if (regex.test(str[i])) {
//       count++
//     }
//   return count
// }
// const countConsonants = (str) => {
//   const regex = /[^aeiou\s\d\W]/gi; // G pour global, I pour insensible à la casse
//   const matches = str.match(regex);
//   return matches ? matches.length : 0;
// }


// console.log(countConsonants("Hello World!")); // 7
// console.log(countConsonants("OpenAI is great!")); // 6
// console.log(countConsonants("12345")); // 0
// console.log(countConsonants("")); // 0

// Exercice : Compter les voyelles
// Énoncé : Écris une fonction countVowels qui prend en entrée une chaîne de caractères et retourne le nombre total de voyelles (a, e, i, o, u) dans cette chaîne. Ignore les espaces, les chiffres et les caractères spéciaux.

// const countVowels = (str) => {
//   const regex = /[aeiou]/gi
//   const matches = str.match(regex)
//   console.log(matches)
//   return matches ? matches.length : 0;
// }

// console.log(countVowels("Hello World!")); // 3
// console.log(countVowels("OpenAI is amazing!")); // 8
// console.log(countVowels("12345")); // 0
// console.log(countVowels("")); // 0

// function remove(str, what) {
//   str = str.split(''); // Conversion de la chaîne en tableau
//   let newStr = []; // Pour stocker le nouveau tableau
//   console.log(str);

//   for (let i = 0; i < str.length; i++) {
//     if (what[str[i]] > 0) {
//       what[str[i]]--; // Décrémente le nombre d'occurrences restantes
//     } else {
//       newStr.push(str[i]); // Ajoute à newStr si le caractère n'a plus besoin d'être supprimé
//     }
//   }

//   return newStr.join(''); // Retourne la nouvelle chaîne
// }


// console.log(remove('this is a string', {'t': 1, 'i': 2})); // "hs s a string"
// console.log(remove('hello world', {'x': 5, 'i': 2})); // "hello world"
// console.log(remove('apples and bananas', {'a': 50, 'n': 1})); // "pples d bnns"
// console.log(remove('banana split', {'b': 1, 'a': 2, 'n': 2})); // "ana split"
// console.log(remove('abcdefgh', {'a': 1, 'e': 1, 'g': 1})); // "bcdfh"
// console.log(remove('abcabcabc', {'a': 3, 'b': 1})); // "cc"
// console.log(remove('test case', {'t': 2, 'e': 1})); // "s case"


// Pouvez-vous trouver l’aiguille dans la botte de foin ?

// Écrivez une fonction findNeedle()qui prend un arrayplein de déchets mais qui en contient un"needle"

// Une fois que votre fonction a trouvé l'aiguille, elle doit renvoyer un message (sous forme de chaîne) indiquant :

// "found the needle at position "en plus indexil a trouvé l'aiguille, donc :

// Exemple (Entrée --> Sortie)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "--> "found the needle at position 5"
// function findNeedle(haystack) {
//   const newArr= []
//  let result
//   for (let i=0; i<haystack.length; i++){
// result = haystack.indexOf("needle")
//     // if(haystack.indexOf("needle")){
//     //   haystack[i]
//     // }
//   }
//  return `found the needle at position`+" "+ result

// }
//ou
// const findNeedle = (haystack) => {
//   const result = haystack.indexOf("needle");
//   return `found the needle at position ${result}`;
// }
//ou
// const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf("needle")}`

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
// Les exemples ci-dessous vous montrent comment écrire une fonction accum:

// Exemples :
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// const accum=(s) =>{
// 	return s.split('').map((letter,index) => letter.toUpperCase()+Array(index+1).join(letter.toLowerCase())).join('-');
// }
// console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"

// const filledArray = Array(3).fill(0);
// console.log(filledArray); // [0, 0, 0]
//
// const filledArray = Array(3).fill().map((_, index) => index + 1);
// console.log(filledArray); // [1, 2, 3]
//ou
// const filledArray = [];
// for (let i = 0; i < 3; i++) {
//     filledArray.push(i + 1); // Remplir avec 1, 2, 3
// }
// console.log(filledArray); // [1, 2, 3]



