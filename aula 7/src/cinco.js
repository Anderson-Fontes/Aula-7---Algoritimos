nros = prompt("Entre com os numeros separados por virgula:");
nros = nros.split(",");
soma = 0;
for(i = 0; i < nros.length; i++ ){
    soma = soma + parseInt(nros[i])
}
console.log("Somatorio", soma)