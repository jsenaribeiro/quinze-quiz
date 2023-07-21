

export interface Classificacao {
   usuario: string
   pontos: number
}

export interface Fase {
   tipo: number
   imagem: number
   titulo: string
   questoes: Questao[]
   introducao: Introducao[]
}

export interface Introducao {
   titulo: string
   texto: string
}

export interface Questao {
   texto: string
   faseId: number
   opcoes: Opcao[]
}

export interface Opcao {
   texto: string
   pontos: number
   faseId: number
   questaoId: number
}

export interface Resposta {
   texto: string
   faseId: number
   opcaoId: number
   questaoId: number
}

export interface Progresso {
   fase: Fase
   passou: boolean
   questao: Questao
}

export interface Jogo {
   fases: Fase[] 
   imagens: string[]
   classificacao: Classificacao[]
}

export interface Jogador {
   id: string
   nome: string
   faseId: number
   questaoId: number
   respostas: Resposta[]
   pontuacao: number
   ranking: number
}