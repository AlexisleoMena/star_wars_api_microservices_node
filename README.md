# Star Wars API Microservices Node

Este es un proyecto basado en Docker y microservicios que consta de varios servicios relacionados con el universo de Star Wars. Los servicios incluidos son:

- **gateway**: Este servicio actúa como un punto de entrada para la aplicación.
- **characters**: Proporciona información sobre los personajes de Star Wars.
- **films**: Proporciona información sobre las películas de Star Wars.
- **planets**: Proporciona información sobre los planetas de Star Wars.
- **database**: Un servicio de base de datos utilizado por otros servicios.

## Instrucciones de Uso

Asegúrate de tener Docker y Docker Compose instalados en tu sistema antes de continuar.

### Configuración

Antes de ejecutar los servicios, te sugiero revisar la estructura de carpetas y archivos del directorio principal:

```
.
├── characters
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ...
├── films
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ...
├── planets
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ...
├── database
│   ├── Dockerfile
│   ├── package.json
│   ├── .env.template  <--- Archivo de plantilla
│   ├── src/
│   └── ...
├── gateway
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ...
├── docker-compose.yml
└── docker-compose.prod.yml
```

Debes crear un archivo `.env` en la carpeta `database` basado en el archivo `.env.template` proporcionado. Este archivo definirá las variables de entorno necesarias para el servicio de base de datos.

### Desarrollo

Para ejecutar los servicios en un entorno de desarrollo, sigue estos pasos:

1. Abre una terminal y navega hasta el directorio principal del proyecto.

2. Ejecuta el siguiente comando para iniciar los servicios:

   ```shell
   docker-compose up
   ```

   Esto creará y ejecutará los contenedores de Docker para cada servicio definido en `docker-compose.yml`. Los servicios estarán disponibles en los puertos especificados en el archivo de configuración.

### Producción

Para ejecutar los servicios en un entorno de producción, sigue estos pasos:

1. Abre una terminal y navega hasta el directorio principal del proyecto.

2. Ejecuta el siguiente comando para iniciar los servicios en modo de producción:

   ```shell
   docker-compose -f docker-compose.prod.yml up
   ```

   Esto creará y ejecutará los contenedores de Docker para cada servicio definido en `docker-compose.prod.yml`. Los servicios estarán disponibles en los puertos especificados en el archivo de configuración.

### Detener y Limpiar

Para detener los servicios y limpiar los contenedores y volúmenes creados, ejecuta el siguiente comando:

```shell
docker-compose down --volumes --rmi all
```

Esto detendrá y eliminará los contenedores, así como también eliminará los volúmenes y las imágenes de Docker utilizadas por los servicios.