var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.olamundo = function () {
        return "Ola mundo! 2DS2";
    };
    return Pessoa;
}());
var p = new Pessoa();
document.getElementById("texto").textContent = p.olamundo();
