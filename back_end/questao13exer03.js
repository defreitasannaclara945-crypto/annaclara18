  contador, numero: inteiro
        acima5, div3: inteiro

    Inicio
        acima5 <- 0
        div3 <- 0

        Escreva("Números sorteados: ")

        Para contador de 1 ate 20 faça
            numero <- Aleatorio(0,10)
            Escreva(numero, " ")

            Se numero > 5 então
                acima5 <- acima5 + 1
            FimSe

            Se numero % 3 = 0 então
                div3 <- div3 + 1
            FimSe
        FimPara

        Escreva("\nQuantidade de números acima de 5: ", acima5)
        Escreva("\nQuantidade de números divisíveis por 3: ", div3)
