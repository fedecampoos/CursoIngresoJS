function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{

		case"Enero":
		case"Marzo":
		case"Mayo":
		case"Julio":
		case"Agosto":
		case"Octubre":
		case"Diciembre":
		alert(" tiene 31 días.");
		break;
		case"Febrero":
		alert("tiene 28 días. ");
		break;
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
		alert("tiene 31 días.")
		break;


	}
	



}//FIN DE LA FUNCIÓN