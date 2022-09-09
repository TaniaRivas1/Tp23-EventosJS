window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let estadoSecreto= 0; 
    let letra= [];
    let tituloInput = document.querySelector('#titulo')

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    
    titulo.addEventListener('mouseover', ({target})=>{
        target.classList.toggle('fondoCoral')
    })

   
    tituloInput.addEventListener('keydown', (event) => {
        let mayuscula = event.key.toLowerCase()
    if(estadoSecreto===0&& mayuscula ==="s"){
        letra.push(event.key)
        estadoSecreto++
    }else{
     
        switch(estadoSecreto){
            case 1 : 
            if(mayuscula==="e"&& letra[0]=== "s"){
                letra.push(event.key)
                estadoSecreto++
            break;
            }
            
            case 2: 
            if(mayuscula==="c"&& letra[1]=== "e"){
                letra.push(event.key); 
                estadoSecreto++ 
              break;
              }
            case 3: 
            if(mayuscula==="r"&& letra[2]=== "c"){
                letra.push(event.key); 
                estadoSecreto++
              break; 
              }
            case 4 : 
            if(mayuscula==="e"&& letra[3]=== "r"){
                letra.push(event.key);   
                estadoSecreto++
              break; 
              }
            case 5: 
            if(mayuscula==="t"&& letra[4]=== "e"){
                letra.push(event.key); 
                estadoSecreto++
              break; 
              }
            case 6: 
            if(mayuscula==="o"&& letra[5]=== "t"){
                estadoSecreto =0; 
                alert("¡SECRETO MAGICO!"); 
                break;
              }
          
            default:
             estadoSecreto=0;
             break; 
        }

    }
    })
}
