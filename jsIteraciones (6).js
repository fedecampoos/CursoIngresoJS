function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero
	var suma
	var promedio

	suma = prompt("ingrese un  numero ")
	while(contador< 5)
	{

		numero=prompt("ingrese un numero");
		contador ++ 
		console.log(acumulador)
		acumulador= acumulador + parseInt(numero);		

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN