# Star Wars API - Servicio de Base de Datos

Este servicio forma parte de la API de Star Wars y se encarga de proporcionar acceso a una base de datos en la nube.

## Desarrollo

### Ejecución sin Dockerfile (No recomendado)

```powershell
docker container run ,
--publish 8001:8001 ,
--name database ,
--workdir /app ,
--volume ${PWD}:/app ,
node:18.16-alpine ,
sh -c "npm install && npm start"
```

### Utilizando Dockerfile

Construir la imagen:

```powershell
docker build --target dev --tag database .
```

Ejecutar el contenedor a partir de la imagen creada anteriormente:

```powershell
docker container run ,
--publish 8001:8001 ,
--env-file .env ,
--name database ,
database
```

### Ejecución en segundo plano

Ejecutar el contenedor en segundo plano:

```powershell
docker container run ,
--detach ,
--publish 8001:8001 ,
--env-file .env ,
--name database ,
database
```

## Producción

### Utilizando Dockerfile

Construir la imagen:

```powershell
docker build --target prod --tag database .
```

Ejecutar el contenedor en segundo plano con variables de entorno desde un archivo `.env`:

```powershell
docker container run ,
--detach ,
--publish 8001:8001 ,
--env-file .env ,
--name database ,
database
```

## Otros comandos

Detener el contenedor:

```powershell
docker container stop database
```

Volver a ejecutar el contenedor:

```powershell
docker container start database
```

Eliminar el contenedor:

```powershell
docker container rm database
```

Eliminar la imagen:

```powershell
docker image rm database
```