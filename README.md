# Desafío - Vuex

1. Crear un proyecto con Vue CLI que incluya Babel y Vuex únicamente en sus configuraciones.

`Con gitBash se hace un 'vue create' con el nombre del proyecto y se eligen 'Babel' y 'Vuex' `

2. Alojar el JSON de juegos en el estado global de la aplicación.

Se copia el `.json` en la carpeta `public` 

![alt text](<src/assets/utils/code 1.png>)

Se crea el estado global 

![alt text](<src/assets/utils/code 2.png>)

Se hace una mutación para hacer la llamada al json y acceder al 'array' a usar.

![alt text](<src/assets/utils/code 2.1.png>)

3. Utilizar mapState para el consumo de los juegos en el componente app.

`Aquí se accede al estado global 'juegos'`

![alt text](<src/assets/utils/code 3.png>)

4. Utilizar acciones para modificar el stock de los videojuegos.

Esta parte del código se encuentra en 'mutations' `'/store/index'`

![alt text](<src/assets/utils/code 4.png>)
![alt text](<src/assets/utils/code 4.1.png>)

### Por Nicolás Valderrama