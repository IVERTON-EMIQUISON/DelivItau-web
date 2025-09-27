### 🍔 DelivItau

✨ Experiência de Delivery Otimizada
O DelivItau é uma aplicação web de delivery projetada para a cidade de Itaú. Nosso foco é oferecer uma navegação intuitiva, rápida e eficiente, conectando os usuários aos melhores estabelecimentos locais. A aplicação permite que o usuário navegue por cardápios, adicione itens ao carrinho e finalize seus pedidos de forma simples e segura.

📌 Tecnologias & Arquitetura
O projeto adota uma arquitetura serverless moderna, garantindo alta escalabilidade, performance e custos otimizados (conforme planejado).

Frontend (User Interface)
⚛️ React & 📘 TypeScript: Combinação robusta para desenvolvimento de componentes e tipagem segura.

⚡ Vite: Ferramenta de build que proporciona um ambiente de desenvolvimento ultrarrápido.

🎨 Tailwind CSS: Estilização utilitária para um design totalmente responsivo e limpo.

Backend (Arquitetura Serverless AWS)
☁️ AWS Amplify: Hospedagem e deployment contínuo (CI/CD) do frontend.

🔌 API Gateway & AWS Lambda: Backend sem servidor para toda a lógica de negócios (processamento de pedidos, promoções, etc.).

💾 Amazon DynamoDB: Banco de dados NoSQL de alta performance para dados transacionais (pedidos, cardápios).

🖼️ Amazon S3: Armazenamento escalável e de baixo custo para todas as imagens de cardápio e banners promocionais.

🔒 Amazon Cognito: Gerenciamento seguro de usuários, autenticação e autorização.

🚀 Como Começar (Desenvolvimento Local)
Siga os passos para configurar e rodar o projeto em sua máquina.

🔧 Pré-requisitos
Certifique-se de ter instalado:

Node.js (versão 18+ ou superior)

npm ou yarn

📥 Instalação
Clone o repositório e navegue até a pasta do projeto:

git clone [https://github.com/IVERTON-EMIQUISON/DelivItau-web](https://github.com/IVERTON-EMIQUISON/DelivItau-web)
cd delivitau

Instale as dependências:

npm install
# ou yarn install

▶️ Rodando o Projeto
Inicie o ambiente de desenvolvimento:

npm run dev
# ou yarn dev

Abra seu navegador em: http://localhost:5173/

O projeto será carregado e qualquer alteração no código será refletida imediatamente (hot-reload).