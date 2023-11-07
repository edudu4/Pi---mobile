import axios from "axios";

export async function criarUsuario (dados) {
    try {
        const response = await axios.post('http://3.90.51.196:8080/users', dados);
        console.log('resposta da api: ', response.data);
    } catch (error) {
        console.error('Erro na requisição de Criar Usuário', error);
    }
} 
export async function autenticaUsuario (dados) {
    try {
    const response = await axios.post('http://3.90.51.196:8080/users/auth', dados);
    return response.data;
} catch (error) {
    console.error('Erro na requisição de Autenticar', error);
    return false;
}
}

export async function alterarImagemPerfil (dados) {
    try {
        const response = await axios.post('http://3.90.51.196:8080/users/uploadProfileImage', dados);
        console.log('resposta: ', response.data);
    } catch (error) {
        console.error('Erro na requisição de salvar imagem', error);

    }
}

export async function TrocarSenha (dados) {
    try {
        const response = await axios.put('http://3.90.51.196:8080/users', dados);
        console.log('resposta: ', response.data);
        return true
    } catch (error) {
        return false
        console.error('Erro na requisição de salvar imagem', error);
    }
}