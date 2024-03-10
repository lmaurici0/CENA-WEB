const Sequelize = require("sequelize");

const sequelize = new Sequelize("database_cena", "root", "cenapasslogin", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log
});

const Student = sequelize.define('student', {
    endereco_aluno: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nasc_aluno: {
        type: Sequelize.DATE,
        allowNull: false
    },
    curso_aluno: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto_aluno: {
        type: Sequelize.STRING
    },
    nome_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
    },
    email_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
    },
    telefone_aluno: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

async function salvarCadastro() {
    try {
        const endereco = document.getElementById('end_std').value;
        const dataNascimento = document.getElementById('bday_std').value;
        const curso = document.getElementById('curso').value;
        const foto = document.getElementById('inputFile').value;
        const nome = document.getElementById('name_std').value;
        const email = document.getElementById('email_std').value;
        const telefone = document.getElementById('tel_std').value;

        const novoAluno = await Student.create({
           endereco_aluno: endereco,
           nasc_aluno: dataNascimento,
           curso_aluno: curso,
           foto_aluno: foto,
           nome_aluno: nome,
           email_aluno: email,
           telefone_aluno: telefone
        });

        console.log('Cadastro salvo com sucesso:', novoAluno);
    } catch (error) {
        console.error('Erro ao salvar o cadastro:', error);
    }
}

salvarCadastro()
