
    Inicio
        Escreva("Digite o preço do 1º produto: ")
        Leia(preco)

        maior <- preco
        menor <- preco

        Para contador de 2 ate 8 faça
            Escreva("Digite o ", contador, "º preço: ")
            Leia(preco)

            Se preco > maior então
                maior <- preco
            FimSe

            Se preco < menor então
                menor <- preco
            FimSe
        FimPara

        Escreva("Maior preço digitado: R$ ", maior)
        Escreva("\nMenor preço digitado: R$ ", menor)
