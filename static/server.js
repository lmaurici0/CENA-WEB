const express = require("express");
const Sequelize = require("sequelize");
const app = express();

const sequelize = new Sequelize("database_cena", "root", "cenapasslogin", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("students", {
  endereco_aluno: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nasc_aluno: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  curso_aluno: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  foto_aluno: {
    type: Sequelize.STRING,
  },
  nome_aluno: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email_aluno: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  telefone_aluno: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync({ alter: true }).then(() => {
    console.log("Modelos sincronizados com o banco de dados.");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar modelos com o banco de dados:", err);
  });

app.get("/alunos", async (req, res) => {
  try {
    const alunos = await User.findAll();
    res.json(alunos);
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

app.post("/alunos", async (req, res) => {
  try {
    const aluno = await User.create({
      endereco_aluno: req.body.endereco_aluno,
      nasc_aluno: req.body.nasc_aluno,
      curso_aluno: req.body.curso_aluno,
      foto_aluno: req.body.foto_aluno,
      nome_aluno: req.body.nome_aluno,
      email_aluno: req.body.email_aluno,
      telefone_aluno: req.body.telefone_aluno,
    });
    res.status(201).json(aluno);
  } catch (error) {
    console.error("Erro ao criar aluno:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

if (res.status === 201){
    window.alert("Ok, Tudo certo.")
}else{
    window.alert("Eita, deu algum erro. Eu acho que foi o erro: ",error)
}
