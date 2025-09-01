// Classe base

class Personagem {
  constructor(nome, vida, ataque, defesa) {
    this.nome = nome;
    this.vida = vida;
    this.ataque = ataque;
    this.defesa = defesa;
  }

  atacar(alvo) {
    const dano = this.ataque - alvo.defesa;
    const danoFinal = dano > 0 ? dano : 0;
    alvo.vida -= danoFinal;
    console.log(`${this.nome} atacou ${alvo.nome} causando ${danoFinal} de dano.`);
  }

  estaVivo() {
    return this.vida > 0;
  }
}

// Subclasses
class Anao extends Personagem {
  habilidadeEspecial(alvo) {
    const dano = this.ataque * 2 - alvo.defesa;
    alvo.vida -= dano;
    console.log(`${this.nome} usou Golpe de Machado em ${alvo.nome} causando ${dano} de dano!`);
  }
}

class Mago extends Personagem {
  habilidadeEspecial(alvo) {
    const dano = this.ataque + 10 - alvo.defesa;
    alvo.vida -= dano;
    console.log(`${this.nome} lançou Bola de Fogo em ${alvo.nome} causando ${dano} de dano!`);
  }
}

class Arqueiro extends Personagem {
  habilidadeEspecial(alvo) {
    const dano = this.ataque * 1.5 - alvo.defesa;
    alvo.vida -= dano;
    console.log(`${this.nome} disparou Flecha Veloz em ${alvo.nome} causando ${dano} de dano!`);
  }
}

// Sistema de batalha
function batalha(p1, p2) {
  console.log(`🏹 Batalha entre ${p1.nome} e ${p2.nome} começa!`);
  while (p1.estaVivo() && p2.estaVivo()) {
    p1.atacar(p2);
    if (p2.estaVivo()) {
      p2.habilidadeEspecial(p1);
    }
  }

  const vencedor = p1.estaVivo() ? p1.nome : p2.nome;
  console.log(`🏆 ${vencedor} venceu a batalha!`);
}

// Exemplo de uso
const anao = new Anao("Thorin", 100, 20, 10);
const lenore = new Mago("Lenore", 80, 25, 5);

batalha(anao, lenore);
