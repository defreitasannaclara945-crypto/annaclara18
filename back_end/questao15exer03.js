 contador: inteiro
        idade, soma, maior: inteiro
        media: real
        mais18, menos5: inteiro

    Inicio
        soma <- 0
        mais18 <- 0
        menos5 <- 0

        Escreva("Digite a idade da 1ª pessoa: ")
        Leia(idade)

        maior <- idade
        soma <- idade

        Se idade > 18 então
            mais18 <- 1
        FimSe

        Se idade < 5 então
            menos5 <- 1
        FimSe

        Para contador de 2 ate 10 faça
            Escreva("Digite a idade da ", contador, "ª pessoa: ")
            Leia(idade)

            soma <- soma + idade

            Se idade > maior então
                maior <- idade
            FimSe

            Se idade > 18 então
                mais18 <- mais18 + 1
            FimSe

            Se idade < 5 então
                menos5 <- menos5 + 1
            FimSe
        FimPara

        media <- soma / 10

        Escreva("Média de idade do grupo: ", media)
        Escreva("\nPessoas com mais de 18 anos: ", mais18)
        Escreva("\nPessoas com menos de 5 anos: ", menos5)
        Escreva("\nMaior idade lida: ", maior)
