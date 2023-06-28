# NOTAS DE DOCKER

### Construir la imagen:
```
docker build --tag gateway .
```

### Crear y/o ejecutar un contenedor en segundo plano a partir de la imagen creada anteriormente:
```
docker container run --detach --publish 8000:8000 --name=gateway gateway
```

## Crear red de conexión entre contenedores
```
docker network create star-wars-net
```

### Conectar a los contenedores a las red
```
docker network connect star-wars-net characters
docker network connect star-wars-net films
docker network connect star-wars-net planets
docker network connect star-wars-net gateway
```