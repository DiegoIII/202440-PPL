# Ejercicio 4
num1 = float(input("Ingresar el primer número: "))
num2 = float(input("Ingresar el segundo número: "))
num3 = float(input("Ingresar el tercer número: "))

mayor = num1
if num2 > mayor:
    mayor = num2
if num3 > mayor:
    mayor = num3

print("El número mayor es:", mayor)