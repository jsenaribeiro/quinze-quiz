export interface Rank {
   usuario: string
   pontos: number
}

export interface Fase {
   tipo: number
   titulo: string
   imagemId: number
   questoes: Questao[]
   introducao: Introducao[]
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
   ranking: Rank[]
   imagens: string[]
}

export interface Jogador {
   nome: string
   pontos: number
   progresso: number
   respondidas: Resposta[]
}