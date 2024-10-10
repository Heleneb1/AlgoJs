// Dans cet exercice, tu dois créer un programme qui prend deux paramètres :

// integer : la base dont tu veux trouver les multiples.
// limit : la valeur maximale jusqu'à laquelle tu dois chercher les multiples.
// Ce que tu dois faire :
// Trouver les multiples : Un multiple de integer est simplement un nombre qui peut être obtenu en multipliant integer par un autre nombre entier (comme 1, 2, 3, etc.).

// Par exemple, pour integer = 2, les multiples de 2 sont 2, 4, 6, 8, etc.

// Arrêter à la limite : Tu dois trouver tous les multiples de integer qui sont inférieurs ou égaux à limit. Si la limit elle-même est un multiple de integer, elle doit être incluse dans le résultat.

// Étapes à suivre :
// Initialiser une liste vide pour stocker les multiples.
// Commencer par le premier multiple de integer qui est tout simplement integer lui-même.
// Ajouter chaque multiple suivant à la liste tant qu'il est inférieur ou égal à limit.
// Terminer quand tu atteins ou dépasses la limite.


// function findMultiples(integer, limit) {

//     let multiples = []; // Initialiser un tableau vide pour stocker les multiples
//     for (let i = integer; i <= limit; i += integer) { // Incrémentation par les multiples de integer, i+=integer signifie qu'on ajoute integer à chaque itération
//         multiples.push(i); // Ajouter chaque multiple dans le tableau
//     }
//     return multiples; // Retourner le tableau après la boucle
// }

// console.log(findMultiples(2, 6)); // [2, 4, 6]
// console.log(findMultiples(3, 10)); // [3, 6, 9]

// Pour réaliser cette fonction qui aplatit un tableau à un seul niveau, il te suffit de parcourir chaque élément du tableau initial et, si l'un des éléments est lui-même un tableau, tu l'ajoutes à un nouveau tableau de sortie tout en évitant d'aller plus en profondeur.

// Voici les étapes :

// Créer un tableau vide pour stocker les éléments "aplatis".
// Parcourir le tableau d'entrée et vérifier si chaque élément est un tableau.
// Si l'élément est un tableau, tu ajoutes ses éléments individuellement dans le tableau de sortie.
// Si l'élément n'est pas un tableau, tu l'ajoutes directement au tableau de sortie.
// const flatten = (array) => {
//     const flatArray = []
//     for (let i = 0; i < array.length; i++)
//         if (Array.isArray(array[i])) {
//             flatArray.push(...array[i]);
//         } else {
//             flatArray.push(array[i]);
//         }
//     return flatArray
// }
// console.log(flatten([1, [2, 3], 4, [5, 6]])); // [1, 2, 3, 4, 5, 6]
// console.log(flatten([[1, 2], 3, [4, 5], 6])); // [1, 2, 3, 4, 5, 6]


// Dans ce kata, vous allez créer une fonction qui prend une liste d'entiers et de chaînes non négatifs et renvoie une nouvelle liste avec les chaînes filtrées.

// const filterList = (l) => {
//     const intArr = []
//     for (let i = 0; i < l.length; i++) {
//         if (typeof (l[i]) === 'number') {
//             intArr.push(l[i])
//         }
//     }
//     return intArr
// }


// console.log(filterList([1, 2, 'a', 'b']))//[1,2]
// console.log(filterList([1, 'a', 'b', 0, 15])) // [1,0,15]
// console.log(filterList([1, 2, 'aasf', '1', '123', 123]))// [1,2,123]
// En général, lorsque vous achetez quelque chose, on vous demande si votre numéro de carte de crédit, votre numéro de téléphone ou la réponse à votre question la plus secrète est toujours correcte. Cependant, comme quelqu'un pourrait regarder par-dessus votre épaule, vous ne voulez pas que cela apparaisse sur votre écran. Au lieu de cela, nous le masquons.

// Votre tâche est d'écrire une fonction maskifyqui transforme tous les caractères sauf les quatre derniers en '#'.

// const maskify = (cc) => {
//     const newStr = []; // Utiliser un tableau pour construire la chaîne
//     for (let i = 0; i < cc.length - 4; i++) {
//         newStr.push("#"); // Ajouter # pour chaque caractère masqué
//     }
//     newStr.push(cc.slice(-4)); // Ajouter les 4 derniers caractères
//     return newStr.join(""); // Convertir le tableau en chaîne
// }


// console.log(maskify("dddddddddddd"))//[1,2]
// console.log(maskify("ssssssssssssssss")) // [1,0,15]
// console.log(maskify("hhhhhhhhhhhhhh"))// [1,2,123]

/*La conjecture de Collatz stipule que pour tout nombre naturel positif n, ce processus :

si nc'est pair, divisez-le par2
si nc'est impair, multipliez-le par 3et ajoutez1
répéter
finira par atteindre n = 1.

Par exemple, si n = 20, la séquence résultante sera :

[ 20, 10, 5, 16, 8, 4, 2, 1 ]
Écrivez un programme qui affichera la longueur de la conjecture de Collatz pour tout n.
Dans l'exemple ci-dessus, la sortie serait 8.

Pour en savoir plus, consultez : http://en.wikipedia.org/wiki/Collatz_conjecture*/
// function collatz(n) {
//     let length = 1//on commence à 1 car on a déjà n dans le tableau
//     let newArr = [n]

//     while (n > 1) {
//         if (n % 2 === 0) {
//             n = (n / 2)
//         } else {
//             n = (n * 3 + 1)
//         }
//         newArr.push(n)
//         length++ //on incremente la longueur à chaque fois qu'on ajoute un element dans le tableau
//     }
//     return length
// }
const collatz = (n) => {
    let length = 1
    while (n > 1) {
        n % 2 === 0 ? n = (n / 2) : n = (n * 3 + 1)


        length++
    }
    return length
}

console.log(collatz(20)); // Exemple attendu: [10, 5, 16, 8, 4, 2, 1]
console.log(collatz(15)); // Exemple: [46, 23, 70, 35, 106, 53, 160, ... 1]
console.log(collatz(6));  // Exemple: [3, 10, 5, 16, 8, 4, 2, 1]
console.log(collatz(1));  // Exemple: []