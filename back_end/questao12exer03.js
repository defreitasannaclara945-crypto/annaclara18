 contador, numero: inteiro
        pares, impares: inteiro

    Inicio
        pares <- 0
        impares <- 0

        Para contador de 1 ate 6 faça
            Escreva("Digite o ", contador, "º número: ")
            Leia(numero)

            Se numero % 2 = 0 então
                pares <- pares + 1
            Senão
                impares <- impares + 1
            FimSe
        FimPara

        Escreva("Quantidade de números pares: ", pares)
        Escreva("\nQuantidade de números ímpares: ", impares)
Quantidade de números pares: 4
Quantidade de números ímpares: 2
