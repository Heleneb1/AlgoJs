// Exercice 6 : Trouver les nombres premiers
// Écris une fonction qui prend un nombre entier n et retourne tous les nombres premiers inférieurs ou égaux à n.
// const primeNumber = (number) => {
//     let primes = [];
//     if (number <= 1) {
//         return "Is not a prime number";
//     }
//     for (let i = 2; i <= number; i++) {
//         let isPrime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             primes.push(i);
//         }
//     }
//     return primes;
// };

const { co } = require("co");

// console.log(primeNumber(10)); // Entrée : 10
// console.log(primeNumber(1));  // Entrée : 1
const prime = (number) => {
    let primes = [];
    if (number <= 1) {
        return "Is not a prime number";
    }
    for (let i = 2; i <= number; i++) {
        // Inclure 'number' dans la vérification
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            // Vérifier jusqu'à la racine carrée de i
            if (i % j === 0) {
                isPrime = false;
                break; // On peut sortir de la boucle dès qu'on trouve un diviseur
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
};
console.log(prime(10)); // Entrée : 10
console.log(prime(1));

// Entrée : 10
// Sortie : [2, 3, 5, 7]

// Exercice 7 : Compter les voyelles
// Écris une fonction qui prend une chaîne de caractères et retourne le nombre de voyelles dans cette chaîne.
const countVowels = (string) => {
    let count = 0;
    let object = {};
    string = string.split("");
    const vowels = ["a", "e", "i", "o", "u", "é", "è", "ê", "ô", "û"];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (vowels.includes(char)) {
            count++;
            if (!object[char]) {
                object[char] = 0;
            }
            object[char]++;
        }
    }
    return [object, count];
};
console.log(countVowels("développeur"));

//ou
// const countVowels = (string) => {
//     // Utiliser une regex pour correspondre aux voyelles (y compris les accentuées)
//     const vowelsRegex = /[aeiouéèêôû]/gi; // 'g' pour global, 'i' pour ignorer la casse
//     const matches = string.match(vowelsRegex); // Trouver toutes les correspondances

//     // Compter les voyelles et créer l'objet
//     const object = {};
//     let count = 0;

//     if (matches) {
//         count = matches.length; // Le nombre total de voyelles
//         matches.forEach(char => {
//             if (!object[char]) {
//                 object[char] = 1; // Initialiser à 1 si c'est la première occurrence
//             } else {
//                 object[char]++; // Incrémenter si la voyelle est déjà dans l'objet
//             }
//         });
//     }

//     return [object, count]; // Retourner l'objet et le compteur total
// };

console.log(countVowels("développeur")); // Test avec une chaîne

// Entrée : "développeur"
// Sortie : 5

// Exercice 8 : Trouver les éléments uniques
// Écris une fonction qui prend un tableau et retourne un nouveau tableau contenant uniquement les éléments uniques (qui n'apparaissent qu'une fois dans le tableau).

// Entrée : [1, 2, 2, 3, 4, 4, 5]
// Sortie : [1, 3, 5]

// Exercice 9 : Palindrome
// Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (se lit de la même façon à l'endroit et à l'envers).

// Entrée : "kayak"
// Sortie : true

// Exercice 10 : Tri par ordre décroissant
// Écris une fonction qui prend un tableau de nombres et le retourne trié par ordre décroissant.

// Entrée : [5, 2, 9, 1, 5, 6]
// Sortie : [9, 6, 5, 5, 2, 1]

const hiddenPassword = (text) => {
    let hiddenText = "";
    for (let i = 0; i < text.length; i++) {
        hiddenText += "*";
    }
    return hiddenText;
};
console.log(hiddenPassword("Hello"));

// const hiddenPassword = (text) => {
//     return "*".repeat(text.length);
// }
console.log(hiddenPassword("Hello"));

let isHidden = true
const visiblePassword = (text) => {

    if (isHidden) {
        return hiddenPassword(text);
    } else {
        return text;
    }
}
console.log(visiblePassword("Hello"));

const togglePasswordVisibility = (text) => {
    isHidden = !isHidden;
    return visiblePassword(text);
}
console.log(togglePasswordVisibility("Hello")); // Affiche *****
console.log(togglePasswordVisibility("Hello")); // Affiche Hello
// Exercice 8 : Trouver les éléments uniques
// Écris une fonction qui prend un tableau et retourne un nouveau tableau contenant uniquement les éléments uniques (qui n'apparaissent qu'une fois dans le tableau).

// Entrée : [1, 2, 2, 3, 4, 4, 5]
// Sortie : [1, 3, 5]

const unique = (array) => {
    const newArr = [];
    array.forEach((element) => {
        if (array.indexOf(element) === array.lastIndexOf(element)) {
            newArr.push(element);
        }
    });
    return newArr;
};

console.log(unique([1, 2, 2, 3, 4, 4, 5]));



const uniqueElement = (array) => {
    let newArr = [];
    let object = {};

    for (let i = 0; i < array.length; i++) {
        let elem = array[i];
        if (!object[elem]) {//si l'élément n'existe pas dans l'objet
            object[elem] = 1;
        } else {
            object[elem]++;//incrémenter l'élément
        }

    }
    for (let elem in object) {//parcourir l'objet avec for in pour récupérer les clés
        if (object[elem] === 1) {//si l'élément est unique
            newArr.push(elem);
        }
    }
    return newArr;
};
console.log("uniqueElement :", uniqueElement([1, 2, 2, 3, 4, 4, 5]));//[1, 3, 5]

const voiture = {
    marque: "Toyota",  // "marque" est une clé, "Toyota" est sa valeur
    modele: "Corolla", // "modele" est une clé, "Corolla" est sa valeur
    annee: 2020        // "annee" est une clé, 2020 est sa valeur
};
console.log(voiture); // Affiche "Toyota"

// Exercice 9 : Palindrome
// Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (se lit de la même façon à l'endroit et à l'envers).

const isPalindrome = (string) => {
    // Convertir la chaîne en minuscules et la transformer en tableau
    string = string.toLowerCase().split("");

    // Faire une copie de string pour inverser
    const reverseStr = string.slice().reverse().join(""); // Utiliser slice() pour créer une copie

    // Comparer la chaîne inversée avec la chaîne originale
    return reverseStr === string.join("");
};

console.log(isPalindrome("Kayak")); // Affiche true
console.log(isPalindrome("Bonjour")); // Affiche false

const isPalindrome2 = (string) => {
    // Convertir la chaîne en minuscules et supprimer les espaces
    const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Comparer la chaîne nettoyée avec sa version inversée
    return cleanedString === cleanedString.split("").reverse().join("");
};

console.log(isPalindrome2("Kayak")); // Affiche true
console.log(isPalindrome2("Bonjour")); // Affiche false
console.log(isPalindrome2("A man, a plan, a canal, Panama!")); // Affiche true


// L'expression régulière (/[^a-z0-9]/g, "") est utilisée pour filtrer des caractères dans une chaîne de caractères. Voici une explication détaillée de chaque partie :

// 1. /.../ :
// Ceci indique que c'est une expression régulière en JavaScript. Les barres obliques (slashes) délimitent le début et la fin de l'expression.

// 2. [^a-z0-9] :
// ^ : Dans ce contexte, le caret (^) à l'intérieur des crochets ([]) signifie "n'importe quel caractère qui n'est pas".
// a-z : Cela représente toutes les lettres minuscules de l'alphabet anglais, de a à z.
// 0-9 : Cela représente tous les chiffres de 0 à 9.
// Ainsi, [^a-z0-9] signifie "tous les caractères qui ne sont pas des lettres minuscules ou des chiffres".

// 3. g :
// C'est un modificateur qui signifie "global". Cela indique que la recherche doit continuer à travers toute la chaîne et pas seulement s'arrêter à la première correspondance. Sans ce modificateur, la recherche se ferait uniquement sur la première occurrence trouvée.
// 4. "" (la chaîne vide) :
// C'est la chaîne de remplacement. Dans le contexte de la méthode replace(), cela signifie que tous les caractères correspondants trouvés par l'expression régulière seront remplacés par rien (c'est-à-dire qu'ils seront supprimés).

// Exercice 10 : Tri par ordre décroissant
// Écris une fonction qui prend un tableau de nombres et le retourne trié par ordre décroissant.
const sortArr = (array) => array.sort((a, b) => b - a);

console.log(sortArr([5, 2, 9, 1, 5, 6]));

// Entrée : [5, 2, 9, 1, 5, 6]
// Sortie : [9, 6, 5, 5, 2, 1]
