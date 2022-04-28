const numBox = document.querySelector("input#num")
const dubBtn = document.querySelector("button#DoubleBtn")
const dubNum = document.querySelector("span#dubNum")

dubBtn.onclick = () => {
  let num = numBox.value
  let double = numBox.value*2
  dubNum.innerHTML = double
}