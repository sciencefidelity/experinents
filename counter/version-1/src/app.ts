// Count-up that triggers on click of a button
// adjust speed and updateCount to change duration

"use strict"

const counters = document.querySelectorAll('h1')
const btn = document.getElementById('btn')
const speed = 200

btn.onclick = () => {
  counters.forEach(counter => {
    counter.innerText = '0'
    const updateCount = () => {
      const target = +counter.getAttribute('data-target')
      const count = +counter.innerText

      const inc = target / speed

      if(count < target) {
        counter.innerText = Math.ceil(count + inc).toString()
        setTimeout(updateCount, 10)
      } else {
        counter.innerText = target.toString()
      }
    }
    updateCount()
  })
}
