# NOTAS DE DOCKER

### Construir la imagen:
```
docker build --tag gateway .
```

### Crear y ejecutar un contenedor en segundo plano a partir de la imagen creada anteriormente:
```
docker container run --detach --publish 8000:8000 --name=gateway gateway
```

### Crear red de conexión entre contenedores:
```
docker network create star-wars-net
```

### Conectar los contenedores a las red:
```
docker network connect star-wars-net characters
docker network connect star-wars-net films
docker network connect star-wars-net planets
docker network connect star-wars-net database
docker network connect star-wars-net gateway
```
<hr/>

### Detener los contenedores creados anteriormente:
```
docker container stop characters films planets database gateway
```

<hr/>

### Volver a ejecutar los contenedores creados anteriormente:
```
docker container start characters films planets database gateway
```

<hr/>

### Eliminar los contenedores creados anteriormente:
```
docker container rm -f characters films planets database gateway
```

<hr/>

### Eliminar las imagenes creadas anteriormente:
```
docker image rm characters films planets database gateway
```
