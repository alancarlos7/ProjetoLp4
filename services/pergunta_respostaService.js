class pergunta_respostaService{

    constructor(){ }

    /**
     *  valida se os dados de usuário são válidos conforme regra de negócio
     * @param $data - dados do usuário 
     */


     
    validarDados($data){


        
        if(!data.pergunta){
            return {status: false, message: "Pergunta Obrigatória"};
        }

        if(!data.respostas){
            return {status: false, message: "Resposta Obrigatória"};
       
        }
        if(!data.categoria){
            return {status: false, message: "Categoria Obrigatória"};
        }
    return {status: true};
    


}

    }



module.exports = function(){
    return pergunta_respostaService;
}
