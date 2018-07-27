function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var negativo;
	var positivos;
	var acumulador;
	var cantidadDeCeros;
	var cantidadDePositivos;
	var cantidadDeNegativos;
	var acumulador;
	var cantidadDepares;
	var promedioPositivo;
	var promedioNegativo
	var diferencia
	promedioNegativo = 0 
	diferencia = 0
	promedioPositivo = 0
	cantidadDepares = 0
	cantidadDeNegativos= 0 
	cantidadDePositivos = 0
	cantidadDeCeros = 0;
	acumulador = 0;
	positivos= 0;
	negativo = 0;
	
	while(respuesta!="no")
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		


		if(numero<0)
		{

			negativo = negativo + numero
			cantidadDeNegativos++;

		}
		 else   (numero > 0)
		{
			positivos = positivos + numero
			cantidadDePositivos++;
		}
		if (cantidadDePositivos > 0 )
		{
		
			cantidadDePositivos; 

		}
		else (cantidadDeNegativos< 0 )
		{
			cantidadDeNegativos;
		}
		
		if (numero== 0)

		{

		
			cantidadDeCeros++

		}
		else (numero%2==0 && numero != 0 )
		{
			cantidadDepares++
		}








		respuesta = prompt("ingrese no para salir");
	}
	promedioPositivo= positivos/cantidadDePositivos 
	promedioNegativo= negativo/cantidadDeNegativos
	diferencia=positivos - negativo

		document.write("la suma de negativos"+ negativo );
		document.write("la suma de positivos"+ positivos);
		document.write("la cantidad de positivos"+ cantidadDePositivos);
		document.write("la cantidad de negativos"+ cantidadDeNegativos);
		document.write("la cantidad de ceros"+cantidadDeCeros);
		document.write("la cantidad de pares"+ cantidadDepares)
		document.write("el promedio de los positivos"+promedioPositivo);
		document.write("el promedio de los negativos"+promedioNegativo)
		document.write("la diferencia entre positivos y negativos"+diferencia)
}//FIN DE LA FUNCIÓNS