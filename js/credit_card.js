function isCardNumber(num) {
    const strNum = `${num}`;
    const pattern = new RegExp("[0-9]{16}", "g");
    const card = strNum.replaceAll(" ", "").match(pattern) !== null ? strNum.replaceAll(" ", "").match(pattern)[0] : "0";
    return [card, pattern.test(strNum.replaceAll(" ", ""))];
}

function validNumber(num) {
    const valid = isCardNumber(num);
    if (!valid[1]) {
        return false;
    }
    let twoNum = valid[0].split("");
    for (let i = twoNum.length - 1; i > -1; i -= 2) {
        let tmpNum = twoNum[i] * 2;
        twoNum[i] = `${tmpNum}`;
        if (tmpNum >= 10) {
            const numArray = `${tmpNum}`.split("");
            twoNum[i] = `${parseInt(numArray[0]) + parseInt(numArray[1])}`;
        }
    }
    let sum = 0;
    twoNum.forEach(ind => {
        sum += parseInt(ind);
    });
    return `${sum}`.endsWith("0");
}

console.log(validNumber("4102080860435620"));
console.log(validNumber("4102080880435620"));