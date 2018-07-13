function mostrar()
{
	  var numeroUno
	  var numeroDos
	  var resultado
	  var suma

	  numeroUno = prompt("ingrese un numero");
	  numeroDos = prompt("ingrese un numero");
	  numeroUno = parseInt(numeroUno)
	  numeroDos = parseInt(numeroDos)
	  suma = numeroUno + numeroDos
	  if(numeroUno == numeroDos )
	  {
 
	  	alert(  numeroUno +"  " +       numeroDos   )
	  }


	  else if ( numeroUno > numeroDos )
	  	{ 

	  		resultado= numeroUno / numeroDos
	  		alert(resultado)

	  	}



	  		else if (numeroUno < numeroDos)
	  		{


	  			resultado = numeroUno + numeroDos
	  			if(resultado< 50 )
	  				{ 

	  					alert(" la suma es " + resultado + " y es menor a 50")
	  				}

	  			
	  				else
	  				{


	  					alert(resultado);
	  				}
	  		
	  		}



	  




} 
