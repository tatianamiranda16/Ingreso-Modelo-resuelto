function mostrar() {
    /*Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros
    (validar entre 0 y 250) , el sexo.
    (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
    El promedio de las alturas totales.
    La altura más baja y el sexo de esa persona.
    La cantidad de muheres que su altura supere los 190 centimetros.*/

    var altura;
    var sexo;
    var contador;
    var acumulador;
    var promedio;
    var alturaBaja;
    var alturaBajasexo;
    var contadorMujeresAltas;

    // tambien se puede crear una variable para solo sacar la cantidad de interraciones a sacar y solo se cambia ese numero
    contador = 0;
    acumulador = 0;
    contadorMujeresAltas = 0;
    // de forma while
    while (contador < 3) {
        //validacion
        altura = prompt("Ingrese la altura");
        altura = parseInt(altura);
        // tiene que ser si o si || o solo entra al 250 o al 0
        while (isNaN(altura) == true || altura < 0 || altura > 250) {
            altura = parseInt(prompt("Error.Ingrese la altura"));
            altura = parseInt(altura);
        }  //es && por el que tiene que ser entre este y ese
        sexo = prompt("Ingresar sexo");
        while (isNaN(sexo) == false || sexo != "f" && sexo != "m") {
            sexo = prompt("error ingresar sexo de nuevo");

        }// para chequear que este correcto y siempre adentro del while
        console.log(sexo);
        console.log(altura);

        // como es el flag, al ya tener contador es mas facil usarlo
        if (altura < altauraBaja || contador == 0) {
            alturaBaja = altura;
            alturaBajasexo = sexo;
        }

        if(sexo == "f" && altura > 190 )
        {
            contadorMujeresAltas++;
        }// acumula de las validaciones
        acumulador = acumulador + altura;
        
        contador++;
        
    }

// la buena forma de verificar si anda el promedio es 30 170 100, su promedio es 100 al saberlo ya se sabia 

    // final del while principal el promedio 
    promedio = acumulador / contador;
    console.log(promedio);
    alert("El promedio de las alturas totales" + promedio+".La altura más baja y el sexo de esa persona." + alturaBaja +" y " +alturaBajasexo+ "La cantidad de muheres que su altura supere los 190 centimetros."+ contadorMujeresAltas);
    

}

    /* de forma en for
    for(contador =0;contador<5; contador++)*/
    /*altura =prompt("Ingrese la altura");
     altura = parseInt(altura);
     // tiene que ser si o si || o solo entra al 250 o al 0
     while (isNaN(altura) || altura <0 || altura >250  )
    {
     altura =parseInt(prompt("Error.Ingrese la altura"));
     altura = parseInt(altura); 
    }  //es && por el que tiene que ser entre este y ese
     sexo = prompt("Ingresar sexo");
     while(isNaN(sexo)==false || sexo != "f" && sexo!="m")
    {
       sexo = prompt("error ingresar sexo de nuevo");
    
    }// para chequear que este correcto
    console.log(sexo);
    console.log(altura);*/



