Algoritmo sueldoEmpleado
	Definir nombre, apellido Como Caracter
	Definir sueldo_actual, nuevo_sueldo Como Real
	Escribir "Ingrese nombre y apellido del empleado: "
	Leer nombre, apellido
	Escribir "Ingrese el sueldo actual del empleado: "+ apellido
	Leer sueldo_actual
	
	si (sueldo_actual < 33000) Entonces
		Escribir "Le corresponde un aumento del 20%"
		nuevo_sueldo = sueldo_actual*1.20
	SiNo
		Escribir "Le corresponde un aumento del 15%"
		nuevo_sueldo = sueldo_actual*1.15
	FinSi
	Escribir "El sueldo que le corresponde a ", nombre , " " ,apellido,  " es de: ", nuevo_sueldo
	
FinAlgoritmo
