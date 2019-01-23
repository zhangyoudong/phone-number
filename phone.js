function $(selector) {
    return document.querySelector(selector)
}

$('.phoneCount').addEventListener('click', function() {
    let value = $('.phoneNumber').value
    let array = value.split('')
    //console.log(array)
    let sum = 0
    if(array.length !== 11) {
        alert('手机号错误')
        return
    }
    for(let i = 0; i < array.length; i++) {
        sum = sum + parseInt(array[i])
    }
    //console.log(sum)
    $('.phoneSum').value = sum
    
    let result = sum - 80

    if(result >= 0) {
        $('.phoneResult').value = result
    }
})