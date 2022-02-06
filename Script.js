const draggables = document.querySelectorAll('.values')
const contents = document.querySelectorAll('.table_content')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })

  contents.forEach(content =>{
    content.addEventListener('dragover', e =>{
      e.preventDefault()
      const draggable =document.querySelector('.dragging')
      content.appendChild(draggable)
    })
})
  
})

