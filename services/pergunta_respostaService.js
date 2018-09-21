class pergunta_respostaService{

    constructor(){ }

    /**
     *  valida se os dados de usuário são válidos conforme regra de negócio
     * @param $data - dados do usuário 
     */
/**
    validarDados($data){
    
        if(!data.pergunta){
            return {status: false, message: "nome Obrigatório"};
        }

        if(!data.alternativa){
            return {status: false, message: "email Obrigatório"};
        }

        if(!data.resposta){
            return {status: false, message: "senha Obrigatório"};
        }

        if(!data.categoria){
            return {status: false, message: "perfil Obrigatório"};
        }

   
    return {status: true};
    }
*/    
}

module.exports = function(){
    return pergunta_respostaService;
}
