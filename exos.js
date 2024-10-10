
// const array = [1, 2, 3, 4, 5]

// const arrayAcc = array.reduce((acc, curr) => acc + curr, 0)

// console.log(arrayAcc)


//       const arrayAcc = () => {
//   const array = [1, 2, 3, 4, 5];  // Ton tableau d'exemple
//   let result = 0;  // Initialisation de la variable pour stocker la somme

//   // Parcourir le tableau avec une boucle for
//   for (let i = 0; i < array.length; i++) {
//     result += array[i];  // Ajouter chaque élément du tableau à la somme
//   }

//   return result;  // Retourner le résultat
// }

// console.log(arrayAcc());  // Appeler la fonction et afficher le résultat

//Autre boucle for
// const arrayAcc = () => {
//   const array = [1, 2, 3, 4, 5];  // Ton tableau d'exemple
//   let result = 0;  // Initialisation de la variable pour stocker la somme

//   // Utilisation de la boucle for...of pour parcourir les éléments du tableau
//   for (const num of array) {
//     result += num;  // Ajouter chaque élément directement à la somme
//   }

//   return result;  // Retourner le résultat
// }

// console.log(arrayAcc());  // Appeler la fonction et afficher le résultat

//Trouver le maximum

// const compare = () => {
//     const numbers = [3, 7, 2, 9, 5]
//     let max = numbers[0]
//     for (const num of numbers) {
//         if (num > max) {
//             max = num
//         }
//     }
//     return max;
// }
// console.log(compare())
// const numbers = [3, 7, 2, 9, 5];
// const compare = () => {
//   const sortedNumbers = numbers.sort((a, b) => a - b);
//   return sortedNumbers[sortedNumbers.length - 1]; // Retourner le dernier élément
// }

// console.log(compare()); // Affiche le maximum


// Exercice 3 : Vérifier si un mot est un palindrome
// Écris une fonction en JavaScript qui prend une chaîne de caractères et retourne true si c'est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche), et false sinon.

// Exemple :
// Entrée : "radar"

// Sortie : true

// Entrée : "hello"

// Sortie : false

// Indice : Tu peux comparer la chaîne originale avec sa version inversée.

// const palindrome = (word) => {
//     const reversedWord = word.split('').reverse().join('')
//     return word === reversedWord
// }
// console.log(palindrome("radar")); // Devrait afficher true
// console.log(palindrome("hello")); // Devrait afficher false
// console.log(palindrome("level")); // Devrait afficher true
// console.log(palindrome("world")); // Devrait afficher false

/*split('') : Divise la chaîne en un tableau de caractères.
reverse() : Inverse l'ordre des éléments du tableau.
join('') : Reconstitue le tableau en une chaîne de caractères.
Enfin, tu compares la chaîne d'origine avec la chaîne inversée pour vérifier si c'est un palindrome.*/

// Exercice 4 : Compter les voyelles dans une chaîne
// Écris une fonction en JavaScript qui prend une chaîne de caractères et retourne le nombre de voyelles (a, e, i, o, u) présentes dans cette chaîne.

// Exemple :
// Entrée : "bonjour"

// Sortie : 3 (les voyelles sont o, o, u)

// Entrée : "test"

// Sortie : 1 (la voyelle est e)

// Indice : Tu peux parcourir la chaîne et vérifier chaque caractère pour voir s'il s'agit d'une voyelle.

// Prends ton temps, et fais-moi signe si tu as besoin d'aide ou si tu veux un retour sur ton code !


// const countVowels = (word) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     let vowelsConter = 0;
//     const wordSplit = word.split('')
//     console.log(wordSplit)
//     for (const letter of wordSplit) {
//         if (vowels.includes(letter.toLowerCase())) {
//             console.log(letter)
//             vowelsConter += 1
//             console.log(vowelsConter)

//         }

//     }
//     return vowelsConter
// }
// console.log(countVowels("Bonjour"))
// console.log(countVowels("HEllOo"))
// C'est parfait maintenant ! 🎉

// Ce que fait ton code :
// Il parcourt chaque lettre de la chaîne word.
// Il vérifie si la lettre est une voyelle en utilisant vowels.includes(letter).
// Si c'est le cas, il incrémente le compteur vowelsCounter.
// À la fin, il retourne le nombre total de voyelles.
// Points supplémentaires :
// Pour que cela fonctionne avec des lettres majuscules (comme dans "Bonjour"), tu pourrais envisager de convertir chaque lettre en minuscule en utilisant letter.toLowerCase() avant de faire la vérification.
// Si tout fonctionne comme prévu dans le terminal, tu as réussi l'exercice ! Si tu souhaites un autre exercice ou si tu as des questions, fais-le moi savoir ! 😊

// Exercice 5 : Trouver les chiffres pairs dans un tableau
// Écris une fonction en JavaScript qui prend un tableau de nombres et retourne un nouveau tableau contenant uniquement les chiffres pairs.

// Exemple :
// Entrée : [1, 2, 3, 4, 5, 6]

// Sortie : [2, 4, 6]

// Entrée : [10, 15, 20, 25, 30]

// Sortie : [10, 20, 30]

// Indice : Tu peux utiliser une boucle pour parcourir le tableau et vérifier si chaque nombre est pair.

// const findEvenNumbers = (num) => {
//     const array = [1, 2, 3, 4, 5, 6]
//     const newArr = []
//     array.map((num) => {
//         if (num % 2 === 0) {
//             newArr.push(num)
//         }
//     })
//     console.log(newArr)
//     return newArr
// }
// console.log(findEvenNumbers())

//Autre méthode
// const findEvenNumbers = (numbers) => {
//     const array = [1, 2, 3, 4, 5, 6]
//     const newArr = []
//     for (const num of array) {
//         if (num % 2 === 0) {
//             newArr.push(num)
//         }
//     }
//     return newArr
// }
// console.log(findEvenNumbers())
// Exercice 6 : Trouver le nombre maximum dans un tableau
// Écris une fonction en JavaScript qui prend un tableau de nombres et retourne le plus grand nombre.

// Exemple :
// Entrée : [3, 5, 7, 2, 8]

// Sortie : 8

// Entrée : [10, 20, 5, 15]

// Sortie : 20

// Indice : Tu peux initialiser une variable avec une valeur du tableau et la comparer avec les autres éléments.

// Prends ton temps pour résoudre cet exercice, et fais-moi signe si tu veux de l'aide ou si tu as besoin de vérifier si tu es sur la bonne voie ! 😊

// const largestNumber = () => {

//     const array = [3, 5, 7, 2, 8]
//     let number = array[0]
//     for (const num of array) {
//         if (num > number) {
//             number = num
//         }
//     }
//     return number
// }
// console.log(largestNumber())
// Exercice 7 : Supprimer les doublons d'un tableau
// Écris une fonction en JavaScript qui prend un tableau de nombres et retourne un nouveau tableau avec tous les doublons supprimés.

// Exemple :
// Entrée : [1, 2, 2, 3, 4, 4, 5]

// Sortie : [1, 2, 3, 4, 5]

// Entrée : [10, 20, 20, 30, 30, 30]

// Sortie : [10, 20, 30]

// Indice : Tu peux utiliser un tableau ou une autre structure de données pour vérifier si un élément a déjà été ajouté.

// Essaie-le, et comme d'habitude, fais-moi signe si tu as besoin d'aide ou si tu veux vérifier ton approche ! 😊

// const noDouble = () => {
//     const array = [10, 20, 20, 30, 30, 30]
//     const newArr = []
//     for (const num of array) {
//         if (!newArr.includes(num)) { //Vérifie si num n’est pas déjà dans newArr en utilisant !newArr.includes(num)
//             newArr.push(num)
//         }
//         console.log(newArr)
//     }
// }
// console.log(noDouble())

//Autre méthode

// const noDouble = (array) => {
//     return [...new Set(array)];//Set permet de créer un objet Set qui permet de stocker des valeurs uniques de n'importe quel type, que ce soit des valeurs primitives ou des références d'objets.
// }
// Exercice 8 : Calculer la somme des carrés des nombres

// Écris une fonction en JavaScript qui prend un tableau de nombres et retourne la somme des carrés de chaque nombre dans le tableau.

// Exemple 1 :
// Entrée : [1, 2, 3]
// Sortie : 14 (car 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14)

// Exemple 2 :
// Entrée : [4, 5, 6]
// Sortie : 77 (car 4^2 + 5^2 + 6^2 = 16 + 25 + 36 = 77)

// **Indice** : Tu peux utiliser `map()` pour créer un tableau des carrés des nombres et ensuite utiliser `reduce()` pour calculer la somme.

// const sumOfSquares = (array) => {
//     return array.map(num => num * num).reduce((acc, curr) => acc + curr, 0)
// }
// console.log(sumOfSquares([1, 2, 3])) // Devrait afficher 14

// const sumOfSquare = (array) => {

//     let total = 0
//     for (const num of array) {

//         const square = num * num;
//         total += square


//     }
//     return total
// }
// console.log(sumOfSquare([4, 5, 6]))
// Exercice 9 : Filtrer les mots longs
// Écris une fonction en JavaScript qui prend un tableau de chaînes de caractères et retourne un nouveau tableau contenant uniquement les mots dont la longueur est supérieure à une valeur spécifiée.

// Exemple :
// Entrée : ["chat", "éléphant", "chien", "hippopotame"], 5

// Sortie : ["éléphant", "hippopotame"]

// Entrée : ["pomme", "banane", "kiwi"], 4

// Sortie : ["pomme", "banane"]

// Indice : Utilise filter() pour créer un tableau avec les mots dont la longueur est supérieure à la valeur spécifiée.

// const longestWord = (array, size) => {
//     return array.filter(word => word.length > size);
// }

// console.log(longestWord(["chat", "éléphant", "chien", "hippopotame"], 5));

// console.log(longestWord(["pomme", "banane", "kiwi"], 4));


// Exercice 10 : Compter les occurrences des mots
// Écris une fonction en JavaScript qui prend un tableau de chaînes de caractères et retourne un objet où chaque clé est un mot du tableau et chaque valeur est le nombre d'occurrences de ce mot.

// Exemple :
// Entrée : ["chat", "chien", "chat", "souris", "chien", "chat"]

// Sortie : {"chat": 3, "chien": 2, "souris": 1}

// Entrée : ["pomme", "banane", "kiwi", "banane", "kiwi"]

// Sortie : {"pomme": 1, "banane": 2, "kiwi": 2}

// Indice : Tu peux utiliser un objet pour stocker les mots et leurs occurrences en itérant sur le tableau.

// Si tu as besoin d'aide ou d'indices, n'hésite pas à demander ! 😊

// const countWord = (array) => {
//     const obj = {}
//     for (const word of array) {
//         if (!obj[word]) {
//             obj[word] = 1
//         } else {
//             obj[word] += 1
//         }
//     }
//     return obj
// }
// const countWord = (array) => {
// const obj = {}
// for(let i = 0; i < array.length; i++) {
//     if (obj[array[i]]) {
//         obj[array[i]]++
//     } else {
//         obj[array[i]] = 1
//     }
// }
// return obj
// }
//ou
const countWord = (array) => {
    return array.reduce((acc, curr) => {
        if (acc[curr]) {
            // Si le mot existe déjà, tu incrémentes
            acc[curr] += 1; //acc[curr] est la clé de l'objet acc et += 1 incrémente la valeur de cette clé
        } else {
            // Sinon, tu l'initialises à 1
            acc[curr] = 1;
        }
        return acc;
    }, {});//ici on crée un objet vide pour stocker les mots et leurs occurrences
}
console.log(countWord(["chat", "chien", "chat", "souris", "chien", "chat"]))

// Lorsque tu exécutes console.log(countWord(["chat", "chien", "chat", "souris", "chien", "chat"])), tu devrais obtenir un objet qui montre combien de fois chaque mot apparaît.
// if (!obj[word]) :

// Cette condition vérifie si obj[word] est "falsy", c'est-à-dire s'il n'existe pas encore dans l'objet obj. En JavaScript, un mot clé n'existant pas dans un objet renvoie undefined, ce qui est considéré comme "falsy".
// Si le mot n'existe pas dans obj, cela signifie que c'est la première fois que tu rencontres ce mot.
// obj[word] = 1 :

// Si le mot est nouveau (il n'existe pas encore dans l'objet), tu l'ajoutes à l'objet obj et tu lui assignes la valeur 1. Cela signifie que tu comptes ce mot pour la première fois.
// else :

// Si le mot existe déjà dans l'objet (c'est-à-dire qu'il a déjà été rencontré auparavant), tu passes dans cette branche.
// obj[word] += 1 :

// En résumé, obj[word] est la bonne approche pour utiliser des clés dynamiques basées sur le contenu d'une variable, tandis que obj.word est pour accéder à une clé fixe, ce qui ne serait pas utile dans ce contexte. Si tu as d'autres questions, fais-le moi savoir ! 😊

// Exercice 11 : Fusionner deux tableaux
// Écris une fonction en JavaScript qui prend deux tableaux de nombres et retourne un tableau contenant les éléments des deux tableaux, sans doublons.

// Exemple :
// Entrée : [1, 2, 3] et [2, 3, 4, 5]

// Sortie : [1, 2, 3, 4, 5]

// Entrée : [7, 8, 9] et [9, 10, 11, 12]

// Sortie : [7, 8, 9, 10, 11, 12]

// Indice : Tu peux utiliser la méthode concat() pour combiner les tableaux, puis le Set pour éliminer les doublons.

// const concatArray = (arr1, arr2) => {
//     const newArr = arr1.concat(arr2)
//     return [...new Set(newArr)]
// }
// console.log(concatArray([1, 2, 3], [2, 3, 4, 5]))
// console.log(concatArray([7, 8, 9], [7, 9, 10, 11, 12]))