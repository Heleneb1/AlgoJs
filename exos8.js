// 1. Somme des Nombres Pairs
// Écris une fonction sumEvenNumbers(arr) qui prend un tableau de nombres et retourne la somme des nombres pairs.
// const sumEvenNumbers=(arr)=>{
//   return arr.filter((num)=>num % 2 ===0).reduce((acc,curr)=>acc+curr,0)
// }
//ou

// const sumEvenNumbers=(arr)=>{
//     let sum=0
//     for (let i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//     sum+= arr[i]
//     }
//   }
//   return sum
// }


// console.log(sumEvenNumbers([ 1, 15, 21,2, 10,13,25,6,8]))//26

// 2. Compter les Voyelles
// Écris une fonction countVowels(str) qui prend une chaîne de caractères et retourne le nombre de voyelles dans la chaîne (a, e, i, o, u).

// const countVowels=(str)=>{
//     const vowels=['a',"e","i", "o", "u"]
//     return str.split('').filter((letter)=>vowels.includes(letter)).length //split pour transformer la chaine en tableau et filter pour filtrer les voyelles et length pour compter
//     }
//     //includes le tableau contient la lettre
//     //ou

    // const countVowels=(str)=>{
    //     const vowels=['a',"e","i", "o", "u"]
    //     str = str.split('')
    //     let count= 0
    //     for (let i= 0;i<str.length; i++){
    //       if(vowels.includes(str[i])){
    //         count++
    //       }
    //     }
    //     return count
        
    //   }
    //    console.log(countVowels('Le petit chat dort dans la chambre.'));//9
        //  
// // 3. Inverser une Chaîne
// // Écris une fonction reverseString(str) qui prend une chaîne de caractères et la retourne inversée.
// // const reverseString=(str)=>str.split('').reverse().join("")
//     //ou
//     const reverseString = (str)=>{
  //TODO:revoir
//         let reverse=""
//         for(let i = str.length -1; i>=0; i--){//on commence par la fin de la chaine et on decremente jusqu'a 0 (str.length -1)signifie qu'on commence par la derniere lettre , le -1 est pour commencer par 0
//           reverse += str[i]
//         }
//         return reverse
//       }
// console.log(reverseString('.erbmahc al snad trod tahc titep eL'))//'Le petit chat dort dans la chambre.'

// 4. Trouver le Mot le Plus Court
// Écris une fonction shortestWord(str) qui prend une phrase et retourne le mot le plus court.

// const shortestWord=(str)=>{
//     let word = str.split(" ")
//     let shortest=word[0]
    
//     for (let i= 0; i<word.length; i++){
//       if(word[i].length<shortest){
//         shortest=word[i]
//       }
//     }
//     return shortest
//   }
  

  
//ou

// const shortestWord=(str)=>str.split(" ").sort((a,b)=> a.length-b.length) [0]
  
// console.log(shortestWord('Le petit chat dort dans la chambre.'))//'Le '
    

// 5. Vérifier si un Tableau est Trié
// Écris une fonction isSorted(arr) qui prend un tableau de nombres et vérifie s'il est trié en ordre croissant.

// const isSorted = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false; // Si un élément est plus grand que le suivant, le tableau n'est pas trié
//     }
//   }
//   return true; // Si la boucle se termine sans problème, le tableau est trié
// };

// console.log(isSorted([1, 2, 3, 5])); // true
// console.log(isSorted([1, 2, 4, 3, 5])); // false

// 6. Fusionner des Objets
// Écris une fonction mergeObjects(obj1, obj2) qui prend deux objets et retourne un nouvel objet qui combine leurs clés et valeurs. En cas de clé dupliquée, prends la valeur de l'objet 2.

// 7. Vérifier un Anagramme
// Écris une fonction isAnagram(str1, str2) qui vérifie si deux chaînes de caractères sont des anagrammes (c'est-à-dire qu'elles contiennent les mêmes lettres, dans un ordre différent).

// 8. Trouver le Deuxième Plus Grand Nombre
// Écris une fonction secondLargest(arr) qui prend un tableau de nombres et retourne le deuxième plus grand nombre.

// 9. Filtrer les Mots Contenant une Lettre Spécifique
// Écris une fonction filterByLetter(arr, letter) qui prend un tableau de mots et une lettre, et retourne un nouveau tableau contenant uniquement les mots qui contiennent cette lettre.

// 10. Calculer la Moyenne d'un Tableau
// Écris une fonction averageArray(arr) qui prend un tableau de nombres et retourne la moyenne des éléments.

// Exercice 11 : Compter les occurrences des mots
// Écris une fonction en JavaScript qui prend un tableau de chaînes de caractères et retourne un objet où chaque clé est un mot du tableau et chaque valeur est le nombre d'occurrences de ce mot.

// Exemple :
// Entrée : ["chat", "chien", "chat", "souris", "chien", "chat"]

// Sortie : {"chat": 3, "chien": 2, "souris": 1}

// Entrée : ["pomme", "banane", "kiwi", "banane", "kiwi"]

// Sortie : {"pomme": 1, "banane": 2, "kiwi": 2}

// Indice : Tu peux utiliser un objet pour stocker les mots et leurs occurrences en itérant sur le tableau.


// const countWord = (array) => {
  
//   }
//   console.log(countWord(["chat", "chien", "chat", "souris", "chien", "chat"]))
  
//     console.log(countWord(["pomme", "banane", "kiwi", "banane", "kiwi"]))  