# Star Wars API - Servicio Gateway

Este servicio forma parte de la API de Star Wars y actúa como un punto de entrada para la aplicación, enrutando las solicitudes a los servicios correspondientes.

### Construir la imagen:

```powershell
docker build --tag gateway .
```

### Ejecutar el contenedor en segundo plano a partir de la imagen creada anteriormente:

```powershell
docker container run ,
--detach ,
--publish 8000:8000 ,
--name gateway ,
gateway
```

## Red de conexión entre contenedores

### Crear red de conexión entre contenedores:

```powershell
docker network create star-wars-net
```

### Conectar los contenedores a la red:

```powershell
docker network connect star-wars-net characters
docker network connect star-wars-net films
docker network connect star-wars-net planets
docker network connect star-wars-net database
docker network connect star-wars-net gateway
```

## Otros comandos

### Detener todos los contenedores:

```powershell
docker container stop characters films planets database gateway
```

### Volver a ejecutar todos los contenedores:

```powershell
docker container start characters films planets database gateway
```

### Eliminar todos los contenedores:

```powershell
docker container rm -f characters films planets database gateway
```

### Eliminar las imagenes:

```powershell
docker image rm characters films planets database gateway
```