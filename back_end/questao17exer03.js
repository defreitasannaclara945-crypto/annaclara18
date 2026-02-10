   contador: inteiro
        peso, altura: real
        somaAltura: real
        mais90, menos50_160, mais190_100: inteiro
        mediaAltura: real

    Inicio
        somaAltura <- 0
        mais90 <- 0
        menos50_160 <- 0
        mais190_100 <- 0

        Para contador de 1 ate 7 faça
            Escreva("Digite o peso da ", contador, "ª pessoa (Kg): ")
            Leia(peso)

            Escreva("Digite a altura da ", contador, "ª pessoa (m): ")
            Leia(altura)

            somaAltura <- somaAltura + altura

            Se peso > 90 então
                mais90 <- mais90 + 1
            FimSe

            Se peso < 50 e altura < 1.60 então
                menos50_160 <- menos50_160 + 1
            FimSe

            Se altura > 1.90 e peso > 100 então
                mais190_100 <- mais190_100 + 1
            FimSe
        FimPara

        mediaAltura <- somaAltura / 7

        Escreva("Média de altura do grupo: ", mediaAltura)
        Escreva("\nPessoas com mais de 90Kg: ", mais90)
        Escreva("\nPessoas com menos de 50Kg e menos de 1,60m: ", menos50_160)
        Escreva("\nPessoas com mais de 1,90m e mais de 100Kg: ", mais190_100)
