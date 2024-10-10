// Exercice : Gestion des Notes d'Étudiants
// Énoncé : Tu es responsable de la gestion des notes d'étudiants dans une classe. Tu dois créer une fonction calculateAverage qui prend un tableau de notes (sous forme de nombres) et qui retourne la moyenne de ces notes. Si le tableau est vide, la fonction doit retourner 0.

// Instructions :

// Crée un tableau qui contient les notes de plusieurs étudiants.
// Utilise une boucle pour calculer la somme des notes.
// Calcule la moyenne en divisant la somme par le nombre total de notes.
// Retourne la moyenne, ou 0 si le tableau est vide.
// Exemple d'Entrée et de Sortie :

// calculateAverage([80, 90, 75, 85, 95]) → 85
// calculateAverage([]) → 0
// Indications :
// Tu peux utiliser Array.length pour connaître le nombre d'éléments dans le tableau.
// Utilise une boucle for ou la méthode reduce() pour calculer la somme des notes.
// Bonus :
// Après avoir terminé l'exercice principal, essaye de modifier la fonction pour qu'elle accepte des notes sous forme de chaînes de caractères (par exemple, ["80", "90", "75"]) et qu'elle les convertisse en nombres avant de calculer la moyenne.

// Prêt à essayer ?
// N'hésite pas à poser des questions si tu as besoin d'aide ou d'indices pour résoudre cet exercice ! 😊
// const calculateAverage = (arr) => {
//     if (arr.length === 0) {
//         return 0
//     }
//     arr = arr.map((num) => Number(num))// convertir les strings en numbers
//     // return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
//     //return Math.round(arr.reduce((acc, curr) => acc + curr, 0) / arr.length)// arrondi
//     return Math.round((arr.reduce((acc, curr) => acc + curr, 0) / arr.length) * 100) / 100// arrondi à 2 chiffres après la virgule
//     // return Math.round((arr.reduce((acc, curr) => acc + curr, 0) / arr.length) * 1000) / 1000// arrondi à 3 chiffres après la virgule
// }

// console.log(calculateAverage([80, 90, 75, 85, 95])); // devrait retourner 85
// console.log(calculateAverage([100, 90, 80, 70])); // devrait retourner 85
// console.log(calculateAverage([50, 60, 70, 80, 90])); // devrait retourner 70
// console.log(calculateAverage([45])); // devrait retourner 45
// console.log(calculateAverage([])); // devrait retourner 0
// console.log(calculateAverage(["80", "90", "75"])); // devrait retourner 81.66666666666667

// const twoDecimalPlaces = n => Number(n.toFixed(2));// arrondi à 2 chiffres après la virgule et convertir en number apres avoir converti en string avec toFixed

//ou

//const twoDecimalPlaces=(n)=>Math.round((n)*100)/100

// On va vous donner un mot. Votre tâche consiste à renvoyer le caractère du milieu du mot. Si la longueur du mot est impaire, renvoie le caractère du milieu. Si la longueur du mot est paire, renvoie les 2 caractères du milieu.

// #Exemples :

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Saisir

// Un mot (chaîne) de longueur 0 < str < 1000(en javascript, vous pouvez obtenir un peu plus de 1000 dans certains cas de test en raison d'une erreur dans les cas de test). Vous n'avez pas besoin de tester cela. Ceci est seulement ici pour vous dire que vous n'avez pas à vous soucier du délai d'expiration de votre solution.

// #Sortir

// Le(s) caractère(s) du milieu du mot représenté(s) sous forme de chaîne.
// const getMiddle=(string)=>{
//   const middle= Math.floor(string.length/2)
//   console.log(middle)
//   for (let i = 0; i < string.length; i++){
//     if(string.length%2 === 0 ){
//       return string[middle-1] + string[middle]
//       }else{
//         return string[middle]
//       }
//       }
// }
// const getMiddle = (string) => {
//     const middle = Math.floor(string.length / 2)
//     return string.length % 2 === 0 ? string[middle - 1] + string[middle] : string[middle]
// }

// // Test des exemples donnés
// console.log(getMiddle("test"));     // "es"
// console.log(getMiddle("testing"));  // "t"
// console.log(getMiddle("middle"));   // "dd"
// console.log(getMiddle("A"));        // "A"

// // Tests supplémentaires
// console.log(getMiddle("JavaScript"));  // "S"
// console.log(getMiddle("racecar"));     // "e"
// console.log(getMiddle("abcdef"));      // "cd"
// console.log(getMiddle("hello world")); // " "


// Nous voulons connaître l'indice des voyelles dans un mot donné, par exemple, il y a deux voyelles dans le mot super (la deuxième et la quatrième lettre).

// Ainsi, étant donné une chaîne « super », nous devrions renvoyer une liste de [2, 4].


// Les voyelles dans ce contexte font référence à : aeiouy (y compris les majuscules)
// Ceci est indexé à partir de [1..n](pas indexé à zéro !)
// const vowelIndices = (word) => {
//     const vowels = ["a", "e", "i", "o", "u", "y"]
//     const indice = []
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i].toLowerCase())) {
//             indice.push(i + 1)
//         }
//     }
//     return indice
// }

// console.log(vowelIndices('Mmmm'))  // []
// console.log(vowelIndices('Super'))// [2,4]
// console.log(vowelIndices('Apple'))// [1,5]
// console.log(vowelIndices('YoMama')) // [1,2,4,6]

// Commençons par un exemple :

// Prenez un numéro : 56789. Tournez à gauche, vous obtenez 67895.

// Gardez le premier chiffre en place et faites pivoter les autres chiffres vers la gauche : 68957.

// Gardez les deux premiers chiffres en place et faites pivoter les autres : 68579.

// Gardez les trois premiers chiffres et faites pivoter le reste vers la gauche : 68597. Maintenant c'est fini puisque en gardant les quatre premiers il ne reste qu'un seul chiffre qui a pivoté c'est lui-même.

// Vous avez la séquence de nombres suivante :

// 56789 -> 67895 -> 68957 -> 68579 -> 68597

// et tu dois rendre le plus grand : 68957.

// Tâche
// Écrivez function max_rot(n)ce qui, étant donné un entier positif, nrenvoie le nombre maximum que vous avez obtenu en effectuant des rotations similaires à l'exemple ci-dessus.

// Donc max_rot(ou maxRotou... selon la langue) est tel que :

// console.log(maxRot(56789)) //should return 68957

// console.log(maxRot(38458215))//should return 85821534


// function maxRot(n) {
//     let number = n
//     nArray = n.toString().split('')// convertir en string puis en array

//     for (let i = 0; i < nArray.length; i++) {
//         nArray.push(nArray.splice(i, 1))// déplacer le premier élément à la fin
//         const num = Number(nArray.join(''))// convertir en number
//         if (num > number) number = num// si le nombre est plus grand que le nombre initial, on le remplace
//     }
//     return number
// }

// Étant donné une chaîne de caractères, tu dois renvoyer une nouvelle chaîne dans laquelle chaque caractère (sensible à la casse) est répété une fois.

// Exemples (Entrée -> Sortie) :

// "String" -> "SSttrriinngg"
// "Hello World" -> "HHeelllloo WWoorrlldd"
// "1234!_ " -> "11223344!!__ "
// const doubleChar = (str) => {
//     let double = []
//     str = str.split("")
//     for (let i = 0; i < str.length; i++) {
//         double.push(str[i] + str[i])
//     }
//     return double.join('')
// }


// console.log(doubleChar("String"));      // Devrait retourner "SSttrriinngg"
// console.log(doubleChar("Hello World"));  // Devrait retourner "HHeelllloo  WWoorrlldd"
// console.log(doubleChar("1234!_ "));      // Devrait retourner "11223344!!__  "

// Une liste imbriquée (ou tableau en JavaScript) est une liste qui apparaît comme une valeur à l'intérieur d'une autre liste, par exemple :

// [item, item, [item, item], item]
// Dans la liste ci-dessus, [item, item] est une liste imbriquée.

// Votre objectif est d'écrire une fonction qui détermine la profondeur de la liste imbriquée la plus profonde à l'intérieur d'une liste donnée. Retournez 1 s'il n'y a pas de listes imbriquées. La liste passée à votre fonction peut contenir n'importe quel type de données.

// const arrayDepth = (array) => {
//     if (array.length === 0) return 1; // Si le tableau est vide, la profondeur est 1

//     let maxDepth = 1; // Initialise la profondeur maximale à 1

//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) { // Si l'élément est un tableau
//             // Calcule la profondeur du tableau imbriqué
//             const depth = arrayDepth(array[i]);
//             // Compare et met à jour la profondeur maximale
//             maxDepth = Math.max(maxDepth, depth + 1);
//         }
//     }

//     return maxDepth; // Retourne la profondeur maximale
// }

// console.log(arrayDepth([true])); // devrait retourner 1

// console.log(arrayDepth([])); // devrait retourner 1

// console.log(arrayDepth([2, "yes", [true, false]])); // devrait retourner 2

// console.log(arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1])); // devrait retourner 6

// console.log(arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]])); // devrait retourner 2


// Votre tâche consiste à écrire une fonction qui prend une chaîne et une liste de délimiteurs comme entrée et renvoie une liste de chaînes/caractères après avoir divisé la chaîne donnée.

// function multipleSplit(string, delimiters = []) {
//     for (const char of delimiters) {
//       string = string.split(char).join(' ');  // Remplace les délimiteurs par des espaces
//     }
//     return string.split(' ').filter(Boolean);  // Divise par espace et filtre les éléments vides
//   }

//   console.log(multipleSplit('Hi, how are you?', [' ']))//['Hi,', 'how', 'are', 'you?']
//   console.log(multipleSplit('1+2-3', ['+', '-']))// ['1', '2', '3']

/*Utiliser une boucle ou une expression régulière pour appliquer chaque délimiteur.
Créer une chaîne transformée qui remplace chaque délimiteur par une virgule ou un autre séparateur temporaire avant de faire un dernier split.*/

// Renvoie le nombre (count) de voyelles dans la chaîne donnée.

// Nous considérerons a, e, i, o, ucomme des voyelles pour ce Kata (mais pas y).

// La chaîne d'entrée sera uniquement composée de lettres minuscules et/ou d'espaces.

// function getCount(str) {
//     const vowels = ["a", "e", "i", "o", "u"]
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++
//         }
//     }
//     return count
// }

// console.log(getCount("abracadabra"))//5
// Prenez un tableau et supprimez chaque deuxième élément du tableau. Conservez toujours le premier élément et commencez à supprimer l'élément suivant.

// Exemple:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-->["Keep", "Keep", "Keep", ...]

// Aucun des tableaux ne sera vide, vous n’avez donc pas à vous en soucier !

// function removeEveryOther(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0)
//             newArr.push(arr[i])
//     }
//     return newArr
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // ['Hello', 'Hello Again']
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
// console.log(removeEveryOther([[1, 2]])); // [[1, 2]]
// console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }])); // [['Goodbye']]
// const sumArray = (numbers) => (
//     numbers && numbers.length > 1
//         ? numbers
//             .sort((a, b) => a - b)
//             .slice(1, -1)
//             .reduce((sum, number) => sum + number, 0)
//         : 0
// );
// // Validation de l'entrée : Il vérifie que le tableau numbers n'est pas nul et qu'il contient plus d'un élément.
// // Tri du tableau : Il trie les nombres dans l'ordre croissant.
// // Exclusion du premier et du dernier élément : En utilisant slice(1, -1), le premier et le dernier éléments du tableau sont supprimés (le plus petit et le plus grand).
// // Somme des éléments restants : Il utilise la méthode reduce() pour sommer les éléments restants
// console.log(sumArray([6, 2, 1, 8, 10])); // 16
// console.log(sumArray([1, 1, 11, 2, 3])); // 6
// console.log(sumArray([1])); // 0 (tableau trop court)
// console.log(sumArray([0, 1, 6, 10, 10])); // 17

// function reverse(string) {
//     return string.split(" ").reverse().join(" ")
// }

// console.log(reverse('I am an expert at this'))//'this at expert an am I');