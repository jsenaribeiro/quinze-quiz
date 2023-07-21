export { }

declare global {
   interface Array<T> {
      sum(): number
      sum(lambda:(field:T) => number): number
      at(index:number): T
   }
}

Array.prototype.sum = function<T>(lambda?:(field:T) => number) {
   if (!lambda) return this.reduce((last, next) => last + next, 0)
   return this.reduce((last: number, next) => last + lambda(next), 0)
}