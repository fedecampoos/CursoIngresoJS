#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numeros;
    int contadorPositivos = 0;
    int contadorNegativos = 0;
    int acumuladorPositivos = 0;
    int acumuladorNegativos = 0;
    int contadorCeros = 0;
    int contadorDePares = 0;
    float promedioPositivos;
    float promedioNegativos;
    int maximo;
    int flag = 0;
    int contador = 0;
    char respuesta = 's';



    printf("quiere continuar");
    fflush(stdin);
    scanf("%c", &respuesta);


    while (respuesta != 'n')
    {
    contador++;
    printf("ingrese un numero");
    scanf("%d", &numeros);


        if (numeros > 0)
        {

        contadorPositivos++;
        }
        else

        {
        contadorNegativos++;

        }

    printf("quiere continuar?");
    fflush(stdin);
    scanf("%c", &respuesta);

    }
    printf("los negativos es :%d ",contadorNegativos);
    printf("los positivos es:%d",contadorPositivos);



    return 0;
}
    do
    {
          printf("ingrese un numero");
          scanf("%d", &numeros);
          if(numero > 0)
          {
              acumuladorPositivos=acumPositivos+numero;
              contadorPositivo++;
          }
          else
          {
              if(numero <0 )
              {
                  acumularNegativos+numero;
                  contadorNegativos++;
            }
            else
            {
                contadorCeros++;
            }
          }
          if(numeros%2==0)
          {
              contadorDePares++,
          }
          if(flag==0 || numeros>maximo)
          {
              maximo = numeros;
              flag = 1;

          }

          printf("quiere continuar?  s/n");
          fflush(stdin);
          scanf("%c", &respuesta);

    }while(respuesta == 's')
    promedioPostivos = (float)acumuladorPositivos/contadorPositivos

    promedioNegativos = (float)acumuladorNegativos/cotnadorNegativos

    printf("el acumulado de positivos es: %d\n", acumuladorPositivos)
    printf("el acumulado de negativos es: %d\n", acumuladoNegativos)
    printf("la cantidad de negativos es: %d\n", cantidadPositivos)
    printf("la cantidad de positivos es: %d\n", cantidadNegativos)
    printf("la cantidad de ceros es: %d\n", contadorCeros)
    printf("el promedio de los positivos es: ", contadorCeros)
