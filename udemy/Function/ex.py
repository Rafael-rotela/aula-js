class Personagem:

    vida = 100
    ataque = 25
    poder = ['bola de fogo', 'congelar']

    def __init__(self,nome,classe = 'novato'):
        self.nome = nome
        self.classe = classe
        self.vida = self.vida
        self.ataque = self.ataque
        self.poder = self.poder

    def atacar(self, alvo):
        alvo.vida -= self.ataque
        minhaVida = self.vidassssss

        if(minhaVida > 0):
            print('Ainda esta vivo' , self.vida)
        else:
            print('Morreu') 

    def EscolherPoder(self):
        
        

p1 = Personagem('Rafael')
p2 = Personagem('Mamute')

 
p2.verVida()