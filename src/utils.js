// Your code here
export function pointsForWord(word) {
    const letters = word.split('')
    return letters.reduce((total, letter) => {
       return total += /[aeiou]/i.test(letter) ? 1 : 2;
    }, 0)
}