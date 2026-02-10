Algoritmo ContagemRegressivaDiv4
    Var
        contador: inteiro

    Inicio
        contador <- 30

        Enquanto contador >= 1 faça
            Se contador % 4 = 0 então
                Escreva("[", contador, "] ")
            Senão
                Escreva(contador, " ")
            FimSe

            contador <- contador - 1
        FimEnquanto
    Fim
FimAlgoritmo
