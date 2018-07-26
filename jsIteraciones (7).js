function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero
	
	while( respuesta == "si")
	{

		numero=prompt("ingrese un numero");
		contador ++ 
		respuesta=prompt("queres segir")
		console.log(acumulador)
		acumulador= acumulador + parseInt(numero);	
		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN