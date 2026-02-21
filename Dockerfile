FROM node:18-alpine

WORKDIR /app

# Avval dependencylar (cache layer)
COPY app/package*.json ./
RUN npm install --production

# Keyin kod
COPY app/ .

EXPOSE 3000

CMD ["node", "index.js"]
