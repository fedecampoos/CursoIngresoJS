function mostrar()
{
		var notas;
		var sexo;
		var alumnos;
		var promedio;
		var contador;
		var edad ;
		contador = 0
		var respuesta = "si"
		var cantidadDeNotas

		

		
			
			


		
		alumnos = prompt("ingrese el nombre del alumno")
		while (contador > 2 )
			{
				alumnos= prompt("no ingrese mas") 
				 
				

			 edad=prompt("ingrese su edad")
			while(edad < 0 || edad > 100  )
				{

				edad = prompt("reingrese su edad")
				edad = parseInt(edad)

					}
				notas=prompt("reingresar nota");
			while(isNa(notas) || notas < 0 || notas >10  )
			{

				notas=prompt("reingresar nota");
				notas=parseInt(notas);
				cantidadDeNotas ++

			}
			
			sexo=prompt("ingresar sexo");

			while(sexo != "f" && sexo !="m" )
			{
				sexo=prompt("ingresar sexo");


		}


		
		


		
    }

    promedio = notas/6



}



