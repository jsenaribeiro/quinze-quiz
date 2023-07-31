export * from './restApi'
export * from './models'
export * from './requests'

export function throws<T>(message) {
   if (message) throw message
   return {} as T
}

export const waitAsync = (ms: number, fnc: Function) => 
   new Promise<void>((done, fail) => setTimeout(() => { 
      try { fnc(); done() } catch { fail() } }, ms))