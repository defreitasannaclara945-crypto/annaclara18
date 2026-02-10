Algoritmo ContagemComIncremento
    Var
        inicio, fim, incremento, contador: inteiro

    Inicio
        Escreva("Digite o primeiro valor: ")
        Leia(inicio)

        Escreva("Digite o último valor: ")
        Leia(fim)

        Escreva("Digite o incremento: ")
        Leia(incremento)

        contador <- inicio

        Enquanto contador < fim faça
            Escreva(contador, " ")
            contador <- contador + incremento
        FimEnquanto

        Escreva("\nAcabou!")
    Fim
FimAlgoritmo
