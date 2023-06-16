const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr');

    const conteudo = `
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
              <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
              <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
          </ul>
        </td>`;

    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela');

//tabela.appendChild(criaNovaLinha(nome, email));


//quem fornece os metodos para a comunicação é o arquivo xml

//inicializando o objetvo
const http = new XMLHttpRequest();

//abrir a comunicação entre a aplicação e a api - metodo open, 
//passando dois argenmentos - 1- o que vou pedir para o servidor
//2 - endereco para onde vai enviar a requisição
http.open('GET', 'http://localhost:3000/profile');

//envia a requisição
http.send();

// indicar ao js o que vai acontecer apos enviar a requisição
//cria função anonima 
http.onload = () => {
    const data = JSON.parse(http.response);

    data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
    });

    const http2 = new XMLHttpRequest();
    http2.open('GET', 'http://localhost:3000/profile/semanaPassada');
    http2.onload = () => {
        const data = JSON.parse(http.response);

        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
        });
    }
    http2.send();
}