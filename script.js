function examinationAge(age) {
    if (isNaN(age) || age <= 0) {
        console.log("Дебил");
        return;
    }

    switch (age) {
        case age >= 18:
            console.log("Выпускаем");
            break;
        case age < 18:
            console.log("Выгоняем");
            break;
    }
}

let yearAge = +prompt("Введите ваш возраст:");
examinationAge(yearAge);

let num1 = +prompt("Первое число")
 let operator = prompt("Выберите знак")
 let num2 = +prompt("Второе чилсо")

 function toCalculate(a, b) {
     switch (operator) {
         case "+":
            alert(a + b)
            break;
       case "-":
        alert(a - b)
           break;
        case "*":
            alert(a * b)
           break;
         case "/":
            alert(a / b)
           break;
        default:
            break;
    }
}
 toCalculate(num1, num2)