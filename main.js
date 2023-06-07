const display = document.querySelector(".display")
const num = document.querySelectorAll('.num')
const operator = document.querySelectorAll('.operator')

num.forEach(btn => {
    btn.addEventListener("click", () => {
        const numPress = btn.textContent

        if (display.textContent==='0' || display.textContent === "Error!") {
            display.textContent = numPress
        }

        else {
              display.textContent += numPress
        }
            console.log(numPress)
    })
})

operator.forEach(btn => {
    btn.addEventListener("click", () => {
        const operatorPress = btn.textContent
        display.textContent += ' ' + operatorPress + ' '
            
            console.log(operatorPress)
    })
})

function clearContent() {
    display.textContent = '0'
    console.clear()
}

function deleteContent() {
    if (display.textContent.length === 1 || display.textContent === "Error!") {
        display.textContent = '0'
        console.clear()
    }
    else {
        display.textContent = display.textContent.slice(0, -1)
    }
    
}

function resultContent() {
    try {
          display.textContent = eval(display.textContent)
    } catch (error) {
        display.textContent = "Error!"
    }
}
