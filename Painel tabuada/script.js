function gerarTabuadas() {

    // Seleciona o painel onde será exibido o resultado
    let painel = document.getElementById("resultado");

    // Variável de texto para armazenar todo o conteúdo HTML
    let conteudo = "";

    // para definir qual tabuada será exibida
    for (let base = 1; base <= 10; base++) {

        conteudo += "<div class='card'>";
        conteudo += "<h3>Tabuada do " + base + "</h3>";

        // para os cálculos da multiplicação
        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {

            let resultado = base * multiplicador;

            // Concatenação acumulando linha por linha
            conteudo +=
                base + " x " +
                multiplicador + " = " +
                resultado + "<br>";
        }

        conteudo += "</div>";
    }

    // Exibe todo o conteúdo gerado
    painel.innerHTML = conteudo;
}