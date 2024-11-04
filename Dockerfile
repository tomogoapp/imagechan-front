FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Instalar dependencias como root
RUN npm install

COPY . .

# Cambiar permisos si es necesario
RUN chown -R node:node /app

# Cambiar al usuario no root
USER node

EXPOSE 8080

CMD ["npm", "run", "dev"]
