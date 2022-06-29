# Sprint 4  
*Tenemos acceso a un test, ejecutarlo usando npm run test:watch.*

## Nivel 1
### Ejercicio 1  
- Mostrar por pantalla al usuario solo los directores de las películas.
- Para obtener el array de directores crear la función getAllDirectors().
- No hay que hacer el renderizado del resultado de esta función, solo devolver el array.  
*Implementar un bucle map para recorrer el array de películas. No olvidar que cada película es un objeto y solo nos interesa el campo "director".*  

### Ejercicio 2
- Necesitamos mostrar las películas de un determinado director.  
- Crear la función getMoviesFromDirector().
- La función recibe por parámetro el director y devuelve el array de películas que ha dirigido.  
*Se puede utilizar el método filter.*  

### Ejercicio 3  
- Calcular la media de las puntuaciones de las películas de cada director.  
- Implementar la función moviesAverage().
- La función recibe un array de películas y devuelve la media con dos decimales.  
*Se puede utilizar el método reduce para obtener un solo valor*

### Ejercicio 4  
- Crear una función que reciba un array de películas y lo devuelva ordenado alfabéticamente por título.  
- Sólo se tienen que devolver las 20 primeras películas ordenadas.  
*Mirar el archivo films.spec.js y revisa los test del ejercicio 4 para ver si hay que devolver un array con toda la info de las pelis o sólo su título.*

### Ejercicio 5  
- Implementar una función que reciba un array de películas y devuelva un array de películas ordenadas por año.
- Las que coinciden en año se tienen que ordenar por orden alfabético.  

### Ejercicio 6  
- Crear una función que reciba una categoría de película y calcule la media de nota de esta categoría (sobre el array de todas las pelíuclas).
- Hay que usar la función creada en el ejercicio 3.  
- Primero hay que obtener la pelis de una determinada categoría y después llamar a moviesAverage() para calcular la media.




