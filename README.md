# 🌠 NASA Meteorite Explorer

Uma aplicação web interativa para explorar dados de quedas de meteoritos da NASA. Filtre por intervalo de anos, visualize no Google Maps e exporte resultados em CSV ou PDF.

## ✨ Funcionalidades

- 🗺️ **Mapa Interativo**: Visualize meteoritos em um mapa interativo do Google Maps
- 🔍 **Filtro por Ano**: Filtre meteoritos por intervalo de anos (ano mínimo e máximo)
- 📊 **Tabela de Dados**: Visualize informações detalhadas em uma tabela ordenável
- 📥 **Exportação**: Download dos dados em CSV ou PDF
- 🎯 **Ordenação**: Clique nos cabeçalhos da tabela para ordenar por ID, Nome, Ano ou Classe
- 📱 **Responsivo**: Funciona bem em dispositivos móveis e desktops

## 🚀 Como Usar

### 1. Abrir a Aplicação
Abra o arquivo `index.html` em seu navegador web.

### 2. Explorar Dados
- A aplicação carrega automaticamente todos os meteoritos da NASA
- Use o mapa para visualizar a distribuição geográfica dos meteoritos
- Veja a lista completa na tabela abaixo

### 3. Filtrar por Ano
- Digite o **ano mínimo** no campo "Min Year"
- Digite o **ano máximo** no campo "Max Year"
- Clique em "Filter" para aplicar

### 4. Ordenar Dados
- Clique em qualquer cabeçalho da tabela (ID, Name, Year, Class) para ordenar
- Clique novamente para inverter a ordem (ascendente/descendente)

### 5. Exportar Dados
- Clique em **"Save as CSV"** para baixar em formato Excel (CSV)
- Clique em **"Save as PDF"** para baixar em formato PDF com tabela formatada

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e layout
- **JavaScript (ES6+)** - Lógica da aplicação
- **Google Maps API** - Renderização do mapa
- **jsPDF** - Geração de arquivos PDF
- **NASA API** - Dados de meteoritos (com fallback para arquivo local)

## 📁 Estrutura do Projeto

```
NASA-Meteorite-Explorer/
├── index.html              # Arquivo principal HTML
├── css/
│   └── style.css          # Estilos da aplicação
├── js/
│   ├── main.js            # Lógica principal da aplicação
│   ├── dataHandler.js     # Carregamento de dados (API/local)
│   ├── map.js             # Gerenciamento do mapa
│   └── uiManager.js       # Funções de interface (tabela, filtros, export)
├── Meteorite_Landings.json # Dados de fallback locais
└── README.md              # Este arquivo
```

## 🔧 Detalhes Técnicos

### Fluxo de Carregamento de Dados
1. A aplicação tenta carregar dados da **NASA API**
2. Se a API não estiver disponível, utiliza o arquivo local **Meteorite_Landings.json**
3. Os dados são armazenados em memória para operações rápidas

### Módulos JavaScript
- **main.js**: Inicialização, event listeners dos botões, orquestração
- **dataHandler.js**: Fetch de dados (API ou arquivo local)
- **map.js**: Inicialização e gerenciamento do Google Maps
- **uiManager.js**: Renderização de tabela, filtros, ordenação, exportação

### Exportação de Dados
- **CSV**: Arquivo de texto separado por vírgulas, compatível com Excel
- **PDF**: Documento PDF com tabela formatada usando jsPDF

## 📝 Dados Incluídos

O arquivo `Meteorite_Landings.json` contém **45.716 registros** de meteoritos com as seguintes informações:
- **ID**: Identificador único
- **Name**: Nome do meteorito
- **Year**: Ano da queda (formato timestamp)
- **Class**: Classificação mineralógica
- **Mass**: Massa em gramas
- **Fall**: Tipo de queda (Fell/Found)
- **reclat/reclong**: Latitude e Longitude

## 🎓 Contexto Acadêmico

Este projeto foi desenvolvido como trabalho final para a disciplina **INFO-3168 - JavaScript 2** do curso de **Web Development and Internet Applications**.

**Aluno**: Christiane Nogueira Mendes  
**ID**: 1242980

## 📜 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do GitHub ou por email.

---

**Feito com ❤️ por Christiane Nogueira Mendes**
