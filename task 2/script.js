function calculate() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let result;

    if (op == "+") {
        result = n1 + n2;
    }
    else if (op == "-") {
        result = n1 - n2;
    }
    else if (op == "*") {
        result = n1 * n2;
    }
    else if (op == "/") {
        if (n2 === 0) {
            result = "Cannot divide by zero!";
        } else {
            result = n1 / n2;
        }
    }
    else {
        result = "Invalid operator!";
    }

    document.getElementById("result").textContent = result;
}
