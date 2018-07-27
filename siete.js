function mostrar()
{
		var notas;
		var sexo;
		var alumnos;
		var promedio;
		var contador;
		contador = 0

		alumnos=prompt("ingrese el nombre del alumno");

		while(contador > 3 )
			{
				alumnos= prompt("no ingrese mas") 
			}	

			notas= prompt("ingrese su nota")
			notas=parseInt(notas);

		while(notas < 0 || notas >10  )
		{

			notas=prompt("reingresar nota");
			notas=parseInt(nota);
			nota ++

		}

		while(sexo != "f" && sexo !="m" )
		{
			sexo=prompt("ingresar sexo");


		}


		respuesta=prompt("quiere seguir");




}
