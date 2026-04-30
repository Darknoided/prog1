console.log("sdakjhasdkj");


const containerAdicionar = document.querySelector('.adicionar')
const inputAdicionar = document.querySelector('input')
const btAdicionar = document.querySelector('button')
const containerTarefas = document.querySelector('.tarefas')
const templateTarefa = document.querySelector('template')

function criarTarefa(texto) {
    if (texto.trim() === '') return
    const tarefa = templateTarefa.content.cloneNode(true)
    const spanTitle = tarefa.querySelector('span')
    const btExcluir = tarefa.querySelector('button')
    spanTitle.textContent = texto
    containerTarefas.appendChild(tarefa)
    btExcluir.onclick = () => btExcluir.closest('.tarefa').remove()
}

btAdicionar.onclick = function () {
    const texto = inputAdicionar.value.trim()
    criarTarefa(texto)
    inputAdicionar.value = ''
}

inputAdicionar.addEventListener('keypress', (evt) => {
    if (evt.key !== 'Enter') return;
    btAdicionar.click()
})