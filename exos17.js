// Peux-tu écrire une fonction en JavaScript qui renverse une chaîne de caractères ? 🔄

// 📝 𝗘𝘅𝗲𝗺𝗽𝗹𝗲 : Si on te donne la chaîne "𝐻𝑒𝑙𝑙𝑜", la fonction devrait retourner "𝑜𝑙𝑙𝑒𝐻".

// 💡 𝗜𝗻𝗱𝗶𝗰𝗲 : Pense à des méthodes JavaScript qui transforment les chaînes en tableaux. Un petit coup de manipulation et hop, tu obtiens ta chaîne inversée ! 😉

// 👉 𝗣𝗼𝘀𝘁𝗲 𝘁𝗮 𝘀𝗼𝗹𝘂𝘁𝗶𝗼𝗻 𝗲𝗻 𝗰𝗼𝗺𝗺𝗲𝗻𝘁𝗮𝗶𝗿𝗲, et voyons qui pourra résoudre ce défi le plus vite ! ⏱️

const reverseString = (string) => string.split("").reverse().join("");

console.log(reverseString("Hello"));

// 💡 𝗗𝗲́𝗳𝗶 :
// Écris une fonction en JavaScript qui prend un tableau de nombres et renvoie la somme de tous les nombres pairs du tableau.

// 📝 𝗘𝘅𝗲𝗺𝗽𝗹𝗲 :
// Si tu as le tableau [1, 2, 3, 4, 5, 6], la fonction devrait retourner 12 car 2 + 4 + 6 = 12.

// 🔧 𝗜𝗻𝗱𝗶𝗰𝗲 :
// Tu pourrais utiliser une boucle ou une méthode comme filter() pour sélectionner les nombres pairs, puis reduce() pour les additionner.

// Prête à relever le défi ? Hâte de voir ta solution ! 😄

// const evenSum = (array) => {
//   let sum = 0;
//   for (let i = 0; i<array.length; i++){
//     if(array[i]%2===0){
//         sum+= array[i]
//     }
//   }
//   return sum
// };
const evenSum = (array) => {
    let sum = 0;
    return array.filter((num) => num % 2 === 0).reduce((acc, curr) => acc + curr);
};

console.log(evenSum([1, 2, 3, 4, 5, 6]));

// 💡 𝗗𝗲́𝗳𝗶 :
// Écris une fonction en JavaScript qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.

// 📝 𝗘𝘅𝗲𝗺𝗽𝗹𝗲 :
// Pour la chaîne "Hello World", la fonction devrait retourner 3 (les voyelles sont e, o, o).

// 🔧 𝗜𝗻𝗱𝗶𝗰𝗲 :
// Tu peux utiliser une boucle pour parcourir la chaîne et vérifier si chaque caractère est une voyelle. Une méthode comme includes() pourrait être utile pour vérifier la présence d'une voyelle dans un ensemble de caractères.

// Hâte de voir ce que tu vas proposer ! 😊

// const countVowels = (string) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   let newArr = [];
//   for (const letter of string) {
//     if (vowels.includes(letter)) {
//       count++;
//       newArr.push(letter);
//     }
//   }
//   return [count, newArr];
// };
// const countVowels = (string) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//    return string
//     .split("")
//     .map((letter) => vowels.includes(letter))
//     .filter((vowels) => vowels).length;
// };

const countVowels = (string) => {
    const vowels = ["a", "e", "i", "o", "u"];
    string = string.split("");
    let object = {};
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (vowels.includes(letter)) {
            count++;
            if (!object[letter]) {
                object[letter] = 1;
            } else {
                object[letter]++;
            }
        }
    }
    // console.log(object);
    return [count, object];
};

console.log(countVowels("Hello World")); //la fonction devrait retourner 3 (les voyelles sont e, o, o)

// 💡 𝗗𝗲́𝗳𝗶 :
// Écris une fonction en JavaScript qui prend un tableau de chaînes de caractères et renvoie un tableau contenant uniquement les chaînes qui contiennent plus de trois caractères.

// 📝 𝗘𝘅𝗲𝗺𝗽𝗹𝗲 :
// Pour le tableau ["Hi", "Hello", "world", "JS", "programming"], la fonction devrait retourner ["Hello", "world", "programming"].

// 🔧 𝗜𝗻𝗱𝗶𝗰𝗲 :
// Tu peux utiliser la méthode filter() pour créer un nouveau tableau basé sur une condition qui vérifie la longueur de chaque chaîne.

// Hâte de voir ta solution ! 😊

const moreThanThreeChar = (array) => {
    return array.filter((elem) => elem.length > 3 //pas besoin de condition if car filter() le fait déjà et pas de.push() car filter() retourne déjà un tableau
    );
};


console.log(moreThanThreeChar(["Hi", "Hello", "world", "JS", "programming"]));

// 💡 𝗗𝗲́𝗳𝗶 :
// Écris une fonction en JavaScript qui prend un tableau de nombres et retourne un tableau avec chaque nombre multiplié par deux.

// 📝 𝗘𝘅𝗲𝗺𝗽𝗹𝗲 :
// Pour le tableau [1, 2, 3, 4, 5], la fonction devrait retourner [2, 4, 6, 8, 10].

// 🔧 𝗜𝗻𝗱𝗶𝗰𝗲 :
// Tu peux utiliser la méthode map() pour créer un nouveau tableau basé sur une transformation de chaque élément.

// Hâte de voir ta solution ! 😊

const doubleArray = (array) => {
    return array.map((elem) => elem * 2);
};

console.log(doubleArray([1, 2, 3, 4, 5])); //[2, 4, 6, 8, 10]

// 1. Filtrer les Nombres Positifs
// Écris une fonction qui prend un tableau de nombres et retourne un tableau contenant uniquement les nombres positifs.
const positifNumber = (array) => array.filter((number) => number > 0);
console.log(positifNumber([-1, 2, -3, 4, -5]));

// 2. Compter les Lettres dans une Chaîne
// Écris une fonction qui prend une chaîne de caractères et retourne un objet où chaque propriété est une lettre et sa valeur est le nombre d'occurrences de cette lettre dans la chaîne. Ignore les espaces.

const countLetter = (string) => {
    let letter = {};
    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char !== " ") {//ici on ignore les espaces
            if (!letter[string[i]]) { //on peut remplacer if(!letter[string[i]] par if (!letter[char])
                letter[string[i]] = 1;
            } else {

                letter[string[i]]++;
            }
        }
    }
    return [letter];
};

console.log(countLetter("Hello World")); // Cela devrait retourner { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
console.log(countLetter("OpenAI ChatGPT")); // Cela devrait retourner { o: 1, p: 2, e: 1, n: 1, a: 3, i: 1, c: 1, h: 1, t: 2, g: 1 }

// 3. Inverser un Tableau
// Écris une fonction qui prend un tableau et retourne un nouveau tableau avec les éléments dans l'ordre inverse.
const reverseArray = (array) => {
    return array.reverse()
};
console.log(reverseArray([1, 2, 3, 4, 5])); // Cela devrait retourner [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c', 'd'])); // Cela devrait retourner ['d', 'c', 'b', 'a']
console.log(reverseArray([true, false, true])); // Cela devrait retourner [true, false, true]
console.log(reverseArray([])); // Cela devrait retourner [] (un tableau vide)
console.log(reverseArray([1]));

// 4. Trouver le Maximum
// Écris une fonction qui prend un tableau de nombres et retourne le plus grand nombre du tableau.
const maxValue = (array) => Math.max(...array)

console.log(maxValue([1, 2, 52, 789, 43, 1525, 15]))

// 5. Concaténer des Chaînes
// Écris une fonction qui prend un tableau de chaînes de caractères et retourne une seule chaîne qui est la concaténation de toutes les chaînes du tableau, séparées par des espaces.

const concatString = (array) => {
    return array.join(" ");
};

// Tests
console.log(concatString(["Hello", "World"])); // Cela devrait retourner "Hello World"
console.log(concatString(["OpenAI", "ChatGPT", "rocks"])); // Cela devrait retourner "OpenAI ChatGPT rocks"
console.log(concatString(["I", "love", "coding"])); // Cela devrait retourner "I love coding"
console.log(concatString([])); // Cela devrait retourner "" (une chaîne vide)
console.log(concatString(["SingleWord"])); // Cela devrait retourner "SingleWord" (une seule chaîne)
