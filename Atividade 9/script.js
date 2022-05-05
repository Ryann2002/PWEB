function getNumbers() {
    const num1 = document.getElementById("number1").value
    const num2 = document.getElementById("number2").value
    const num3 = document.getElementById("number3").value

    return [num1,num2,num3];
}


function getHighest() {
    const numbers = getNumbers();

    let highest = numbers[0];
    numbers.forEach(function (element) {
        if (element > highest) {
            highest = element;
        }
    })

    alert('Maior: ' + highest)

}

function getOrdered() {
    const numbers = getNumbers();
    const orderedNumbers = numbers.sort(function (a,b) {
        return a - b;
    })
    alert(orderedNumbers);

}