# Star Wars API - Servicio characters

Este servicio forma parte de la API de Star Wars y proporciona información sobre los personajes de Star Wars.

## Desarrollo

### Ejecución sin Dockerfile (No recomendado)

```powershell
docker container run ,
--publish 8001:8001 ,
--name characters ,
--workdir /app ,
--volume ${PWD}:/app ,
node:18.16-alpine ,
sh -c "npm install && npm run start:dev"
```

### Utilizando Dockerfile

Construir la imagen:

```powershell
docker build --target dev --tag characters .
```

Ejecutar el contenedor a partir de la imagen creada anteriormente:

```powershell
docker container run ,
--publish 8001:8001 ,
--name characters ,
characters
```

### Ejecución en segundo plano

Ejecutar el contenedor en segundo plano:

```powershell
docker container run ,
--detach ,
--publish 8001:8001 ,
--name characters ,
characters
```

## Producción

### Utilizando Dockerfile

Construir la imagen:

```powershell
docker build --target prod --tag characters .
```

Ejecutar el contenedor en segundo plano:

```powershell
docker container run ,
--detach ,
--publish 8001:8001 ,
--name characters ,
characters
```

## Otros comandos

Detener el contenedor:

```powershell
docker container stop characters
```

Volver a ejecutar el contenedor:

```powershell
docker container start characters
```

Eliminar el contenedor:

```powershell
docker container rm characters
```

Eliminar la imagen:

```powershell
docker image rm characters
```

