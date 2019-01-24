let selectNumber = document.querySelector('.selectNumber')
let table81 = selectNumber.querySelector('.table81')
let tableNumber = selectNumber.querySelector('.tableNumber')
let numberForm = [
    [1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18],
    [19,20,21,22,23,24,25,26,27],
    [28,29,30,31,32,33,34,35,36],
    [37,38,39,40,41,42,43,44,45],
    [46,47,48,49,50,51,52,53,54],
    [55,56,57,58,59,60,61,62,63],
    [64,65,66,67,68,69,70,71,72],
    [73,74,75,76,77,78,79,80,81]
]
function createForm() {
    for(let i = 0; i < numberForm.length; i++) {
        let tr = document.createElement('tr')
        let row = numberForm[i]
        //console.log(row)
        for(let j = 0; j < row.length; j++) {
            let td = document.createElement('td')
            td.textContent = row[j]
            td.className = row[j]
            td.addEventListener('click', tdEvent)
            tr.appendChild(td)
        }
        table81.appendChild(tr)
    }
}



let a = 0;


function tdEvent() {
    tableNumber.innerHTML = ''
    let showArray = []
    //console.log(this.textContent)
    let clickNumber = parseInt(this.textContent)
    //console.log(clickNumber)

    showMessage(clickNumber)

    for(let i = 0; i < 125; i++) {
        a = i * 80 + clickNumber;
        
        if(a < 10000) {

            if(a < 1000) {
                let str = a.toString()
                //console.log(str)
                let newArray = str.split('')
                //console.log(newArray);
                while(newArray.length < 4) {
                    newArray.unshift(0)
                }
                a = newArray.join('') 
            }
            showArray.push(a)
        }else {
            return
        }
    }
    //console.log(showArray)

    
    for(let i = 0; i < showArray.length; i++) {
        let td = document.createElement('td')
        td.textContent = showArray[i]
        tableNumber.appendChild(td)
    }
    
    
}



window.onload = function() {
    createForm()
}