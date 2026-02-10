Algoritmo JogoAdivinhacao
    Var
        numeroSorteado, palpite, tentativas: inteiro
        acertou: logico

    Inicio
        numeroSorteado <- Aleatorio(1,10)
        tentativas <- 1
        acertou <- falso

        Enquanto tentativas <= 4 e acertou = falso faça
            Escreva("Tentativa ", tentativas, ": Digite um número entre 1 e 10: ")
            Leia(palpite)

            Se palpite = numeroSorteado então
                Escreva("Parabéns! Você acertou!")
                acertou <- verdadeiro
            Senão
                Escreva("Você errou!")
            FimSe

            tentativas <- tentativas + 1
        FimEnquanto

        Se acertou = falso então
            Escreva("Fim de jogo! O número sorteado foi: ", numeroSorteado)
        FimSe
