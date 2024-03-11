const { Op } = require("sequelize");
const { Utilizador } = require("../models/utilizador.js");

class utilizadoresControlador {
    async index() {
        try {
            const utilizadores = await Utilizador.findAll();
            return { sucesso: true, data: utilizadores };
        } catch (error) {
            console.error(error.message);
            return { successo: false, message: "Erro ao buscar Utilizadores" };
        }
    }

    async show(id) {
        try {
            const utilizador = await Utilizador.findByPk(id);
            if (!utilizador) {
                return { sucesso: false, message: "Utilizador não encontrado" };
            }
            return { sucesso: true, data: utilizador };
        } catch (error) {
            console.error(error.message);
            return { successo: false, message: "Erro ao buscar Utilizador" };
        }
    }

    async update(id, params) {
        try {
            const utilizador = await Utilizador.findByPk(id);
            if (!utilizador) {
                return { successo: true, message: "Utilizador não encontrado" };
            }
            await utilizador.update(params);
            return { sucesso: true, message: "Utilizador atualizado com sucesso" };
        } catch (error) {
            console.error(error.message);
            return { sucesso: false, message: "Erro ao atualizar Utilizador" };
        }
    }

    async create(params) {
        try {
             await Utilizador.create(params);
            return { sucesso:true,message: "Utilizador criado, verifica o seu Email para activar a sua conta"};
        } catch (error) {
            return { error:true,message: error.errors[0].message };
        }
    }

    async destroy(id) {
        try {
            const Utilizador = await Utilizador.findByPk(id);
            if (!Utilizador) {
                return { sucesso: true, message: "Utilizador não encontrado" };
            }
            await Utilizador.destroy();
            return { successo: true, message: "Utilizador excluído com sucesso" };
        } catch (error) {
            console.error(error.message);
            return { error: true, message: "Erro ao excluir Utilizador" };
        }
    }
}

module.exports = { utilizadoresControlador };