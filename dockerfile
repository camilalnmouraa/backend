# Dockerfile
FROM node:20

# Cria diretório app
WORKDIR /app

# Copia os arquivos
COPY . .

# Instala dependências
RUN npm install

# Compila os tipos Prisma
RUN npx prisma generate

# Expõe a porta
EXPOSE 3333

# Comando de inicialização da API
CMD ["npx", "ts-node-dev", "src/index.ts"]