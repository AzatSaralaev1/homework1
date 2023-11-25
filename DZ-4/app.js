//ДЗ-1

const request = new XMLHttpRequest()
request.open('GET', 'data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()

request.addEventListener('load', () => {
    const data = JSON.parse(request.response)
    document.querySelector('.name0').innerHTML = data[0].name
    document.querySelector('.age0').innerHTML = data[0].age

    document.querySelector('.name1').innerHTML = data[1].name
    document.querySelector('.age1').innerHTML = data[1].age

    document.querySelector('.name2').innerHTML = data[2].name
    document.querySelector('.age2').innerHTML = data[2].age

    document.querySelector('.name3').innerHTML = data[3].name
    document.querySelector('.age3').innerHTML = data[3].age

    document.querySelector('.name4').innerHTML = data[4].name
    document.querySelector('.age4').innerHTML = data[4].age

    document.querySelector('.name5').innerHTML = data[5].name
    document.querySelector('.age5').innerHTML = data[5].age
})

//ДЗ-2

const request2 = new XMLHttpRequest()
request2.open('GET', 'data2.json')
request2.setRequestHeader('Content-type', 'application/json')
request2.send()

request2.addEventListener( 'load', () => {
    console.log(JSON.parse(request2.response))
})