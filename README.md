# Hola 👋🏽, soy Naiara

**Y este es mi ejercicio de evaluación final del módulo 3, React**

- El ejercicio consiste en desarrollar una página web con el listado de las escenas de las películas donde el
  actor Owen Wilson ha dicho 'wow'. Vamos a usar React para realizarlo.

**Vamos a utilizar esta [API Wow de Owen Wilson](https://owen-wilson-wow-api.herokuapp.com/)**

1. **Listado de escenas:**

   -En primer lugar, vamos a realizar una web con el listado de 50 escenas donde el actor Owen Wilson ha
   dicho 'wow'.
   Para eso, vamos a utilizar el servicio de esta [API](https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50/), que nos devuelve información de 50 escenas de películas aleatorias. Sobre cada una, vamos a
   mostrar al menos:

   - Poster (poster)
   - Película (movie)
   - Frase completa (full_line)
   - Año (year)

2. **Filtrado por película**

- Ahora que ya tenemos el listado de escenas, la segunda parte consiste en realizar un filtro para buscar por
  película. Para eso, añadimos un **_input_** a la interfaz, de forma que al ir escribiendo un nombre queden en la
  interfaz solo las escenas cuya película contiene las letras escritas.

```bash
  **Nota:** en principio no es necesario tener en cuenta si las letras están en mayúscula / minúscula para
  la búsqueda, pero si queréis añadir esta mejora pues genial.
```

3. **Filtrado por año**

- Ahora que ya tenemos el listado de escenas en pantalla, y filtrado por nombre de la película donde aparece
  la escena, la siguiente parte consiste en filtrar el listado por año de la película. Para eso, añadimos un
  **_select_** a la interfaz, de forma que al seleccionar un año queden en la interfaz solo las escenas que
  coincidan con el año seleccionado

```bash
**Nota:**
- Por defecto, cuando carga la página debe aparecer **todos.**
- Obtén los años de las películas del listado.
```

4. **Componentes de la aplicación**

- La aplicación debe tener los siguientes componentes como mínimo:
  - Componente para los filtros.
  - Componente para el listado **(MovieSceneList)**.
  - Componente para la tarjeta de cada escena del listado **(MovieSceneItem).**
  - Componente para el detalle de cada escena del listado **(MovieSceneDetail).**

5. **Detalle de cada escena**

- Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de una escena, su información
  aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de
  detalle aparecerá:

      - nombre de la película
      - frase completa
      - director
      - el enlace del audio de la escena, al darle clic debe mostrarse en una pestaña aparte en el navegador.

```bash
**Nota:** no recomendamos mostrar el detalle de cada escena con una ventana modal por encima del
listado de escenas de las películas porque es más complejo. Es mejor quitar el componente
MovieSceneList y mostrar el componente MovieSceneDetail usando React Router.
```

6. **Detallitos de calidad**

- Como nos gusta cuidar la semántica, el campo de texto debe estar recubierto por una etiqueta
  **_<form />._**
- Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegue o cambie
  la ruta sin querer.
- Si se busca por un texto por ejemplo "ZZZ" y no hay ninguna escena de película que coincida con
  dicho texto se debe mostrar un mensaje del tipo "No hay ninguna nombre de película que coincida
  con la palabra ZZZ"
- El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o
  minúsculas.
- Al entrar en el detalle de un escena y a continuación pulsar atrás, el campo de texto debe mostrar el
  texto que tenía anteriormente.

7. **BONUS: Mejoras visuales**

- Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:
  - Poner bonita tu web y agregar el estilo que desees.
  - Agregar iconos a la información que se muestre en el detalle de las escenas.
  - Usar algún sistema de grid para pintar el listado.
  - Que funcione bien el responsive en dispositivos pequeños.

8. **BONUS: URL compatible**

- Como ejercicio extra os proponemos que la URL del detalle de cada escena sea compatible, es decir,
  que si visitamos esa URL directamente en el navegador se vea el detalle de la escena de una película.
  Si refrescamos el navegador en el detalle de una escena de la película debe volver a mostrar el
  detalle de la película, solo si está almacenado en el local storage.

- Y en el caso de que el usuario navegue a una URL inexistente como por ejemplo
  **_http://localhost:3000/detail/12345_** (el id 12345 no existe) debemos mostrar un mensaje
  del tipo "La escena que buscas no existe".

9. **BONUS: Ordenación**

- Un extra interesante sería que ordenáseis el listado de escenas alfabéticamente por el nombre de la
  película.

# Donde se puede ver 👀

# Este proyecto ha sido desarrollado con:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>

# Guía para arrancar el proyecto

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit.

**Pasos a seguir :**

1. _Clonar este repositorio_
2. _Abrir una terminal en la carpeta raíz del repositorio_
3. _Instalar las dependencias locales ejecutando en la terminal el comando:_

```bash
npm install
```

**Arrancar el proyecto con el comando**

```bash
npm start
```

**Para generar la página**

```bash
npm run docs
```

**Autora:**
[Naiara Saratxaga](https://github.com/NaiSaratxaga)
