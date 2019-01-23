
let rem = document.querySelector('.rem')

let dividend = rem.querySelector('.dividend')
let divisor = rem.querySelector('.divisor')
let count = rem.querySelector('.count')
let quotient = rem.querySelector('.quotient')
let remainder = rem.querySelector('.remainder')


let divisor_value = divisor.value


count.addEventListener('click', countEvent)

function countEvent() {
    let dividend_value = dividend.value
    if (!dividend_value) {
        return;
    }
    // console.log(dividend_value)
    // console.log(divisor_value)
    let quotient_value = Math.floor(dividend_value / divisor_value)
    // console.log(quotient_value)
    let remainder_value = dividend_value % divisor_value
    // console.log(remainder_value)
    quotient.value = quotient_value
    remainder.value = remainder_value
}