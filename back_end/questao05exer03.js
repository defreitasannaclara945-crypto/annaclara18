Algoritmo ContagemAteNumero
    Var
        numero, contador: inteiro

    Inicio
        Escreva("Digite um número inteiro e positivo: ")
        Leia(numero)

        contador <- 1

        Enquanto contador <= numero faça
            Escreva(contador, " ")
            contador <- contador + 1
        FimEnquanto

        Escreva("\nAcabou!")
    Fim
FimAlgoritmo
