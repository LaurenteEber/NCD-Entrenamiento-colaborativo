# Entrenamiento colaborativo de modelos de IA

Este es el proyecto entregable para la certficación del NCD.
Haste el día de presentación se avanzó con un primera versión del contrato y el frontend. 

Contrato:
- La cuenta del contrato es ncd-entrenamiento-colaborativo_ia.eber.testnet
- Método set_colaborador permite registrarse al colaborador una vez que ha seleccionado el dataset ```near call <cuenta_del_contrato> '{"dataset_id":<número>}' --accountId <nombre.testnet>```   
- Método get_colaboradores permite obtener la relación de colaboradores registrados ```near view <cuenta_del_contrato> get_colaboradores```
- Método set_validacion permite asignar un porcentaje de validación de la data etiquetada por el colaborador, este método solo es ejecutado por el cuenta administradora ```near call <cuenta_del_contrato> '{"cuenta":"<ceunta_colaborador>","dataset_id":<número>}' --accountId eber.testnet```