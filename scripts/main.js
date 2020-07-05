const display = document.getElementById('')

function onClicKey(event){
    id = event.target.id
    value = event.target.value
    this.display.innerHTML = value
}
