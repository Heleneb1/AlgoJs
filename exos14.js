// // Exercice : Retirer les doublons
// // Écris une fonction qui prend un tableau de nombres en entrée et retourne un nouveau tableau sans les doublons, tout en préservant l'ordre d'apparition.

// const unique = (arr) => {
//     // return arr.filter((el, index) => arr.indexOf(el) === index)
//     return [...new Set(arr)]
// }

// console.log(unique([1, 2, 2, 3, 4, 4, 5])); // retourne [1, 2, 3, 4, 5]

// Exercice : Trouver l'élément qui apparaît une seule fois
// Tu as un tableau où tous les éléments apparaissent deux fois, sauf un seul élément qui apparaît une seule fois. Écris une fonction pour trouver cet élément unique.
// const findUnique = (arr) => {
//     let count = 0
//      for (let i = 0; i < arr.length; i++) {
//          if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {//si l'index de l'élément est égale à son dernier index dans le tableau
//             count = arr[i];//on retourne l'élément
//          }
//      }
//      return count;
//    };
const findUnique = (arr) => {
    return arr.find((num) => arr.filter((elem) => elem === num).length === 3);//on retourne l'élément qui n'a pas de doublon
}

console.log(findUnique([4, 3, 2, 4, 7, 3, 2, 2])); // retourne 1

// Exercice : Inverser un tableau
// Écris une fonction qui prend un tableau en entrée et renvoie un nouveau tableau contenant les éléments dans l'ordre inverse.
const reverseArray = (arr) => {
    // return arr.reverse();//inverse le tableau
    return [...arr].reverse(); // Copie le tableau et l'inverse
};

console.log(reverseArray([1, 2, 3, 4, 5])); // retourne [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // retourne ['c', 'b', 'a']


// Exercice : Compter les voyelles
// Description : Écris une fonction qui prend une chaîne de caractères en entrée et renvoie le nombre total de voyelles (a, e, i, o, u) dans cette chaîne, indépendamment de la casse (majuscules ou minuscules).
const countVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    str = str.toLowerCase().split("");

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
};
//ou
// const countVowels = (str) => {
//     const vowels = ["a", "e", "i", "o", "u"];
//     return str.toLowerCase().split("").reduce((count, char) => { //reduce accumule le nombre de voyelles en vérifiant si chaque caractère est une voyelle.
//       return vowels.includes(char) ? count + 1 : count;
//     }, 0);
//   };

console.log(countVowels("Hello World")); // retourne 3
console.log(countVowels("AEIOU")); // retourne 5
console.log(countVowels("xyz")); // retourne 0
// Indications
// Tu peux utiliser une boucle pour parcourir chaque caractère de la chaîne.
// Vérifie si chaque caractère est une voyelle.
// Pense à utiliser la méthode toLowerCase() pour ignorer la casse.

// Exercice : Vérifier un palindrome
// Description : Écris une fonction qui prend une chaîne de caractères en entrée et détermine si elle est un palindrome. Un palindrome est une chaîne qui se lit de la même façon en avant et en arrière (ignorer les espaces, la ponctuation et la casse).
const isPalindrome = (string) => {

    string = string.toLowerCase().split("").filter((char) => char.match(/[a-z]/));// match() renvoie un tableau contenant les correspondances trouvées, ou null si aucune correspondance n'a été trouvée.

    return string.join("") === string.reverse().join("");

};

console.log(isPalindrome("A man, a plan, a canal, Panama")); // retourne true
console.log(isPalindrome("Hello")); // retourne false
console.log(isPalindrome("Racecar")); // retourne true

// Enoncé:
// // Écris une fonction qui prend une chaîne de caractères et retourne le nombre de mots qu'elle contient. On considère qu'un mot est défini comme une séquence de caractères séparée par un ou plusieurs espaces.
const countWords = (str) => {
    const regex = /\s[.,!?]/g;//expression régulière pour les signes de ponctuation courants.
    return str.replace(regex, '').trim().split(/\s+/).filter(word => word !== "").length;
    //ou
    // return str.replace(/[.,!?]/g, '').split(/\s+/).filter(word => word !== "").length;  // Retire les signes de ponctuation courants.trim()

};
// Explication :
// trim() : supprime les espaces en début et fin de chaîne.
// split(/\s+/) : utilise une expression régulière pour diviser la chaîne par un ou plusieurs espaces.
// filter(word => word !== "") : retire les éléments vides qui pourraient apparaître à cause des espaces multiples.

console.log(countWords("Salut, comment ça va ?")); // retourne 4
console.log(countWords("   Un  autre    exemple   avec   des   espaces    ")); // retourne 6

// Exercice :
// Écris une fonction qui prend une chaîne de caractères et renvoie le nombre de fois que chaque lettre apparaît dans cette chaîne.

const countLetterOccurrences = (str) => {
    let charCount = {}; // Utilise un objet pour stocker les lettres et leurs occurrences
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // Récupère chaque caractère
        if (char !== " ") {
            // Ignore les espaces si nécessaire
            if (charCount[char]) {
                charCount[char]++; // Incrémente si la lettre existe déjà
            } else {
                charCount[char] = 1; // Initialise à 1 si c'est la première occurrence
            }
        }
    }
    return charCount;
};
//ou
// const countLetterOccurrences = (str) => {
//   let charCount = {}; // Toujours un objet pour stocker les occurrences
//   str.split('').forEach((char) => {
//     if (char !== ' ') { // Ignore les espaces si nécessaire
//       charCount[char] = (charCount[char] || 0) + 1; // Utilisation d'une syntaxe plus concise
//     }
//   });
//   return charCount;
// };

console.log(
    countLetterOccurrences(
        "Renvoie le nombre de fois que chaque lettre apparaît dans cette chaîne"
    )
);

// Écris une fonction qui prend un tableau de nombres et renvoie le plus grand produit possible de deux nombres adjacents dans le tableau.

const adjacentProduct = (numbers) => {
    let max = numbers[0] * numbers[1]
    for (let i = 0; i < numbers.length - 1; i++) {
        const product = numbers[i] * numbers[i + 1]
        if (product > max) {
            max = product
        }
    }

    return max
}


console.log(adjacentProduct([3, 6, -2, -5, 7, 3])) // doit renvoyer 21 (7 * 3)

// Écris une fonction qui prend une chaîne de caractères et renvoie un nouvel objet contenant le nombre d'occurrences de chaque mot dans la chaîne.

const wordCount = (string) => {
    let wordCount = [];
    string = string.toLowerCase().split(" ");
    console.log(string);
    for (let i = 0; i < string.length; i++) {
        let word = string[i];
        if (wordCount[word]) {// si le mot existe déjà dans le tableau wordCount on incrémente sa valeur
            wordCount[word]++;
        } else {
            wordCount[word] = 1;//sinon on initialise sa valeur à 1
        }
    }
    return wordCount;
};

console.log(wordCount("Bonjour tout le monde, bonjour à tous"));
// doit renvoyer { Bonjour: 2, tout: 1, le: 1, monde: 1, à: 1, tous: 1 }
// Écris une fonction qui prend un tableau de nombres et retourne le deuxième plus grand nombre dans le tableau.
const secondLargest = (arr) => {
    if (arr.length >= 2) {
        arr = [...new Set(arr)];
        arr = arr.sort((a, b) => b - a);
    } else {
        return null;
    }

    return arr[1];
};

console.log(secondLargest([3, 5, 7, 2, 8]));
// doit renvoyer 7
// Écris une fonction qui prend une chaîne de caractères et renvoie true si elle est un palindrome (c'est-à-dire qu'elle se lit de la même manière à l'envers et à l'endroit) et false sinon.

const isPalindromeAgain = (str) => {
    return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
};
console.log(isPalindromeAgain("madam"));
// doit renvoyer true
console.log(isPalindromeAgain("kayak"));
console.log(isPalindromeAgain("bonjour"));

// Écris une fonction qui prend une chaîne de caractères et renvoie true si elle est un palindrome (c'est-à-dire qu'elle se lit de la même manière à l'envers et à l'endroit) et false sinon.

const isPalindromeBis = (str) => {
    const cleanedStr = str
        .toLowerCase()
        .split("")
        .filter((char) => char.match(/[a-z]/))
        .join("");
    return cleanedStr === cleanedStr.split("").reverse().join("");
};

console.log(isPalindromeBis("madam")); // doit renvoyer true
console.log(isPalindromeBis("kayak")); // doit renvoyer true
console.log(isPalindromeBis("bonjour")); // doit renvoyer false
console.log(isPalindromeBis("A man, a plan, a canal, Panama")); // doit renvoyer true
// doit renvoyer false


// doit renvoyer false
// Exercice 1 : Trouver le nombre manquant Dans une liste d'entiers de 1 à n, un seul nombre est manquant. Écris une fonction pour trouver ce nombre manquant. Par exemple, dans la liste [1, 2, 4, 5], le nombre manquant est 3.

const missingNumber = (arr) => {
    for (let i = 1; i <= arr.length + 1; i++) {
        // console.log(arr.indexOf(i));
        if (arr.indexOf(i) === -1) {
            return i;
        }
    }
};
console.log(missingNumber([1, 2, 4, 5]));

const missingNumbers = (arr, n) => {
    let missingNums = [];
    for (let i = 1; i <= n; i++) {
        if (arr.indexOf(i) === -1) {
            missingNums.push(i);
        }
    }
    return missingNums;
};

console.log(missingNumbers([1, 2, 4, 5, 7, 8], 8)); // devrait renvoyer [3, 6]

// Exercice 2 : Inversion des mots Écris une fonction qui prend une chaîne de caractères comme entrée et retourne la chaîne avec les mots dans l'ordre inverse. Par exemple, "Je suis étudiant" devient "étudiant suis Je".

const yoda = (str) => str.split(" ").reverse().join(" ");

console.log(yoda("Je suis étudiant"));//devrait renvoyer "étudiant suis Je"

// Exercice 3 : Trouver les doublons Écris une fonction qui prend un tableau de nombres et retourne un nouveau tableau contenant seulement les nombres dupliqués. Par exemple, pour [1, 2, 3, 2, 4, 5, 5], elle doit retourner [2, 5].

const duplicate = (numbers) => {
    let duplik = [];
    let object = {};
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        console.log(number);
        if (object[number]) {
            object[number]++;
            if (object[number] === 2) {//si l'élément est dupliqué
                duplik.push(number);//on ajoute le nombre à duplik
            }
        } else {
            object[number] = 1;
        }
    }
    return duplik;
};

console.log(duplicate([1, 2, 3, 2, 4, 5, 5])); // doit renvoyer [2, 5]


// Exercice 4 : Anagrammes Écris une fonction qui vérifie si deux chaînes de caractères sont des anagrammes (mêmes lettres mais ordre différent). Par exemple, "listen" et "silent" sont des anagrammes.

const anagram = (str1, str2) => {
    // str1 = str1
    //     .split("")
    //     .sort()
    //     .join("");
    // str2 = str2
    //     .split("")
    //     .sort()//.sort((a, b) => a - b) n'est pas nécessaire pour trier des caractères alphabétiques. En effet, cette fonction de comparaison est utilisée pour trier des nombres
    //     .join("");
    // console.log(str1);
    // console.log(str2);
    // return str1 === str2;
    //ou
    return str1.split("").sort().join("") === str2.split("").sort().join("");//on compare les deux chaînes

};
console.log(anagram("listen", "silent")); // doit afficher true
console.log(anagram("hello", "world")); // doit afficher false

// Écris une fonction qui prend un tableau de nombres et renvoie true si le tableau est trié dans l'ordre croissant et false sinon.

// const isSorted = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;

// };
//ou
const isSorted = (arr) => {
    return arr.every((value, index) => index === 0 || value >= arr[index - 1]);//on vérifie si chaque élément est supérieur ou égal à l'élément précédent
};
//   Explication :
//   every : Cette méthode teste si tous les éléments du tableau passent le test fourni.
//   (value, index) : La fonction de rappel prend chaque élément (value) et son index (index).
//   index === 0 || value >= arr[index - 1] : Pour chaque élément, il vérifie s'il est supérieur ou égal à l'élément précédent (ou si c'est le premier élément).
console.log(isSorted([1, 2, 3, 4, 5])); // doit renvoyer true
console.log(isSorted([5, 3, 8, 1, 4])); // doit renvoyer false

// Exercice : Nombre premier
// Écris une fonction qui prend un nombre entier et renvoie true si ce nombre est un nombre premier et false sinon. Un nombre premier est un nombre supérieur à 1 qui n'a pas d'autres diviseurs que 1 et lui-même.

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {// Vérifie jusqu'à la racine carrée du nombre
        if (number % i === 0) {
            return false;//si le nombre est divisible par un autre nombre que 1 et lui-même on retourne false
        }
    }
    return true;//sinon on retourne true
};

console.log(isPrime(5)); // doit renvoyer true
console.log(isPrime(10)); // doit renvoyer false
console.log(isPrime(1)); // doit renvoyer false
console.log(isPrime(13)); // doit renvoyer true
