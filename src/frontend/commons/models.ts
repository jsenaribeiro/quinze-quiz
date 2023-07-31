export interface Ranking {
   jogador: string
   posicao: number
}

export interface Fase {
   tipo: number
   titulo: string
   imagemId: number
   questoes: Questao[]
   introducoes: Introducao[]
}

export interface Introducao {
   titulo: string
   texto: string
}

export interface Questao {
   texto: string
   opcoes: Opcao[]
}

export interface Opcao {
   fase: string
   texto: string
   pontos: number
   questao: string
}

export interface Resposta { 
   certo: boolean  
   jogador: string
   progresso: number
   respondido: string
}

export interface Jogo {
   content: Fase[] 
   imagens: string[]
   ranking: Ranking[]
}

export interface Jogador {
   nome: string
   pontos: number
   progresso: number
   respondidas: Resposta[]
}