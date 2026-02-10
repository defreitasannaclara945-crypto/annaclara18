 inicio, fim, incremento, contador: inteiro

    Inicio
        Escreva("Digite o primeiro valor: ")
        Leia(inicio)

        Escreva("Digite o último valor: ")
        Leia(fim)

        Escreva("Digite o incremento: ")
        Leia(incremento)

        Se incremento <= 0 então
            Escreva("Incremento inválido!")
        Senão
            Se inicio < fim então
                contador <- inicio
                Enquanto contador <= fim faça
                    Escreva(contador, " ")
                    contador <- contador + incremento
                FimEnquanto
            Senão
                contador <- inicio
                Enquanto contador >= fim faça
                    Escreva(contador, " ")
                    contador <- contador - incremento
                FimEnquanto
            FimSe
        FimSe

        Escreva("\nAcabou!")
