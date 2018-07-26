function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=="si")
	{

		contador ++
		numero=prompt("ingrese un numero");
		if(numero <0 )
		{

			negativo= negativo * parseInt(numero)

		}
		else
		{
			positivo= positivo + parseInt(numero)
		}

		respuesta=prompt("quiere continuar");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN