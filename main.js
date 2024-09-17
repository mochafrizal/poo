// document.title = 'mach'
// const body = document.body

// // body.append("hello");

// const h1 = document.createElement('h1');
// h1.textContent = "<marquee> ini h1 <marquee>"

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = '<marquee> aaaaa <marquee>'

// const nM = document.createElement('b')
// nM.innerText = '<marquee>bbbb <marquee>'

// body.append(h1)
// body.append(namaSaya)
// body.append(nM)

const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')


const defaultText = 'klik 1'
btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '20px'
btn1.style.background = 'blue'

function clickBu() {
 btn1.style.background = "red"
 const newText = document.createElement('p')
 newText.textContent = "apa kabar"
 body.append(newText)
}

function ubahText() {
    btn1.textContent = 'hihi'
}

function textOri() {
    btn1.textContent = defaultText
}