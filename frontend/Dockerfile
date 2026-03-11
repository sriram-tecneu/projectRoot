# ---------- Build Stage ----------
FROM node:18 AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .
ARG REACT_APP_API_URL=http://backend:5000
ENV REACT_APP_API_URL=$REACT_APP_API_URL
# Build production files
RUN npm run build


# ---------- Production Stage ----------
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy build files from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]