// //Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.

function  reverseString(str=prompt("Введите предложение или слово и я переверну его")){
    return str.split("").reverse().join("")
}
console.log(reverseString())
// Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.

function isPalindrome(str= prompt("Введите слово или предложения для проверки:")){

    let reversed = str.split("").reverse().join("")
    return `введений рядок ${str} ` + (str === reversed ? "є паліндромом":"не є паліндромом")
}

console.log(isPalindrome())

//Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.

function findGCD(a, b){

    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
        console.log(a,b)
    }
    return Math.abs(a);
}

console.log(findGCD (14,28))

