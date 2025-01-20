const taskInput = document.getElementById('taskInput')
const addTaskButton = document.getElementById('addTaskButton')
const taskList = document.getElementById('taskList')

// Adicionando tarefa
addTaskButton.addEventListener('click', function () {
  const taskText = taskInput.value.trim()
  if (taskText !== '') {
    const li = document.createElement('li')
    li.textContent = taskText

    // Criando botão de remoção
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remover'
    removeButton.classList.add('remove-btn')
    removeButton.addEventListener('click', function () {
      li.remove()
    })

    // Criando a funcionalidade de marcar como concluído
    li.addEventListener('click', function () {
      li.classList.toggle('completed')
    })

    // Adicionando o botão de remoção à tarefa
    li.appendChild(removeButton)

    // Adicionando a tarefa à lista
    taskList.appendChild(li)

    // Limpando o campo de input
    taskInput.value = ''
  }
})

// Enabling Enter key to add task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTaskButton.click()
  }
})
