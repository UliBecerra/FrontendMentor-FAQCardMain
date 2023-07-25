const quests = document.querySelectorAll('.question')
  console.log(quests)
  quests.forEach((quest, index) => quest.addEventListener('click', (e) =>{
    console.log('hola')
    console.log(index)
    quest.classList.toggle('select-question')
    console.log()
    document.getElementsByTagName('p')[index].classList.toggle('select-p')
    console.log(document.getElementsByTagName('p')[index])
  }))

/* quest.addEventListener('click', (e) =>{
  console.log('hola')
}) */