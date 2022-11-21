let inputText = document.querySelectorAll('.input-text')

console.log(inputText)

inputText.forEach(input => {
    input.addEventListener('change', () => {
        if(input.value != ""){
            input.classList.add('border')
        } else {
            input.classList.remove('border')
        }
    })
})