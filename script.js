const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");
/*
Por cada boton que se le da click a un boton en la calculadora 
la funcion la va a escuchar y mostrara en la pantalla. 
*/
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;

        /*Con la funcion de limpiar si se da click en el boton con id limpiar se retornara a la pantalla el 0
        limpiando la pantalla de otro caracteres ya escritos */
        if(boton.id==="limpiar"){
            pantalla.textContent = "0";
            return
        }
        /*Con la funcion borrar se van a ir borrando de uno en uno los
        números de derecha a izquierda */
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!"){
                pantalla.textContent = "0"
            }else {
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return
        }  

            /*El botn con el id igual ejecuta la funcion propia del lenguaje JS
            eval la cual nos muestra el resultado de la suma, resta, multiplicacion y division
            en la pantalla de la calculadora */   
            if(boton.id === "igual"){
                try {
                    pantalla.textContent = eval(pantalla.textContent);
                } catch {
                    pantalla.textContent = "¡Error!"
                }
                return;
            
            }
      
            /*Concatenamos los números que se clickean y los va poniendo en la pantalla*/
        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!"){
            pantalla.textContent = botonOn;
        } else{
            /*Lo que hace es comprobar que si hay un operador en pantalla reemplazarlo y/o no dejar poner otro */
            var ultimoCaracter = pantalla.textContent.slice(-1);
            var operadores = ['+', '-', '*', '/'];
            if (operadores.includes(ultimoCaracter) && operadores.includes(botonOn)) {
                pantalla.textContent = pantalla.textContent.slice(0, -1) + botonOn;
            } else {
                pantalla.textContent += botonOn;
            }
        }

       
    })

}) 