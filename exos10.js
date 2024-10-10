// Exercice :
// Écris une fonction reverseWords(str) qui prend une chaîne de caractères et renvoie une nouvelle chaîne où chaque mot est inversé, mais l'ordre des mots reste le même.

// reverseWords.js
const reverseWords = (str) => {
    return str.split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ');
}






console.log(reverseWords("Hello World")); // "olleH dlroW"
console.log(reverseWords("Coding is fun")); // "gnidoC si nuf"

// Écris une fonction findShortestWordLength(str) qui prend une chaîne de caractères et renvoie la longueur du mot le plus court dans cette chaîne.
const findShortestWordLength = (str) => {
    return str.split(' ').map((word) => word.split("").length).reduce((acc, curr) => acc < curr ? acc : curr)
}


// findShortestWordLength("The quick brown fox jumped over the lazy dog"); // 3
// findShortestWordLength("Hello world"); // 5
// console.log(findShortestWordLength("JavaScript is awesome")); // 2

module.exports = { reverseWords, findShortestWordLength };

// Convertir un nombre en tableau inversé de chiffres
// Étant donné un nombre aléatoire non négatif, vous devez renvoyer les chiffres de ce nombre dans un tableau dans l'ordre inverse.
function digitize(n) {
    return n.toString().split('').reverse().map(Number);
}

console.log(digitize(12345)); // [5, 4, 3, 2, 1]
console.log(digitize(9876543210)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(digitize(0)); // [0]

/*Pour cet exercice, tu dois analyser une chaîne de caractères d'éléments séparés par des espaces. Voici comment aborder la tâche :

Séparer les éléments : Transforme la chaîne de caractères en un tableau d'éléments en utilisant split(). Cela te permettra de vérifier chaque élément séparément.

Vérifier les caractères non numériques : Parcours le tableau pour vérifier que chaque élément est un nombre. Si un élément n'est pas un nombre, tu dois retourner 1 car cela signifie que l'entrée est invalide.

Trier les nombres : Si tous les éléments sont des nombres, assure-toi qu'ils sont triés dans l'ordre croissant. Il est important de vérifier que les nombres commencent à 1 et augmentent de 1 à chaque étape.

Vérifier les nombres manquants : Si la séquence n'est pas continue (c'est-à-dire s'il manque un ou plusieurs nombres), tu dois identifier et retourner le plus petit nombre manquant dans la séquence.

Cas sans erreur : Si la séquence est complète et sans erreurs (sans aucun nombre manquant et tout est numérique), retourne 0.

Tu peux utiliser des fonctions comme isNaN() pour vérifier si un élément est un nombre et sort() pour trier les éléments, tout en comparant avec l'indice pour t'assurer que la séquence est bien continue.*/
function findMissingNumber(sequence) {
    if (sequence == "") {
        return 0
    }
    sequence = sequence.split("")
    for (let i = 1; i < sequence.length; i++) {
        if (sequence.map(num => !isNaN(num))) {
            sequence.sort((a, b) => a - b)
        }
    }
    return sequence
}


console.log(findMissingNumber("1 2 3 4")); // 0
console.log(findMissingNumber("1 2 4 3")); // 0
console.log(findMissingNumber("1 2 a")); // 1
console.log(findMissingNumber("1 2 4")); // 3
console.log(findMissingNumber("1 5")); // 2

// function findMissingNumber(sequence){
//   if( sequence.length == 0 )
//     return 0;
//   sequence = sequence.split(' ').map(Number);
//   for( i = 1; i <= sequence.length; i++)
//     if( i != sequence[i-1] )
//       return i;
//   return 0;
// }

//   Enoncé :
// Objectif : Écrire une fonction pattern(n) qui renvoie un motif (pattern) constitué de lignes de chiffres, où chaque ligne contient des répétitions du chiffre correspondant à la ligne. Le motif doit avoir n lignes, avec chaque ligne contenant exactement autant de répétitions du chiffre que le numéro de la ligne. Il ne doit pas y avoir de saut de ligne à la fin du motif.

// Règles :

// Si n est inférieur à 1, la fonction doit retourner une chaîne vide ("").
// Chaque ligne doit contenir le chiffre répété autant de fois que le numéro de la ligne.
// Il ne doit pas y avoir de saut de ligne à la fin du motif.
// Exemples :

// pattern(5) renverra :

// yaml
// Copier le code
// 1
// 22
// 333
// 4444
// 55555
// pattern(3) renverra :

// Copier le code
// 1
// 22
// 333
// pattern(0) renverra :

function pattern(n) {
    var output = "";  // On initialise une chaîne vide pour stocker le motif final.

    if (n < 1) {  // Si 'n' est inférieur à 1, la fonction renvoie immédiatement une chaîne vide.
        return "";
    }

    for (let i = 1; i <= n; i++) {  // Cette boucle parcourt chaque ligne du motif, de 1 à 'n'.
        for (let j = 0; j < i; j++) {  // Pour chaque ligne 'i', cette boucle ajoute 'i' à la chaîne 'output' autant de fois que le numéro de la ligne (c'est-à-dire 'i' fois).
            output += i;
        }
        if (i !== n) {  // Si 'i' n'est pas la dernière ligne, on ajoute un saut de ligne (\n) pour passer à la ligne suivante.
            output += "\n";// "\n" est un caractère spécial qui représente un saut de ligne. n'a rien a voir avec le n en parametre
        }
    }

    return output;  // On retourne le motif final sous forme de chaîne de caractères.
}
