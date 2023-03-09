const form = document.getElementById('form-list');
let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeTarefa = document.getElementById('tarefa');
    

    let linha = '<tr>';
    linha += `<td>${inputNomeTarefa.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;


    inputNomeTarefa.value = '';
  

});
