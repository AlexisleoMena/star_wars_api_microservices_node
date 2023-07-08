# Star Wars API - Servicio films

Este servicio forma parte de la API de Star Wars y proporciona información sobre películas de Star Wars.

## Desarrollo

### Ejecución sin Dockerfile (No recomendado)

```powershell
docker container run ,
--publish 8001:8001 ,
--name films ,
--workdir /app ,
--volume ${PWD}:/app ,
node:18.16-alpine ,
sh -c "npm install && npm run start:dev"
```

### Utilizando Dockerfile

Construir la imagen:

```powershell
docker build --target dev --tag films .
```

Ejecutar el contenedor a partir de la imagen creada anteriormente:

```powershell
docker container run ,
--publish 8001:8001 ,
--name films ,
films
```

### Ejecución en segundo plano

Ejecutar el contenedor en segundo plano:

```powershell
docker container run ,
--detach ,
--publish 8001:8001 ,
--name films ,
films
```

## Producción

### Utilizando Dockerfile

Construir la imagen:

```powershell
docker build --target prod --tag films .
```

Ejecutar el contenedor en segundo plano:

```powershell
docker container run ,
--detach ,
--publish 8001:8001 ,
--name films ,
films
```

## Otros comandos

Detener el contenedor:

```powershell
docker container stop films
```

Volver a ejecutar el contenedor:

```powershell
docker container start films
```

Eliminar el contenedor:

```powershell
docker container rm films
```

Eliminar la imagen:

```powershell
docker image rm films
```