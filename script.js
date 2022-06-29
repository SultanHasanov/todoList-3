const input = document.getElementById('input')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
const total = document.getElementById('total')
let i = 0;

btn.addEventListener('click', (e) => {
    // const li = document.createElement('li')
    if(input.value === '') return
    createElementDelete(input.value)
    input.value = ''

})

function createElementDelete(value) {
    i++
    const li = document.createElement('li')
    li.className = 'li'
    li.textContent = value

    const btn2 = document.createElement('button')
    btn2.className = 'btn2'
    btn2.textContent = ' X '
    li.appendChild(btn2)

    btn2.addEventListener ('click', (e) => {
        i--
        total.textContent = i  
        result.removeChild(li)
    })

    li.addEventListener ('click', (e) => {
        li.classList.toggle('li-active')
    })

    total.textContent = i

    result.appendChild(li)
}