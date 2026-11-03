# Checkpont – Todo List

## Objetivo

Desenvolver uma aplicação de lista de tarefas utilizando HTML, CSS e JavaScript, praticando manipulação de arrays, objetos e DOM.

## O que deverá ser desenvolvido?

### 1. Renderização dinâmica

- Percorrer o array `tarefas`.
- Utilizar o método `.map()`.
- Criar dinamicamente o HTML de cada tarefa.
- Aplicar a classe CSS correspondente ao status:
  - `done`: `status-done`.
  - `canceled`: `status-canceled`.
  - `to-do`: ``

### 2. Adicionar uma tarefa

- Capturar o texto digitado no input.
- Criar um novo objeto de tarefa.
- Adicionar ao array utilizando `.push()`.
- Atualizar a renderização da lista.
- Limpar o input após a inclusão.

**Importante:** toda nova tarefa deverá receber automaticamente o status `To Do`.

## Resultado esperado

Ao finalizar, a aplicação deverá exibir as tarefas cadastradas e permitir que o usuário adicione novas tarefas dinamicamente.
