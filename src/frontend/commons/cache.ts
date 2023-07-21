import { Jogador, Jogo } from "./models"

export function cache(field: "jogo"): Jogo
export function cache(field: "jogador"): Jogador
export function cache(field: "jogo", value: Jogo): Jogo
export function cache(field: "jogador", value: Jogador): Jogador
export function cache(field: string, value: any): any
export function cache(field: string, value: any = undefined) {
   if (value === undefined){      
      const json = localStorage.getItem(field)
      return JSON.parse(json ?? '{}')
   }

   else try { 
      var json = JSON.stringify(value)
      localStorage.setItem(field, json) 
      console.debug('cached', value)
      return value
   }
   catch { return value }
}