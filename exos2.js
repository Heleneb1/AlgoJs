// Exercice 1 : Somme des nombres impairs
// Écris une fonction en JavaScript qui prend un tableau de nombres et retourne la somme de tous les nombres impairs du tableau.

// Exemple :
// Entrée : [1, 2, 3, 4, 5]
// Sortie : 9 (1 + 3 + 5)
// const oddSum = (array) => {
//     const num = array[0]
//     return array.filter(num => num % 2 !== 0).reduce((acc, curr) => acc + curr, 0)
// }
// console.log(oddSum([1, 2, 3, 4, 5]))

// Exercice 2 : Trouver le mot le plus long
// Écris une fonction qui prend un tableau de mots et retourne le mot ayant le plus de caractères.

// Exemple :
// Entrée : ["arbre", "éléphant", "chat", "hippopotame"]
// Sortie : "hippopotame"

// const longestWord = (array) => {
//     return array.reduce((acc, curr) => acc.length > curr.length ? acc : curr)
// }
// const largestWord = (words) => {
//     let largest = words[0]
//     console.log("doit retourner le premier mot", largest)

//     for (const word of words) {
//         if (largest.length < word.length) {
//             largest = word
//         }
//     }
//     return largest;
// }
// console.log(largestWord(["arbre", "éléphant", "chat", "hippopotame"]))
// Exercice 3 : Compter les occurrences d'une lettre dans une chaîne
// Énoncé : Écris une fonction en JavaScript qui prend une chaîne de caractères et une lettre, et qui retourne le nombre de fois que cette lettre apparaît dans la chaîne.

// Exemple : Entrée : ("hello world", "l")
// Sortie : 3

// Entrée : ("javascript", "a")
// Sortie : 2

// const compare = (string, letter) => {
//     const newArr = string.split('')
//     let array = []
//     console.log(newArr)
//     for (const charac of newArr) {
//         if (letter === charac) {
//             array.push(letter)
//             console.log(array.length)

//         }

//     }
//     return array.length

// }
// console.log(compare("hello world", "l"))
//Autre méthode

// const compare = (string, letter) => {
//     return string.split('').filter(charac => charac === letter).length;
// }

// console.log(compare("hello world", "l"));
// Exercice 3 : Trouver la deuxième valeur la plus grande Écris une fonction en JavaScript qui prend un tableau de nombres et retourne la deuxième plus grande valeur du tableau.

// Exemple : Entrée : [10, 5, 20, 15]
// Sortie : 15

// Entrée : [8, 4, 6, 1]
// Sortie : 6
// const secondLargest=(array)=>{
//     let max=array[0]

//    for ( const elem of array){
//      if(elem> max){
//        max = elem
//             }
//    }
//       console.log(max)
//      const newArr = array.filter(num=>num!==max)
//      console.log(newArr)
//       let second=newArr[0]
//       for ( const elem of newArr){
//      if(elem > second){
//        second = elem
//             }

//       }
//      console.log(second)
//    return second
//    }
//    console.log( secondLargest([10, 5, 20, 15]))

// Autre méthode
// const secondLargest = (array) => {
//     // Étape 1 : Trouver le maximum
//     let max = Math.max(...array);

//     // Étape 2 : Filtrer le tableau pour enlever le maximum
//     const newArr = array.filter((num) => num !== max);

//     // Étape 3 : Trouver le nouveau maximum dans le tableau filtré
//     let secondMax = Math.max(...newArr);

//     return secondMax;
// }

// console.log(secondLargest([10, 5, 20, 15])); // Cela devrait afficher 15


// Exercice : Trouver la somme des multiples de 3 ou 5
// Écris une fonction qui prend un nombre entier en paramètre. La fonction doit retourner la somme de tous les multiples de 3 ou de 5 en dessous de ce nombre.

// Exemple :
// sumMultiples(10) devrait retourner 23, car les multiples de 3 ou 5 en dessous de 10 sont 3, 5, 6, et 9. Leur somme est donc 3 + 5 + 6 + 9 = 23.

// const sumMultiples = (number) => {
//     let sum = 0
//     for (let i=1; i<number; i++ ){
//       if(i%3 ===0 ||i %5 ===0 ){
//        sum += i
//       }

//     }
//     return  sum
//   }

//   console.log(sumMultiples(10))
// En résumé
// Utilise let i = 0 lorsque tu veux parcourir un tableau ou une structure dont les éléments commencent à l'index 0.Condition (i < array.length) :

// Utilise let i = 1 quand tu veux commencer le comptage à 1 pour des besoins spécifiques (comme un compte réel, pas d'indexation).
// Pourquoi i++ ?
// Le i++ est ce qui fait avancer la boucle. Sans cette étape, la valeur de i ne changerait jamais, et la boucle continuerait à l'infini (ce qu'on appelle une "boucle infinie").
// for (initialisation; condition; incrémentation) {
//     // Code à exécuter à chaque itération
// }



// Exercice 5 : Multiplier les éléments d'un tableau
// Écris une fonction multiplyArray qui prend un tableau de nombres et un multiplicateur, et retourne un nouveau tableau avec chaque élément multiplié par ce nombre.

// Énoncé :

// javascript

// Exercice :
// Crée une fonction reverseArray qui prend un tableau comme argument et retourne un nouveau tableau avec les éléments dans l'ordre inverse.

// Par exemple :

// javascript
// Copier le code
// const reverseArray = (array) => {
//     const newArr = array.reverse()
//     return newArr
// }

// console.log(reverseArray([1, 2, 3])); // Devrait retourner [3, 2, 1]
// console.log(reverseArray(['a', 'b', 'c'])); // Devrait retourner ['c', 'b', 'a']
// const reverseArray =(array)=>{
//   const newArr=[]
//   for( let i = array.length-1 ; i >=0 ; i--){
//       // Parcours le tableau de la fin vers le début

//      newArr.push(array[i]);
//   }
//   return newArr
// }

//  console.log(reverseArray([1, 2, 3])); // Devrait retourner [3, 2, 1]
// console.log(reverseArray(['a', 'b', 'c'])); // Devrait retourner ['c', 'b', 'a']
// Initialisation : let i = array.length - 1 : cela commence avec i égal à l'index du dernier élément du tableau.
// Condition : i >= 0 : tant que i est supérieur ou égal à 0, la boucle va s'exécuter. Cela permet d'accéder à tous les indices du tableau, y compris le premier (index 0).
// Incrémentation : i-- (ou i = i - 1) : à chaque itération, i est décrémenté de 1, ce qui signifie qu'on passe à l'élément précédent du tableau.

// Exercice : Compter les voyelles
// Écris une fonction en JavaScript qui prend une chaîne de caractères en entrée et renvoie le nombre de voyelles présentes dans cette chaîne. Les voyelles à considérer sont : "a", "e", "i", "o", "u" (en minuscules et majuscules).

// Exemple :
// Entrée : "Bonjour"
// Sortie : 3 (les voyelles sont "o" et "o")
// Indice :
// Tu peux utiliser une boucle pour parcourir chaque caractère de la chaîne et vérifier s'il s'agit d'une voyelle.

// const countVowels=(word)=>{
//    const vowels = ['a', 'e', 'i', 'o', 'u']
//   let count = 0;
//    const newArr=[]
//    for (let i = 0;i< word.length ; i++){
//       let letter=word[i]
//      if(vowels.includes(letter)){
//        newArr.push(letter)
//        count++
//      }
//    }
//   console.log(newArr)
//   return count
// }
// console.log(countVowels("Bonjour"))

// Inverser un mot : Écris une fonction reverseString qui prend une chaîne de caractères et retourne cette chaîne à l'envers.

// javascript
// Copier le code
// const reverseString = (str) => {
//    const splitStr= str.split('').reverse().join('')
//    console.log(splitStr)
//   return splitStr
// }

// console.log(reverseString("helene"))

// Compter les consonnes : Crée une fonction countConsonants qui prend une chaîne de caractères et retourne le nombre de consonnes.

// javascript
// Copier le code
// const countConsonants = (word) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     const arr = word.split('')
//     let count = 0
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         if (!vowels.includes(arr[i])) {
//             // En résumé, l'expression !vowels.includes(arr[i]) vérifie si le caractère à l'index i de arr n'est pas une voyelle. Si c'est le cas, cela signifie que c'est une consonne, et tu peux alors incrémenter ton compteur.

//             count++
//         }
//     }
//     console.log(count)
//     return count
// }

// console.log(countConsonants("helene"))

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// Utilisation : Utilisé généralement pour parcourir les index d'un tableau ou une séquence de nombres.
// Quand choisir l'un ou l'autre :
// Utilise for avec let si :

// Tu as besoin de l'index pour des calculs.
// Tu souhaites modifier le tableau en cours de parcours.
// Utilise for...of si :

// Tu veux simplement accéder aux valeurs et que l'index n'est pas nécessaire.
// Tu souhaites un code plus propre et plus lisible.

