FROM node:20-alpine

WORKDIR /cv

COPY ./package*.json ./

RUN npm install

COPY . .

# Compila los archivos CSS usando TailwindCSS
RUN npm run compileCss

# Ejecuta el comando para construir la aplicación Next.js
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Ejecuta el comando para iniciar la aplicación Next.js
CMD ["npm", "start"]