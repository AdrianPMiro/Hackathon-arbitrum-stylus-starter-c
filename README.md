# Hackaton - Proyecto de Blockchain

-----------------------------------------------------

## 1. Introducción 🏆

Bienvenidos al proyecto que hemos realizado para la Hackaton de Blockchain. 

En la Hackaton nuestra meta era aprender sobre el temario que se proponía en el proyecto, en este caso Blockchain, para poder alcanzar un nivel con el que realizar un proyecto que se ajustara a los requerimientos dados por la misma.

-----------------------------------------------------

## 2. Objetivo de la Hackaton

El objetivo de la Hackaton es lograr la creación de una Dapp (Aplicación descentralizada) aplicando conocimientos de Blockchain. La idea es conseguir realizarlo en grupos entre compañeros, y entre los requisitos de la inscripción se encuentra que no se necesitan conocimientos previos de Blockchain, por lo que otro de los objetivos de la Hackaton es que los estudiantes aprendan los conocimientos necesarios de este campo para poder realizar el proyecto.

-----------------------------------------------------

## 3. Sobre nuestro proyecto / ¿En qué consiste? 🎯

La idea y planteamiento de nuestro proyecto consiste en un concepto que ofrezca total confianza y transparencia, con la creación de una página web que permita al usuario realizar donaciones a determinados colectivos en situaciones de necesidad de una manera más segura y transparente a la tradicional mediante transferencias, gracias a la implementación de Blockchain. Esto implicaría una mayor sensación de seguridad y honestidad en el usuario al conocer que sus donaciones van a ser totalmente transparentes e instántaneas.

-----------------------------------------------------

## 4. Transcurso del proyecto:

Para proceder con el proyecto empezamos planteando diferentes ideas hasta que nos cuadrara una que encajara con el tiempo y los requisitos pedidos por la Hackaton. En un principio, la idea del proyecto distaba de las capacidades que teníamos, pero durante el transcurso del proyecto realizamos una intensa investigación para poder estar al nivel necesario para plasmar la idea que teníamos en mente a código. Para empezar, nos repartimos las tareas del proyecto entre los miembros en función de nuestros puntos fuertes, de tal manera que Adrián Pedrero se encargó de la realización del Backend de la página web, Manuel Cuesta se ocupó de realizar el Frontend de la página y Nicolás Rosón se encargó de parte del Frontend, del diseño de la página web y de la realización del archivo README.

-----------------------------------------------------

## 5. ¿Cómo hacerlo funcionar?

Primero de todo, instalar dependencias:

- Brew (Mac y linux) / Chocolatey (Windows)
- Docker / Docker Desktop
- rust, cargo, rustup
- nodejs, npm y nextjs
- hardhat
- LLVM

Luego, clonar el siguiente repositorio:

```git clone https://github.com/AdrianPMiro/Hackathon-arbitrum-stylus-starter-c.git && cd Hackathon-arbitrum-stylus-starter-c``` 

Una vez clonado, ejecutar el siguiente comando para instalar las dependencias necesarias:

```npm install```

Para ejecutar el proyecto, primero compilar el contrato inteligente:

```make```

Luego, ejecutar el siguiente comando para desplegar el contrato inteligente:

```make deploy```

Por último, ejecutar el siguiente comando para iniciar el servidor:

```make frontend```

Con esto, ya debería estar funcionando el proyecto en la dirección http://localhost:3000/


Configuraciones avanzadas:

Si queremos probarlo en la red de Arbitrum, tendremos que seguir unos pasos muy específicos:

1. Configurar la red de Arbitrum en MetaMask
2. Hacer deploy del contrato inteligente en la red de Arbitrum 3 veces (una por cada proyecto)
3. Cambiar las direcciones de los contratos en el archivo `frontend/components/carousel/carousel.tsx' por las direcciones de los contratos desplegados en la red de Arbitrum

-----------------------------------------------------

## 6. Mejoras:

¿Si tuviéramos más tiempo, qué haríamos?

Lo más destacable era la implementación de una mayor cantidad de objetivos y ampliar las posibilidades de donaciones para que el usuario disponga de más opciones en las que poder realizar las donaciones para ayudar a otros colectivos necesitados.

Otro de los cambios que habríamos hecho en caso de haber dispuesto de más tiempo es mejorar el diseño de la página web, para la que teníamos ideas en mente más ambiciosas que por falta de tiempo no pudimos implementar.

Por último, otra de las ideas que habíamos pensado para nuestro proyecto que no pudimos implementar era un incentivo para las donaciones, que consistía en la obtención de un NFT al cumplir con una serie de objetivos a la hora de realizar donaciones, como podía ser donar lo suficiente para permitir la plantación de 10 árboles, por ejemplo.

-----------------------------------------------------

## 7. Conclusión ✨

Para nosotros ha sido realmente interesante llevar a cabo el proyecto, nos ha resultado una jornada intensa donde hemos puesto a prueba una amplia variedad de capacidades, empezando por la organización y la capacidad mental al adentrarnos en un área en el que teníamos escaso conocimiento previo, por lo que a su vez también estamos satisfechos de haber tenido la oportunidad de haber podido aprender tal cantidad de nuevos conceptos y posibilidades que ofrece el campo de Blockchain. Todos los miembros del equipo estamos de acuerdo de que para nosotros esta ha sido una experiencia muy enriquecedora y que sin duda será de mucha utilidad en un futuro dado que realizamos proyectos en áreas similares con las que podemos compatibilizar lo aprendido durante la Hackaton.


-----------------------------------------------------

## 8. Equipo

Este proyecto ha sido creado por Adrián Pedrero Miró, Manuel Cuesta Barrios y Nicolás Rosón Muñoz en el campus de 42 Madrid durante la Hackaton "Learn & Earn" llevada por Lemon, centrada en el ámbito de Blockchain y sus diferentes utilidades.
