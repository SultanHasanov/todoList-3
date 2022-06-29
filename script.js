const input = document.getElementById('input')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
const total = document.getElementById('total')
let count = 0;

btn.addEventListener('click', (e) => {
    // const li = document.createElement('li')
    if(input.value === '' || count === 13) return
    createElementDelete(input.value)
    input.value = ''

})

function createElementDelete(value) {
    count++
    const li = document.createElement('li')
    li.className = 'li'
    li.textContent = value

    const btn2 = document.createElement('button')
    btn2.className = 'btn2'
    btn2.textContent = ' X '
    li.appendChild(btn2)

    btn2.addEventListener ('click', (e) => {
        count--
        total.textContent = count  
        result.removeChild(li)
    })

    const input2 = document.createElement("input");
    input2.setAttribute("type", "checkbox");
    li.prepend(input2)
    
    input2.addEventListener ('click', (e) => {
        li.classList.toggle('li-active')
    })

    total.textContent = count

    result.appendChild(li)
}