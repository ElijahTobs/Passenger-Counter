let count = 0
let counter = document.getElementById("counter")
let entries = document.getElementById("entries")

counter.textContent = count

function increment() {
  count += 1
  counter.textContent = count
}
