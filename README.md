# Quadro Kanban

Um aplicativo de gerenciamento de tarefas no estilo Kanban com interface moderna e intuitiva.

## Funcionalidades

- Organize suas tarefas em três colunas: "Para fazer", "Fazendo" e "Feito"
- Adicione novas tarefas facilmente com até 60 caracteres
- Edite tarefas existentes
- Mova tarefas entre as colunas com um clique
- Reorganize as tarefas dentro de cada coluna
- Confirmação antes de excluir tarefas
- Interface responsiva que funciona bem em dispositivos móveis e desktop

## Tecnologias utilizadas

- HTML5
- CSS3 com variáveis CSS para fácil personalização de cores e estilos
- JavaScript puro (vanilla JS)
- Bootstrap 5 para componentes de interface
- Bootstrap Icons para ícones

## Como usar

1. Clone o repositório ou baixe os arquivos
2. Abra o arquivo `index.html` em seu navegador
3. Comece a adicionar e organizar suas tarefas
4. Para excluir uma tarefa, clique no ícone de lixeira e confirme a exclusão

## Personalizando

O design usa variáveis CSS para facilitar a personalização:

```css
:root {
  --primary-color: #6366f1;        /* Cor principal */
  --primary-hover: #4f46e5;        /* Cor ao passar o mouse */
  --todo-color: #f59e0b;           /* Cor da coluna Para fazer */
  --doing-color: #3b82f6;          /* Cor da coluna Fazendo */
  --done-color: #10b981;           /* Cor da coluna Feito */
  --light-bg: #f8fafc;             /* Cor de fundo geral */
  --card-bg: #ffffff;              /* Cor de fundo dos cartões */
  --text-color: #1e293b;           /* Cor de texto principal */
  --text-light: #64748b;           /* Cor de texto secundário */
}
```

Para personalizar o design, basta alterar estas variáveis no arquivo `style.css`.

## Próximos passos

- Adicionar funcionalidade de arrastar e soltar (drag and drop)
- Implementar armazenamento local para salvar as tarefas
- Adicionar categorias e etiquetas coloridas
- Permitir a criação de novas colunas personalizadas

---

Desenvolvido como um aplicativo de gerenciamento de tarefas Kanban para ajudar na organização do fluxo de trabalho.


