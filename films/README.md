# NOTAS DE DOCKER

## Sin utilizar Dockerfile (No recomendado)

### Crear y ejecutar un contenedor utilizando una imagen de Node.js, un volumen y comandos de shell:
```
docker container run ,
--publish 8002:8002 ,
# --network star-wars-net,
--name films ,
--workdir /app ,
--volume ${PWD}:/app ,
node:18.16-alpine ,
sh -c "npm install && npm start"
```
* La tercer línea, que está comentada, establece la conexión del contenedor con la red 'star-wars-net' en caso de haber sido creada previamente.

## Utilizando Dockerfile

### Construir la imagen SIN etiqueta:
```
docker build .
```
### Crear y ejecutar un contenedor a partir de la imagen creada anteriormente:
```
docker images
docker container run --publish 8002:8002 --name=films IMAGE_ID
```
* Si no se asigna una etiqueta durante la construcción de la imagen, esta quedará con un nombre poco legible, lo que requerirá utilizar el ID de la imagen (los tres primeros caracteres son suficientes) al ejecutar un contenedor a partir de ella.
* Se publica (expone) y enlaza el puerto 8002 del contenedor con el mismo puerto en la máquina local. Esto permite acceder a los servicios o aplicaciones que se ejecutan dentro del contenedor a través del puerto 8002 en el host.
* El nombre del contenedor puede ser utilizado para conectarlo a una red y referirse a él como host en el entorno.

### Construir la imagen CON etiqueta:
```
docker build --tag films .
```
### Crear y ejecutar un contenedor a partir de la imagen creada anteriormente:
```
docker container run --publish 8002:8002 --name=films films
```
<hr/>

### Crear y ejecutar un contenedor en segundo plano a partir de la imagen creada anteriormente:
```
docker container run --detach --publish 8002:8002 --name=films films
```

<hr/>

### Detener el contenedor creado anteriormente:
```
docker container start films
```

<hr/>

### Volver a ejecutar el contenedor creado anteriormente:
```
docker container start films
```

<hr/>

### Eliminar el contenedor creado anteriormente:
```
docker container rm -f films
```

<hr/>

### Eliminar la imagen creado anteriormente:
```
docker image rm films
```
