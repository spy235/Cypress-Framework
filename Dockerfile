# Use the official Cypress included image matching the project version
FROM cypress/included:15.8.1

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Run Cypress tests in headless mode (adjust browser if needed, e.g., --browser chrome)
CMD ["npm", "run", "cypress:edge"]