# 🏫 Sistema de Gestão das Oficinas de Cultura
  As Oficinas Culturais são espaços mantidos pela Secretaria de Cultura do Estado e dedicados à promoção e à formação cultural. Elas oferecem uma variedade de atividades, incluindo cursos, workshops, palestras, exposições, apresentações artísticas, residências artísticas, entre outros.

  Tendo isso em vista, Mogi das Cruzes para atender às necessidades de gerenciamento e organização das diversas atividades culturais oferecidas pela cidade deseja o desenvolvimento de um **Sistema de Gestão das Oficinas de Cultura**.

## 📌 Requisitos Funcionais
Os requisitos funcionais mais relevantes no momento levantados pelo cliente foram:
#### 1. Cadastro de Alunos e Professores: Registro de novos alunos e professores na plataforma.
#### 2. Matrícula em Cursos: Inscrição de alunos em cursos oferecidos pelas Oficinas de Cultura.
#### 3. Gestão de Cursos: Criação e edição de cursos, com detalhes como título e descrição.

## 📋 Regras de Negócio
As regras de negócios definidas com o cliente foram:
#### RN01. Pessoas a partir de 16 anos (professores e estudantes).
#### RN02. Não deve persistir informação de data de nascimento no sistema.
#### RN03. Não pode haver duplicação de registros de alunos, cursos e professores - identificador único.
#### RN04. Um estudante só pode se matricular em um curso disponível.
#### RN05. Um aluno pode ser cadastrar em vários cursos, desde que o curso nao seja no mesmo dia.
#### RN06. Um curso pode ter um ou mais professores associados.
#### RN07. O numero maximo de estudantes por curso são 30 alunos e o mínimo de estudantes por curso é 1.

## 🏛️ Arquitetura do Sistema
A construção deste sistema foi realizada com base na **arquitetura hexagonal,** com o intuito de criar uma aplicação modular. 
#### 🔴 Domain
#### 🟠 Application
#### 🔵 Infrastructure
#### 🟣 Presenter

## ⬇️ Instalação das dependencias
O sistema foi desenvolvido em Nest, para instalar as dependencias basta utitizar o seguinte comando:

```bash
$ npm install
```

## 🚀 Execução do programa

```bash
npm run start         # modo desenvolvimento
npm run start:dev     # watch mode
```

## 📄 Licença

Nest is [MIT licensed](LICENSE).

## 👩‍💻 Desenvolvedora
[Ana Laura Nolasco](https://github.com/nolascolunardi/)
