export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter+=count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () =>setCounter(10))
  setCounter(10)
  element.style.userSelect = "none"
}
//useage
//setupCounter(document.querySelector('h1'))