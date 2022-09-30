

const condicionalSubmit = (condição, referencia, state) => {
    if(condição < 1 || condição > 898){
        state(' ')
        alert("Não a mais pokemon!")
        referencia.focus()
        
        return
    }
}

export const condicionalClick = (condicao, referencia) => {
    if(condicao){
        alert("Não a mais pokemon!")
        referencia.focus()
        return
    }
}

export default condicionalSubmit;
