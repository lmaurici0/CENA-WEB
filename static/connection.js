const {error} = require("console");
const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(config.development);

const User = sequelize.define('students', {
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


salvarDados = async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexão bem-sucedida.');
  
      await sequelize.sync({ alter: true });
      console.log('Modelos sincronizados com o banco de dados.');
  
      const user = await User.create({
        endereco_aluno: 'rua white, 427',
        nasc_aluno: '2008-01-02',
        curso_aluno: 'Desenvolvimento de Sistemas',
        nome_aluno: 'Eric Luis filho',
        email_aluno: 'ericluisfilho@gmail.com',
        telefone_aluno: '11983085255'
        
      });
  
      console.log('Usuário criado:', user.toJSON());
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    } finally {
      await sequelize.close();
    }
};

salvarDados()
