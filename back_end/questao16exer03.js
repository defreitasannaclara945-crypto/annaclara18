contador: inteiro
        idade, somaIdades, somaHomens: inteiro
        sexo: caractere
        homens, mulheres, mulheres20: inteiro
        mediaGeral, mediaHomens: real

    Inicio
        somaIdades <- 0
        somaHomens <- 0
        homens <- 0
        mulheres <- 0
        mulheres20 <- 0

        Para contador de 1 ate 5 faça
            Escreva("Digite a idade da ", contador, "ª pessoa: ")
            Leia(idade)

            Escreva("Digite o sexo (M/F): ")
            Leia(sexo)

            somaIdades <- somaIdades + idade

            Se sexo = 'M' ou sexo = 'm' então
                homens <- homens + 1
                somaHomens <- somaHomens + idade
            Senão
                mulheres <- mulheres + 1

                Se idade > 20 então
                    mulheres20 <- mulheres20 + 1
                FimSe
            FimSe
        FimPara

        mediaGeral <- somaIdades / 5

        Se homens > 0 então
            mediaHomens <- somaHomens / homens
        Senão
            mediaHomens <- 0
        FimSe

        Escreva("Quantidade de homens: ", homens)
        Escreva("\nQuantidade de mulheres: ", mulheres)
        Escreva("\nMédia de idade do grupo: ", mediaGeral)
        Escreva("\nMédia de idade dos homens: ", mediaHomens)
        Escreva("\nMulheres com mais de 20 anos: ", mulheres20)
