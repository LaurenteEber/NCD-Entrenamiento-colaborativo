# Entrenamiento colaborativo de modelos de IA

Este es el proyecto entregable para la certficación del NCD de NEAR Hispano llevado acabo del 17/10/2022 al 21/10/2022.
Haste el día de presentación se avanzó con un primera versión del contrato y el frontend. 

Contrato:
- La cuenta del contrato es ncd-entrenamiento-colaborativo_ia.eber.testnet
- Método set_colaborador permite registrarse al colaborador una vez que ha seleccionado el dataset ```near call <cuenta_del_contrato> '{"dataset_id":<número>}' --accountId <nombre.testnet>```   
- Método get_colaboradores permite obtener la relación de colaboradores registrados ```near view <cuenta_del_contrato> get_colaboradores```
- Método set_validacion permite asignar un porcentaje de validación de la data etiquetada por el colaborador, este método solo es ejecutado por el cuenta administradora ```near call <cuenta_del_contrato> '{"cuenta":"<ceunta_colaborador>","dataset_id":<número>}' --accountId eber.testnet```
- Se hace un test de validación del método set_colaborador.

Frontend:
- Permite el iniciar sesión con el wallet de NEAR
- pemite ingresar un número como id del dataset a entrenar y se ejecuta el contrato set_colaborador. 
- Aún es muy limitado esta versión del frontend, por ejemplo permite el ingreso de texto lo cual llega a error.

Para replicar el proyeto:
- Clonar el repositorio
- npm install       // Para instalación de dependencia
- npm run build     // Para correr el programa
- npm run deploy    // para desplegar en la testnet de NEAR
- npm start         // para inciar el servidor del frontend