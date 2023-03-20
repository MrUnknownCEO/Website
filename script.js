const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
	const triggerBottom = window.innerHeight / 5 * 4

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top

		if(boxTop < triggerBottom) {
			box.classList.add('show')
            }else {
             	box.classList.remove('show')
            }
		
	})
}

/*const boxes = document.querySelectorAll('.box')

//fire an event when we scroll
window.addEventListener('scroll', checkBoxes)//fucntion named checkBoxes to check the postion of each box

checkBoxes()

function checkBoxes() {
      const triggerBottom = window.innerHeight / 5 * 4

      boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top

            if(boxTop < triggerBottom) {
                  box.classList.add('show')
            }else{
                  box.classList.remove('show')
            }
      })
}*/

