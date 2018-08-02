function mostrar()
{


	var numero
	var contador
	var contadorDePares
	
	contadorDePares=0;




	numero=prompt("ingrese un numero ")
	for(contador=1 ;contador < numero ;contador ++)

	{
		
			if (contador%2==0 && contador != 0 )
		 {
		 
		 	console.log(contador);
		 	contadorDePares++;
		 	
		 }

		 else 
		 
		  {
		  	break;
		  }
		  console.log(contadorDePares);
	}

}//FIN DE LA FUNCIÓN