// reverseWords.test.js
const reverseWords = require('../exos10');  // Importe la fonction depuis le fichier où elle est définie
const findShortestWordLength = require('../exos10');  // Importe la fonction depuis le fichier où elle est définie


//utilsation de jest : Créer un dossier __tests__puis le fichier exos10.tests.js
// importe la fonction à tester depuis le fichier où elle est définie
// import reverseWords from '../exos10';
//npm install jest --save-dev
//npm test
//modifier le package.json pour ajouter un script de test "test": "jest"

// test('Test reverseWords function', () => {
//     expect(reverseWords("Hello World")).toBe("olleH dlroW");
//     expect(reverseWords("Coding is fun")).toBe("gnidoC si nuf");
//     expect(reverseWords("Jest is awesome")).toBe("tseJ si emosewa");
// });

test('Test findShortestWordLength function', () => {
    expect(findShortestWordLength("The quick brown fox jumped over the lazy dog")).toBe(3);
    expect(findShortestWordLength("Hello world")).toBe(5);
    expect(findShortestWordLength("JavaScript is awesome")).toBe(2);
});