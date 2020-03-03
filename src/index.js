module.exports = function check(str, bracketsConfig) {
    var array = bracketsConfig.map(function(a) {
        return (a = a[0] + a[1]);
    });
    var length = str.length / 2;
    for (var i = 1; i <= length; i++) {
        for (var j = 0; j <= array.length; j++) {
            str = str.replace(array[j], "");
        }
    }
    return str.length === 0 ? true : false;
};