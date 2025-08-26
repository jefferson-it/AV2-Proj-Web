# 📝 To-Do List (React + Drag & Drop)

## Visão geral

Projeto desenvolvido a pedido do professor **Helton Fábio** segue o link do repositório da descrição da [atividade proposta](https://github.com/prof-hfabio/AV2).

Eu escolhi a proposta nº 3, que diz:

```txt
Descrição: O aluno deverá criar um projeto de Lista de Tarefas (To-Do List) com Armazenamento Local:

    HTML5 e CSS3 para a criação e estilização da interface
    JavaScript para implementar a lógica utilizando a DOM API
        permitir a adição, remoção e marcação de tarefas como concluídas, interagindo com o DOM
        cada tarefa que ainda está em execução deve mostrar um timer de quanto tempo faz desde que foi adicionada formatado em DD HH:MM:SS
    Estilização básica com CSS3 (cores, fontes, layouts simples).
    Integrar o armazenamento local (localStorage) para persistir as tarefas entre acessos
    A página deve ser responsiva e funcionar corretamente em 2 tamanhos de tela (1920x1080 e 430x932)
    animações são obrigatórias nas seguintes ações
        hover
        click
        adicionar
        remover

Critério de avaliação

    A implementação de código, o system-design, A utilização de um framework de front-end (React, Vue ou Svelte) e a utilização de conteineres do docker (dockerfile e/ou docker-compose) serão considerados como pontuação extra.

```

Aplicação de lista de tarefas desenvolvida em **React**, utilizando **Drag & Drop** (`@hello-pangea/dnd`), ícones (`@iconify/react`), persistência em **LocalStorage** e manipulação de datas com **Moment.js**.

## 📌 Funcionalidades

- ➕ Adicionar novos itens na lista
- ✏️ Editar itens existentes
- ✅ Marcar item como concluído ou reabrir
- 🗑️ Remover itens
- 📦 Armazenamento persistente no **LocalStorage**
- ↕️ Reordenar itens via **arrastar e soltar (Drag & Drop)**
- 🕒 Exibição de data/hora de criação

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev)
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) – drag & drop moderno
- [@iconify/react](https://iconify.design) – biblioteca de ícones
- [moment](https://momentjs.com) – manipulação de datas
- **LocalStorage** – persistência de dados no navegador

---

## 📂 Estrutura do Projeto

```
src/
├── App.jsx # Componente principal
├── App.css # Estilos globais
├── components/
│ ├── Viewer.jsx # Lista com drag & drop
│ ├── Item.jsx # Item individual
│ └── ItemEdit.jsx # Formulário de edição/criação de item
├── localStoragelocalstorage.jsx # Hook customizado (useLocalStorage)
```

---

## 🔑 Principais Componentes

### `App.jsx`

- Gerencia o **estado principal** da aplicação:
  - `items` (lista de tarefas)
  - `draft` (itens em edição antes de salvar)
- Funções principais:
  - `editItem` → editar campos de um item
  - `putItem` → salvar novo item na lista
  - `addItem` → criar rascunho para novo item
  - `closeItem` → remover rascunho
- Renderiza:
  - `<ViewerList />` com todos os itens
  - Formulário para novos itens (`<ItemEdit />`)
  - Botão **Adicionar Item**

---

### `Viewer.jsx`

- Responsável pela **lista arrastável**.
- Usa `DragDropContext` e `Droppable` para reordenar itens.
- Funções principais:
  - `onDragEnd` → atualiza a ordem dos itens
  - `remove` → exclui item da lista

---

### `Item.jsx`

- Representa **um item da lista**.
- Implementa `Draggable` para arrastar.
- Exibe:
  - Texto da nota (`note`)
  - Data de criação (`created_at`) formatada pelo **Moment.js**
  - Botões de ação:
    - Editar ✏️
    - Concluir ✅ / Reabrir ❌
    - Deletar 🗑️
- Possui modo de edição inline usando `<ItemEdit />`.

---

### `ItemEdit.jsx`

- Formulário simples para criar/editar item.
- Contém:
  - Campo de input `note`
  - Botão enviar (`setItem`)
  - Botão cancelar (`close`)

---

### `localstorage.js`

- Hook customizado `useLocalStorage(key, initialValue)`
- Permite salvar/ler estado sincronizado com **LocalStorage**.

---
