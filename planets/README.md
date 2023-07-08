# Star Wars API - Servicio planets

Este servicio forma parte de la API de Star Wars y proporciona información sobre planetas de Star Wars.

## Desarrollo

### Ejecución sin Dockerfile (No recomendado)

```powershell
docker container run ,
--publish 8001:8001 ,
--name planets ,
--workdir /app ,
--volume ${PWD}:/app ,
node:18.16-alpine ,
sh -c "npm install && npm start"
```

### Utilizando Dockerfile

Construir la imagen:

```powershell
docker build --target dev --tag planets .
```

Ejecutar el contenedor a partir de la imagen creada anteriormente:

```powershell
docker container run ,
--publish 8001:8001 ,
--name planets ,
planets
```

### Ejecución en segundo plano

Ejecutar el contenedor en segundo plano:

```powershell
docker container run ,
--detach ,
--publish 8001:8001 ,
--name planets ,
planets
```

## Producción

### Utilizando Dockerfile

Construir la imagen:

```powershell
docker build --target prod --tag planets .
```

Ejecutar el contenedor en segundo plano:

```powershell
docker container run ,
--detach ,
--publish 8001:8001 ,
--name planets ,
planets
```

## Otros comandos

Detener el contenedor:

```powershell
docker container stop planets
```

Volver a ejecutar el contenedor:

```powershell
docker container start planets
```

Eliminar el contenedor:

```powershell
docker container rm planets
```

Eliminar la imagen:

```powershell
docker image rm planets
```