# Proyecto2_GH_Travels

## 2º Actividad semanal Aplicacion Responsive.

Después de tener en producción nuestra web de viajes, nuestro compañero Javi Olmo se ha dado cuenta que el 60% de las visitas se producen desde dispositivos móviles, por tanto creemos conveniente que nuestra web sea suficientemente responsive para que no se produzcan demasiados rebotes.

Para ello os pasamos otro mockup/diseño de como queremos que sea nuestra vista en dispositivos móbiles.
![alt text](https://github.com/GeeksHubsAcademy/Actividad_2/blob/master/Agencia%20de%20viajes%20Bootcamp.jpg)

Respecto al menú desplegable debería aparecer de la siguiente manera.
![alt text](https://github.com/GeeksHubsAcademy/Actividad_2/blob/master/Agencia%20de%20viajes%20Bootcamp%20-%20menu%20desplegable.jpg)

---

### Condiciones

* Continuamos tratándolo como una SPA.
* En mobile debe aparecer los siguientes apartados.
  * Header con menu superior que cambiará de color y aplicará un fondo transparente para que en las zona blancas se pueda ver .
  * Debe aparecer un carrousel con diferentes imágenes en el header se ocultarán las barras laterales para cambiar y se pondra horizontalmente puntos para indicar el cambio de slide.
  * En el apartado viajes se convertira en una vista de tipo carrousel donde el usuario pulsando sobre las flechas podrá cambiar de un viaje a otro, no tendrá puesta en marcha automático sino la iteracción se producirá cuando el usuario pulse alguna de las flechas laterales. Además estás flechas deben verse bién y tener un tamaño suficiente para que sea factible su utilización.
  * En el apartado quienes somos desaparecerá la imagen de fondo y apareerá sólo un color con la descripción.
  * El apartado de localización no es visible en mobile.
  * El footer debera ser igual al de la imagen.

---

### Caraterísticas.
* Debe utilizarse Bower para la instalación de las dependencias.
* El proyecto debe estar subido en un contenedor de vagrant y debe cumplir las siguientes características:
 * Debe existir un vagrantfile con las condiciones del contenedor.
 * El contenedor debe disponer de apache instalado y configurado con la aplicación.
 * El contenedor debe disponer de git instalado y apuntando al repositorio remoto:
   * Debe ser actualizables con un simple git pull.
 * La página web debe ser visible desde el equipo anfitrion una vez levantado el contenedor.
