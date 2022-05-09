var currentValueWrapper = document.getElementById("currentValue")

var currentValue = 0


function decrement(){
    currentValue -= 1
    currentValueWrapper.innerHTML = currentValue
}
function increment(){
    currentValue += 1
    currentValueWrapper.innerHTML = currentValue
}