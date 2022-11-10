let usuario = {
    nome: 'Bruno',
    excluir: function () {
        console.log('O usuário, ' + this.nome + ' foi excluido!')
    }
}

usuario.excluir()