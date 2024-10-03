nros = prompt("Entre com os números separados por vírgula:");
nros = nros.split(",");

for(i =0; i < nros.length; i++){
    nro = parseInt(nros[i]);
    if( nro%2 == 0 ){
        console.log(nro);
    }
}