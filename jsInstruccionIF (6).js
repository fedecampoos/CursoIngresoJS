function mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;

	if(edad>=18 )
	{
     
    alert("usted es mayor de edad")

	}

    else if(edad >= 13 && edad<= 18)     
    {  


    alert("usted es adolecente")

    }

     else   
    {  


    alert("usted un niño")

    }

} 

//FIN DE LA FUNCIÓN