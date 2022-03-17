let opcion;
let cantOperaciones = []

console.log("Ingrese 2 numeros realizar operaciones:")
let numUno = prompt("Ingrese el numero 1")
let numDos = prompt("Ingrese el numero 2")
opcion = 1

while (opcion != 0){
const operacion = (numA, numB, array, opcion) => {

    if(opcion == 1)
    {
        let oper = parseInt(numA)+parseInt(numB);
        array.push("Suma")
        return `el resultado de la suma es: ${oper}`;
    }
    else if(opcion == 2)
    {
        let oper = numA-numB;
        array.push("Resta")
        return `el resultado de la resta es: ${oper}`;

    }
    else if(opcion == 3)
    {
        let oper = numA*numB;
        array.push("Mutiplicacion")
        return `el resultado de la mutiplicacion es: ${oper}`;

    }
    else if(opcion == 4)
    {
        let oper = numA/numB;
        array.push("Division")
        return `el resultado de la division es: ${oper}`;
    }
    else if(opcion <=5)
    {
        return "Elija una opcion valida";
    };

}

console.log("Que opreacion desea realizar?")
opcion = prompt("1. sumar \n" +
                "2. restar \n" +
                "3. multiplicar \n" +
                "4. Dividir\n" +
                "0. Salir");
console.log(operacion(numUno, numDos, cantOperaciones, opcion))
console.log(`Operaciones realizadas: ${cantOperaciones}`);
}
