


function showMessage(n) {
  //console.log(remainder_value)
  let request = new XMLHttpRequest()
  request.open('get', './message.json')
  request.send()
  request.onreadystatechange = () => {
    if(request.readyState === 4) {
      //console.log(request.status)
      if(request.status >= 200 && request.status < 300) {
        //console.log(request.responseText)

        let object = window.JSON.parse(request.responseText)
        //console.log(object)

        let textObject = object[n]
        //console.log(textObject)

        explanation.innerHTML = ''

        let h3 = document.createElement('h3')
        h3.className = 'explanationNumber'

        h3.textContent = '数字：' + n

        explanation.appendChild(h3)

        Object.keys(textObject).forEach(function(key) {
          let p = document.createElement('p')
          let divRight = document.createElement('div')
          let divLeft = document.createElement('div')


          divRight.className = 'explanationText'
          divRight.textContent = textObject[key]

          divLeft.textContent = key + "："

          p.appendChild(divLeft)
          p.appendChild(divRight)

          explanation.appendChild(p)
        })


      }else if(request.status >= 400) {
        console.log('failure')
      }
    }
  }
}