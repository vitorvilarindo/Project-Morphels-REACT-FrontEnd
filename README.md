# Frontend - Projeto M.O.R.P.H.E.L.S

Frontend React para o sistema de gestão financeira de instituições do 3° sertor - Morphels

## 🚀 Tecnologias

- **React 19** - Biblioteca UI
- **Vite** - Build too e dev server
- **React Routter Dom** - Roteamento
- **React Hook Form** - Gerenciado de valores dos Formulários
- **Axios** - Client HTTP
- **Tunstack Query** - Gerenciamento de requisições 
- **Tailwind** - Framework de estilização
- **Quagga** - Leitor de código de barras
- **Lucide React** - Icones

## 📦 Instalação

```Bash
npm install
```

## ⚙️ Configuração

A rota de consumo do Frontend está configurada para se conectar ao backend em `http://localhost:3000`

Para ajustar, edite `.env`

```angular2html
VITE_DATABASE_URL_ROOT='http://SEU_BACKEND:3000'
```
> [!IMPORTANT]
> O nome da variavel de ambiente não deve ser, em hipotese alguma. alterada, visto que é o mesmo nome utilizado em produção.

## 🏃Executar

### Modo de desenvolvimento

```angular2html
npm run dev
```
Abre na porta padrão do Vite `http://localhost:5173`

### Buid para produção

```angular2html
npm run build
```
Gera arquivos otimizados em `dist/`

### Preview do build

```angular2html
npm run preview
```

# 📂 Estrutura do Projeto

```
frontend/
├── public/                 # Arquivos estáticos (HTML principal, ícones, imagens)
├── src/                    # Código-fonte principal da aplicação
│   ├── compnents/          # Componentes visuais e reutilizáveis da interface
│   │   ├── balons.jsx              # Componente de exibição de balões/cards de métricas
│   │   ├── dataBalons.jsx          # Componente para processamento de dados dos balões
│   │   ├── filt.jsx                # Componente de filtros de busca ou seleção 
│   │   ├── form.jsx                # Estrutura principal do formulário de entrada
│   │   ├── formButtons.jsx         # Botões de ação do formulário (enviar, limpar, etc.)
│   │   ├── grafics.jsx             # Renderização de gráficos e relatórios visuais
│   │   ├── header.jsx              # Cabeçalho principal da aplicação
│   │   ├── header2.jsx             # Cabeçalho secundário
│   │   ├── infoParagraf.jsx
│   │   ├── inputs.jsx
│   │   ├── menu.jsx
│   │   ├── menuButtons.jsx
│   │   ├── modalExpences.jsx
│   │   ├── modalReports.jsx
│   │   ├── modalRevenues.jsx
│   │   ├── modelInfor.jsx
│   │   ├── openFormButton.jsx
│   │   ├── registerPages.jsx
│   │   ├── scanner.jsx
│   │   ├── searchArea.jsx
│   │   ├── searchBar.jsx
│   │   ├── settingPages.jsx
│   │   ├── settingsBallons.jsx
│   │   └── table.jsx
│   │
│   ├── content/
│   │   ├── withoutPermissionContext.jsx
│   │   └── withoutPermissionModal.js
│   │
│   │
│   ├── fonts/
│   │   ├──inter/
│   │       ├── Inter_18pt-Bold
│   │       └── Inter_18pt-Regular
│   │
│   ├── pages/
│   │   ├── expensesPage.jsx
│   │   ├── localReportsPage.jsx
│   │   ├── mainPage.jsx
│   │   ├── registe.jsx
│   │   ├── reportsPage.jxs
│   │   ├── revenuesPage.jsx
│   │   └── settingsPage.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── requests.js
│   │   └── verification.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-look.json
├── READEME.md
└── vite.config.js
```

## 🔐 Autenticação

O sistema usa autenticalçai via Login:
1. O usuário tem o login criado pelo administrador da insituição cadastrada
2. Acessa o `/` e faz o login com o email e senha cadastrados
3. Backend valida os dados de login e carrega as permissões de acesso do usuário conforme sua role de acesso
4. Backend retorna JWT para seção web
5. Frontend armazena o JWT nos cookies
6. Todas as requisições incluem `Authorization: Bearer {jwt}`

### Fluxo Login

```jsx
// 1. Usuário submete formulário
POST /login
{
    "email": "user@gmail.com",
    "password": "12345..."
}

// 2. Backend valida e retorna JWT
{
    "jwtTonken": "easEjna21...",
    "sub": "UUID",
    "user": "user@gmail.com",
    "success": true,
    "route": "/main"
}

// 3. Frontend armazena nos cookies
// 4. Redireciona para a página inicial
```

## 🖌️ Páginas

### Login (`/`)
* Pública (não exige autenticação)
* Login do usuário
* Validação e redirecionamento

### Main Page (`/main`)
* Dashboard com resumo do mês
* Pop-Up de gastos, receita, e saldo
* Gráfico com balanço anual de gastas

### Revenues Page (`/revenues`)
* CRUD de entradas
* Cadastro de entradas financeiras
* Barra de membros integrado a tabela members
* Filtragem com base no tipo e na data
* Barra de pesquisa (usa o nome do membro e a descrição para a busca)

### Expenses Page (`/expenses`)
* CRUD de despesas
* Cadastro de saidas financeiras
* Barra de beneficiários integrado a tabela companies
* Filtragem com base no tipo e na data
* Barra de pesquisa (usa o titulo e a descrição para a busca)

### Registe (`/register`)
* Cadastro de membros, companias (parceiros) e cartões (cartões de fidelidade)
* CRUD de membros, companias e cartões

### Reports (`/reports`)
* CRUD das especificações de renderizações do relatórios
* Botão de renderização do relatório

### Settings (`/settings`)
* Página com renderização condicional (precisa de role expecífica pra poder acessar)
* CRUD de usuários
* CRUD de setores
* CRUD de filiais
* CRUD de Roles e Permissions

## 🧩 Componentes principais
### `<Header />`
Cabeçalho principal:
- Cabeçalho fixo 
- Navegação entre páginas
- Botão de troda do modos (Light, Dark)
- Botão logout

### `<Balons />`
Balão de iformações resumidas:
- Dados resumidos e generalitas
- Dados vem do Backend

### `<DataBalons />`
Balões de dados listados:
- Dados detalhados
- Botão para chamar o model de edição
- Usado para as listagens de dados financeiros