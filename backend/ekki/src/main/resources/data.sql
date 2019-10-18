DROP TABLE IF EXISTS usuario;
DROP TABLE IF EXISTS conta;
DROP TABLE IF EXISTS favorecidos;

CREATE TABLE conta (
    id_Conta INT AUTO_INCREMENT  PRIMARY KEY,
    saldo decimal NOT NULL,
    limite decimal default 500.0
);

CREATE TABLE usuario (
  id_Usuario INT AUTO_INCREMENT  PRIMARY KEY,
  nome VARCHAR(250) NOT NULL,
  cpf VARCHAR(250) NOT NULL,
  telefone VARCHAR(250) DEFAULT NULL,
  id_Conta INT NOT NULL,
  FOREIGN KEY (id_Conta) REFERENCES conta(id_Conta)
);

CREATE TABLE favorecidos (
    id_Usuario INT NOT NULL,
    id_favorecido INT NOT Null,
    PRIMARY KEY(id_Usuario, id_favorecido),
    FOREIGN KEY (id_Usuario) REFERENCES usuario(id_Usuario),
    FOREIGN KEY (id_favorecido) REFERENCES usuario(id_Usuario)
);


 INSERT INTO conta (saldo, limite) VALUES
   (500.5, 500),(1300,500);
INSERT INTO usuario (nome, cpf, telefone, id_Conta) VALUES
  ('Vinicius', '01229936084', '985007539',1),
  ('Moraes', '01229936084', '985007539',2);

