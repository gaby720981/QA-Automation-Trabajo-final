# QA Automation | Trabajo Final


Este proyecto corresponde al trabajo final del curso de QA Automation. Su objetivo es aplicar los conceptos aprendidos durante el curso, desarrollando un plan de pruebas, automatizando casos específicos con Cypress y gestionando incidentes detectados en Trello.

## Herramientas Utilizadas  

- [Cypress](https://www.cypress.io/): Framework para pruebas end-to-end.  
- [Mochawesome](https://github.com/adamgruber/mochawesome): Generador de reportes en formato HTML y JSON para pruebas automatizadas.  
- [Trello](https://trello.com/): Gestión de incidentes y reportes.

# Actividades Realizadas

## Plan de Pruebas  
El plan de pruebas describe los casos a automatizar, las acciones a realizar y los resultados esperados. Puedes acceder al documento detallado desde el siguiente enlace:  
- [Plan de Pruebas - Excel](https://docs.google.com/spreadsheets/d/18J58DFD9bDtqzA9eknBB6JO8qrG_eQl8/edit?usp=sharing&ouid=103850394186257193764&rtpof=true&sd=true)  

## Automatización de Pruebas

Se implementaron los siguientes casos de prueba automatizados en el archivo myTestSaucedemo.cy.js para el sitio saucedemo.com:

Usuario 1: standard_user
- **Login**
- **Agregar productos al carrito**
- **Realizar el checkout**
- **Validar el éxito del proceso de compra**
- **Cerrar sesión**

Usuario 2: problem_user
- **Login**
- **Repetición de las acciones realizadas con el usuario 1.**

## Gestión de Incidentes

Uso de Trello para documentar los defectos o mejoras detectados.
Utilización del template de reporte de bugs/mejoras provisto por el curso.

## Ejecución de Tests  

Existen dos formas de ejecutar los tests:  

- **Abrir la interfaz de Cypress**  
  1. Ejecuta el siguiente comando para abrir la interfaz gráfica de Cypress:  
     ```bash
     npx cypress open
     ```  
  2. Selecciona el navegador deseado.  
  3. Haz clic en el archivo de prueba `myTestSaucedemo.cy.js`.  

- **Modo Headless**  
  Para ejecutar los tests en modo headless:  
  ```bash
  npx cypress run
  ```

