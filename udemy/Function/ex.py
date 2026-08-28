class Personagem:
    """Representa um personagem simples para praticar classes em Python."""

    vida = 100
    ataque = 25
    poderes_disponiveis = ["bola de fogo", "congelar"]

    def __init__(self, nome, classe="novato"):
        # Cada instância recebe seus próprios atributos.
        self.nome = nome
        self.classe = classe
        self.vida = Personagem.vida
        self.ataque = Personagem.ataque
        self.poder = None

    def atacar(self, alvo):
        """Reduz a vida do alvo de acordo com o ataque deste personagem."""
        alvo.vida -= self.ataque
        alvo.vida = max(alvo.vida, 0)
        alvo.ver_vida()

    def escolher_poder(self, indice):
        """Seleciona um poder pelo índice e devolve o nome escolhido."""
        self.poder = self.poderes_disponiveis[indice]
        return self.poder

    def ver_vida(self):
        """Exibe se o personagem continua vivo e seus pontos atuais."""
        estado = "Ainda está vivo" if self.vida > 0 else "Morreu"
        print(f"{self.nome}: {estado} ({self.vida} de vida)")

p1 = Personagem("Rafael")
p2 = Personagem("Mamute")

p1.escolher_poder(0)
p1.atacar(p2)
