// #Obtenez les moyennes de ces nombres

// Écrivez une méthode qui obtient un tableau de nombres entiers et renvoie un tableau des moyennes de chaque nombre entier et de son suiveur, s'il y en a un.
// Si le tableau contient 0 ou 1 valeurs ou est nul, votre méthode doit renvoyer un tableau vide.

// const averages = (numbers) => {
//     const newArr = []
//     let result = 0
//     if (numbers <= 1) return newArr
//     for (let i = 0; i < numbers.length - 1; i++) {// -1 pour ne pas dépasser la longueur du tableau
//         result = (numbers[i] + numbers[i + 1]) / 2
//         newArr.push(result)
//     }
//     return newArr
// }
// console.log(averages([1, 3, 5, 1, -10]));// [ 2, 4, 3, -4.5]
// console.log(averages([]));
// Étant donné une chaîne de chiffres, vous devez remplacer tout chiffre inférieur à 5 par « 0 » et tout chiffre supérieur ou égal à 5 par « 1 ». Renvoyer la chaîne résultante.

// // Remarque : l'entrée ne sera jamais une chaîne vide
// const fakeBin = (str) => {
//     str = str.split('')
//     const newArr = []

//     for (let i = 0; i < str.length; i++) {
//         if (Number(str[i]) < 5) {
//             str[i] = '0'
//             newArr.push(str[i])
//         }
//         else {
//             str[i] = '1'
//             newArr.push(str[i])
//         }
//     }
//     return newArr.join('')

// }
// //ou
// // const fakeBin = (str) => {
// //     return str.split('').map(n => n < 5 ? 0 : 1).join('')
// // }
// console.log((fakeBin('45385593107843568')))//, '01011110001100111'
// console.log((fakeBin('509321967506747'))); //, '101000111101101'
// console.log(fakeBin('366058562030849490134388085'));//, '011011110000101010000011011

// Écrivez une méthode qui obtiendra un tableau d'entiers en paramètre et traitera chaque nombre de ce tableau.

// Renvoie un nouveau tableau en traitant chaque nombre du tableau d'entrée comme ceci :

// Si le nombre a une racine carrée entière, prenez-la, sinon mettez le nombre au carré.

// function squareOrSquareRoot(array) {
//     return array.map((num) => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : Math.pow(num, 2))//Math.pow(num, 2) = num*num
// }
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))// [2,9,3,49,4,1]

//Supprimez n points d'exclamation dans la phrase de gauche à droite. n , est un entier positif.
// const remove = (s, n) => {
//     let arr = s.split('')
//     for (let i = 0; i < n; i++) {
//         if (arr.includes('!')) {//si le tableau contient !}
//             arr.splice(arr.indexOf('!'), 1)//supprimer le premier ! trouvé dans le tableau
//         }
//     }
//     return arr.join('')

// }
// console.log(remove("Hi!", 100))// "Hi"
// console.log(remove("Hi!!!", 1))// "Hi!!"
// console.log(remove("Hi!!!", 100)) // "Hi"
// console.log(remove("!Hi", 1))// "Hi"
// console.log(remove("!Hi!", 1)) // "Hi!"
// console.log(remove("!Hi!", 100))// "Hi"
// console.log(remove("!!!Hi !!hi!!! !hi", 1)) // "!!Hi !!hi!!! !hi"
// console.log(remove("!!!Hi !!hi!!! !hi", 3)) // "Hi !!hi!!! !hi"
// console.log(remove("!!!Hi !!hi!!! !hi", 5)) // "Hi hi!!! !hi"
// console.log(remove("!!!Hi !!hi!!! !hi", 100)) // "Hi hi hi"remove("Hi!",1)

// Lorsqu'une lettre vous est fournie, retournez sa position dans l'alphabet.

// Entrée :: "a"

// Sortie :: "Position de l'alphabet : 1"



// function position(letter) {
//     return `Position of alphabet: ${letter.charCodeAt() - 96}`
// }

// console.log(position('a'))//1
// console.log(position('b'))//2
// console.log(position('c'))//3
// console.log(position('z'))//26

//Given a string str, reverse it and omit all non-alphabetic characters.
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// const reverseLetter = (str) => {
//     const regex = /^[a-z]/i
//     return str.split("").filter(char => regex.test(char)).reverse().join('')
// }

// console.log(reverseLetter("krishan")); // "nahsirk"
// console.log(reverseLetter("ultr53o?n")); // "nortlu"
// console.log(reverseLetter("ab23c")); // "cba"
// Trier un tableau par valeur et index
// Votre tâche consiste à trier un tableau de nombres entiers par le produit de la valeur et de l'index des positions.

// Pour le tri, l'index commence à 1, PAS à 0 !
// Le tri doit être croissant.
// Le tableau ne sera jamais nul et contiendra toujours des nombres.

// Exemple :

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5



// Amusez-vous à le coder et n'oubliez pas de voter et de classer ce kata ! :-)

// J'ai aussi créé d'autres katas. Jetez un oeil si vous avez aimé ce kata !
// const sortByValueAndIndex = (array) => {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         let product = array[i] * (i + 1);//index commence à 1
//         newArr.push([array[i], product])

//     }
//     // Trier newArr par le produit (deuxième élément de chaque paire) et retourner les premiers éléments de chaque paire
//     newArr.sort((a, b) => a[1] - b[1]);//tri par valeur et index
//     return newArr.map((num) => num[0])
// };// Tests
// console.log(sortByValueAndIndex([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(sortByValueAndIndex([23, 2, 3, 4, 5])); // [2, 3, 4, 23, 5]
// console.log(sortByValueAndIndex([26, 2, 3, 4, 5])); // [2, 3, 4, 5, 26]
// console.log(sortByValueAndIndex([9, 5, 1, 4, 3])); // [1, 9, 5, 3, 4]

// function sumStrings(a, b) {
//     return ((a, b) => (Number(a) + Number(b)).toString())(a, b)//convertir les deux chaînes en nombre, les additionner et les convertir en chaîne (a, b)a la fin
// }
// console.log(sumStrings('1', '2')) // => '3'
//ou pour gerer les grand nombres on utilise BigInt
// function sumStrings(a,b) {
//     return (BigInt(a) + BigInt(b)).toString();
//   }
// 

// La fonction RVB est incomplète. Complétez-la de sorte que la transmission de valeurs décimales RVB génère une représentation hexadécimale. Les valeurs décimales valides pour RVB sont comprises entre 0 et 255. Toutes les valeurs qui se situent en dehors de cette plage doivent être arrondies à la valeur valide la plus proche.

// Remarque : votre réponse doit toujours comporter 6 caractères, le raccourci à 3 caractères ne fonctionnera pas ici.

// function rgb(r, g, b) {
//     // Fonction pour limiter les valeurs entre 0 et 255
//     function toHex(value) {
//         // Limiter la valeur entre 0 et 255
//         // Compare 'value' avec 255 et stocke la plus petite des deux dans 'min'.
//         // Si 'value' est plus grand que 255, 'min' prendra la valeur de 255.
//         // Sinon, 'min' prendra la valeur de 'value'.
//         let min = Math.min(255, value);

//         // Compare 'min' avec 0 et stocke la plus grande des deux dans 'value'.
//         // Si 'min' est plus petit que 0, 'value' prendra la valeur de 0.
//         // Sinon, 'value' prendra la valeur de 'min'.
//         value = Math.max(0, min);

//         // Convertir en hexadécimal et ajouter un zéro devant si nécessaire
//         let hex = value.toString(16).toUpperCase();
//         return hex.length === 1 ? '0' + hex : hex;
//     }

//     // Assembler les valeurs pour le rouge, le vert et le bleu
//     return toHex(r) + toHex(g) + toHex(b);
// }

// console.log(rgb(0, 0, 0)); // '000000'
// console.log(rgb(0, 0, -20)); //, '000000'
// console.log(rgb(300, 255, 255)); // 'FFFFFF'
// console.log(rgb(173, 255, 47)); //ADFF2F

function add(n) {

    for (let i = 0; i < n; i++) {
        if (n <= n[0]) {
            return n[0];
        } else if (n > n[0] && n[i] < n[i + 1]) {
            return n.reduce((a, b) => a + b);
        }
    }
}
console.log(add(1)()); // 1
console.log(add(1)(2)); // 3
console.log(add(1)(2)(3)); // 6
console.log(add(1)(2)(3)(4)); // 10
console.log(add(1)(2)(3)(4)(5)); // 15
console.log(add(5)(-2)(3)); // 6 (5 - 2 + 3)
console.log(add(10)(20)(30)(-5)); // 55 (10 + 20 + 30 - 5)
