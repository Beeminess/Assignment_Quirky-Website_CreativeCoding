
//Below is bee button move//

const beeButton = document.getElementById('bee-button')
const OFFSET = 100

document.addEventListener('mousemove', (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonBox = beeButton.getBoundingClientRect()
  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
  const horizontalOffset = buttonBox.width / 2 + OFFSET
  const verticalOffset = buttonBox.height / 2 + OFFSET
  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(
      buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
      buttonBox.y + verticalOffset / verticalDistanceFrom * 10
    )
  }
})

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect()
  const buttonBox = beeButton.getBoundingClientRect()

  if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET
  }
  if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET
  }
  if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET
  }
  if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET
  }

  beeButton.style.left = `${left}px`
  beeButton.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}


//Below is BG text run//

document.querySelectorAll('.outer').forEach(el => {
	let content = el.querySelector('.content');

	repeatContent(content, el.offsetWidth);

	let slider = el.querySelector('.loop');
	slider.innerHTML = slider.innerHTML + slider.innerHTML;
});

