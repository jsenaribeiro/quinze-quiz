import environments from "environments"
import { cache } from "./cache"

type Api = "/jogo"|"/jogadores"

const BASE_URL = environments.baseURL

const cacheKey = {
   "/jogo": "jogo",
   "/jogadores": "jogador"
}

export class RestApi {
   public static loading = false

   public static async get<T>(route: Api) {
      this.loading = true

      const data = await fetch(BASE_URL + route)
      const json = await data.json()

      this.loading = false

      return json as T
   }      

   public static async post<T>(route: Api, value: T, cached = false) {
      this.loading = true
      if (cached) cache(cacheKey[route], value)
      const conf = this.getSettings(value, "POST")
      await fetch(BASE_URL + route, conf)
      this.loading = false
   }

   public static async put(route: Api, value: { id: string }, cached = false) {
      this.loading = true
      const conf = this.getSettings(value, "PUT")
      if (cached) cache(cacheKey[route], value)
      await fetch(BASE_URL + route + `/${value.id}`, conf)
      this.loading = false
   }

   public static async delete(route: Api) {
      this.loading = true
      await fetch(BASE_URL + route, { method: "delete" })
      this.loading = false
   }

   private static getSettings = (data: any, mode: "POST"|"PUT") => ({
      method: mode, body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
}