FROM node:lts-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application (this bakes apps.json into the static HTML)
RUN npm run build

EXPOSE 10000

CMD ["npm", "run", "preview"]