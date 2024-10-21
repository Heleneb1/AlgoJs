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
//     const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     word = word.toLowerCase().split("");
//     for (const letter of word) {
//         if (vowels.includes(letter)) {// "Est-ce que les voyelles contiennent cette lettre ?" est ce que le le pannier contient une banane const fruits = ["pomme", "banane", "orange"];
// console.log(fruits.includes("banane")); // true
//             count++;
//         }
//     }
//     return count;
// };



// . Compter les voyelles dans un tableau
// Si tu veux créer une fonction qui retourne non seulement le nombre total de voyelles, mais aussi un tableau contenant le nombre de chaque voyelle, tu pourrais faire quelque chose comme ça :


const countVowels = (word) => {
    const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    word = word.toLowerCase();

    for (const letter of word) {
        if (vowels.hasOwnProperty(letter)) {// Si la lettre est une voyelle hasOwnProperty() renvoie true
            vowels[letter]++;
        }
    }

    return vowels; // Renvoie un objet avec le nombre de chaque voyelle
};

console.log(countVowels("Bonjour"));
console.log(countVowels("HEllOo"));
console.log(countVowels("test"));

// Exercice 5 : Trouver les chiffres pairs dans un tableau
// Écris une fonction en JavaScript qui prend un tableau de nombres et retourne un nouveau tableau contenant uniquement les chiffres pairs.

// Exemple :
// Entrée : [1, 2, 3, 4, 5, 6]

// Sortie : [2, 4, 6]

// Entrée : [10, 15, 20, 25, 30]

// Sortie : [10, 20, 30]

// Indice : Tu peux utiliser une boucle pour parcourir le tableau et vérifier si chaque nombre est pair.

const findEvenNumbers = (num) => {
    let newArr = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            newArr.push(num[i]);
        }
    }
    return newArr;
};
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // Devrait afficher [2, 4, 6]
console.log(findEvenNumbers([10, 15, 20, 25, 30])); // Devrait afficher [10, 20, 30]
console.log(findEvenNumbers([1, 3, 5, 7, 9])); // Devrait afficher []  

const largestNumber = (arr) => {
    if (arr.length === 0) return "tableau vide"; // Gérer le cas des tableaux vides
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) { // Commencer à 1 pour éviter de comparer avec le premier élément
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    return num;
};

const maximum = (arr) => {
    if (arr.length === 0) return "tableau vide"; // Gérer le cas des tableaux vides
    return Math.max(...arr);
};

console.log(largestNumber([3, 5, 7, 2, 8])); // 8
console.log(largestNumber([10, 20, 5, 15])); // 20
console.log(largestNumber([])); // undefined

console.log(maximum([3, 5, 7, 2, 8])); // 8
console.log(maximum([10, 20, 5, 15])); // 20
console.log(maximum([])); // undefined

// Exercice 7 : Supprimer les doublons d'un tableau
// Écris une fonction en JavaScript qui prend un tableau de nombres et retourne un nouveau tableau avec tous les doublons supprimés.

// Exemple :
// Entrée : [1, 2, 2, 3, 4, 4, 5]

// Sortie : [1, 2, 3, 4, 5]

// Entrée : [10, 20, 20, 30, 30, 30]

// Sortie : [10, 20, 30]

// Indice : Tu peux utiliser un tableau ou une autre structure de données pour vérifier si un élément a déjà été ajouté.

// Essaie-le, et comme d'habitude, fais-moi signe si tu as besoin d'aide ou si tu veux vérifier ton approche ! 😊

// const noDouble = (arr) => {
//     const newArr = [];
//     for (const num of arr) {
//         if (!newArr.includes(num)) {
//             //Vérifie si num n’est pas déjà dans newArr en utilisant !newArr.includes(num)
//             newArr.push(num);
//         }
//         console.log(newArr);
//     }
// };
//ou
const noDouble = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {// Si l'élément n'est pas déjà dans le tableau
            newArr.push(arr[i]);//on l'ajoute
        }
    }
    return newArr;
};
//ou
// const noDouble = (arr) => [...new Set(arr)];
// // console.log(noDouble())
console.log(noDouble([1, 2, 2, 3, 4, 4, 5]));
console.log(noDouble([10, 20, 20, 30, 30, 30]));
console.log(noDouble([]));

//TODO faire un exo forEach 

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
// const sumOfSquares = (array) => {
//   return array.map((num) => Math.pow(num,2)).reduce((acc,curr)=>acc +curr,0);
// };
const sumOfSquares = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        let pow = Math.pow(array[i], 2);
        console.log(pow);
        count += pow;
    }
    console.log(count);
    return count;
};

console.log(sumOfSquares([1, 2, 3])); // Devrait afficher 14

// Exercice : Trouver les nombres pairs et impairs
// Objectif : Écris une fonction qui prend un tableau de nombres et utilise forEach() pour séparer les nombres pairs et impairs dans deux tableaux différents. La fonction doit ensuite afficher les deux tableaux séparément.

// Exigences :
// Utilise la méthode forEach() pour parcourir chaque nombre du tableau.
// Si un nombre est pair, ajoute-le au tableau des nombres pairs.
// Si un nombre est impair, ajoute-le au tableau des nombres impairs.
// À la fin, affiche les deux tableaux.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenOrOdd = (numbers) => {
    let even = [];
    let odd = [];
    numbers.forEach((num) => {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    });

    // Affichage des tableaux séparément
    console.log("Nombres pairs :", even);
    console.log("Nombres impairs :", odd);
};

// Appel de la fonction
evenOrOdd(numbers);

// Exercice : Compter les occurrences de chaque élément
// Objectif : Écris une fonction en JavaScript qui prend un tableau de nombres ou de chaînes de caractères et utilise forEach() pour compter le nombre d'occurrences de chaque élément. La fonction doit ensuite afficher un objet avec chaque élément et son nombre d'occurrences.

// Exigences :
// Utilise la méthode forEach() pour parcourir chaque élément du tableau.
// Mets à jour un objet pour compter combien de fois chaque élément apparaît.
// À la fin, affiche l'objet contenant les éléments et leur nombre d'occurrences.

// // Exemple d'entrée
//TODO refaire avec une boucle for
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

const countFruits = (items) => {
    let object = {};
    items.forEach((item) => {
        if (object[item]) {
            object[item]++;
        } else {
            object[item] = 1;
        }
    });
    return object
};
console.log(countFruits(items));
// Sortie attendue :
// { apple: 3, banana: 2, orange: 1 }

// Exercice 1 : Somme des multiples de 3 et 5
// Écris une fonction qui prend un nombre entier n et retourne la somme de tous les multiples de 3 et 5 inférieurs ou égaux à n.

// Entrée : 10
// Sortie : 23 (car 3 + 5 + 6 + 9 + 10 = 23)
// Exercice 1 : Somme des multiples de 3 et 5
// Écris une fonction qui prend un nombre entier n et retourne la somme de tous les multiples de 3 et 5 inférieurs ou égaux à n.

// Entrée : 10
// Sortie : 23 (car 3 + 5 + 6 + 9 + 10 = 33)

const multipleOfThreeSum = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) { // Parcourir tous les nombres de 0 à n
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(multipleOfThreeSum(10)); // 33
console.log(multipleOfThreeSum(20)); // 98
console.log(multipleOfThreeSum(100)); // 2418


// Exercice 2 : Inverser les mots dans une phrase
// Écris une fonction qui prend une chaîne de caractères et retourne cette chaîne avec les mots inversés.

// Entrée : "Bonjour tout le monde"
// Sortie : "monde le tout Bonjour"

const inverseWord = (string) => string.split(" ").reverse().join(' ')



console.log(inverseWord("Bonjour tout le monde"))

// Exercice 3 : Filtrer les mots courts
// Écris une fonction qui prend un tableau de mots et retourne un nouveau tableau contenant seulement les mots de plus de 3 lettres.

// Entrée : ["chat", "de", "chien", "a"]
// Sortie : ["chat", "chien"]

const moreThanThree = (array) => {
    let newArr = [];
    array.forEach((element) => {
        if (element.length > 3) {
            newArr.push(element);
        }
    });
    return newArr;
};

console.log(moreThanThree(["chat", "de", "chien", "a"]));

// Exercice 4 : Produit de tous les éléments
// Écris une fonction qui prend un tableau de nombres et retourne le produit de tous les éléments du tableau.

// Entrée : [1, 2, 3, 4]
// Sortie : 24 (car 1 * 2 * 3 * 4 = 24)
// Exercice 5 : Maximum et minimum dans un tableau
// Écris une fonction qui retourne à la fois le plus grand et le plus petit nombre d'un tableau dans un tableau de deux éléments.

// Entrée : [12, 5, 7, 9, 21, 3]
// Sortie : [3, 21]


// Exercice 4 : Produit de tous les éléments
// Écris une fonction qui prend un tableau de nombres et retourne le produit de tous les éléments du tableau.

// Entrée : [1, 2, 3, 4]
// Sortie : 24 (car 1 * 2 * 3 * 4 = 24)

const arrProduct = (arr) => {
    return arr.reduce((acc, curr) => (acc * curr))

}
console.log(arrProduct([1, 2, 3, 4]))//24

const arrProducts = (arr) => {
    let product = 1;
    for (let i = 1; i < arr.length; i++) {
        product *= arr[i];

    }
    return product;
};
console.log(arrProducts([1, 2, 3, 4, 5]));//120

// Exercice 5 : Maximum et minimum dans un tableau
// Écris une fonction qui retourne à la fois le plus grand et le plus petit nombre d'un tableau dans un tableau de deux éléments.

const minMax = (array) => {

    const min = Math.min(...array);//Math.min() renvoie le plus petit nombre d'une liste d'arguments utiliser le spread operator pour décomposer le tableau
    const max = Math.max(...array);
    return [min, max];
};

console.log(minMax([12, 5, 7, 9, 21, 3]));
// Entrée : [12, 5, 7, 9, 21, 3]
// Sortie : [3, 21]
//ou
const searchMinMax = (array) => {
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }
    return [min, max];
};

console.log(searchMinMax([12, 5, 7, 9, 21, 3, 1, 42]));