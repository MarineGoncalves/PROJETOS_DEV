const button = document.querySelector("#doar");
const modal1 = document.querySelector("#modal1")
const modal2 = document.querySelector("#modal2")





function doar(){
    modal1.showModal()
}

/*function enviar(){
  
    modal2.showModal()
}*/

function fechar(){
    modal2.close()
}

const $ = document.querySelector.bind(document);

$("#email").addEventListener('click', (e) => {
    $("#erroEmail").classList.remove('exibir')
   
  
    
})

$("#name").addEventListener('click', (e) => {
    $("#erroNome").classList.remove('exibir')
   
  
    
})

$("#valor").addEventListener('click', (e) => {
    $("#erroValor").classList.remove('exibir')
   
  
    
})

 $("form").addEventListener('submit' , (e) =>{
    e.preventDefault()
    console.log('submit');
    
    
    if($('#name').value ===""){
    $("#erroNome").innerText = "Nome obrigatório"
    $("#erroNome").classList.toggle('exibir')
    return;
    }
    else if($('#email').value === ""){
        $("#erroEmail").innerText = "E-mail obrigatório"
        $("#erroEmail").classList.toggle('exibir')
        
        return;
    }

    else if($('#valor').value === ""){
        $("#erroValor").innerText = "Valor obrigatório"
        $("#erroValor").classList.toggle('exibir')
        
        return;
    }

    

    else{
        

        modal1.close()
        
        modal2.showModal()
    
        
    }
    
})


