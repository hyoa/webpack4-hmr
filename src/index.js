import './style.css'

const element = document.createElement('div');
element.innerHTML = 'Hello world. Try to edit me to see HMR running'
document.body.appendChild(element)

module.hot.accept()