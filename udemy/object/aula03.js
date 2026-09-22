// getter - setter
function Produto(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this,'estoque',{
    enumerable: true, // mostra a chve
    configurable: true, // configurável
    get: function(){
      return estoque;
    }, 
    set: function(valor){
      console.log(valor);
    }
  });
}

const p1 = new Produto('Camisa',20,3);
p1.estoque = 50000000;
console.log(p1);