export function separateDecimals(str) { //permite separar los decimales del precio
    var decimals = "00";
    decimals = str - Math.floor(str);
    //console.error(decimals)
    decimals = parseFloat(decimals).toFixed(2)
    decimals = decimals.toString().replace("0.", ""); //me quedo solo con los decimales
    if (decimals.length === 1) decimals = decimals+"0" //agrego un 0 si falta
    if (decimals === "00") decimals = "" //no los muestro si no hay
    return decimals;
}

export function addDots(nStr) { //agrega puntos en el precio cada 3 cifras
    // desp identa
    nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, `${'$1'}.${'$2'}`);
        }
        return x1 + x2;
    }