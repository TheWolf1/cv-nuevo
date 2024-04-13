# Utiliza la imagen oficial de Nginx como base
FROM nginx:latest

# Copia el archivo de configuración personalizado de Nginx a la ubicación adecuada en el contenedor
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los certificados SSL al contenedor
COPY certificados/ionos.kevinpaz.dev_private_key.key /etc/nginx/ssl/
COPY certificados/kevinpaz.dev_ssl_certificate.cer /etc/nginx/ssl/

# Expone el puerto 80 (HTTP) y 443 (HTTPS) para que puedan ser accedidos externamente
EXPOSE 80
EXPOSE 443

# Comando por defecto para ejecutar Nginx en modo daemon al iniciar el contenedor
CMD ["nginx", "-g", "daemon off;"]