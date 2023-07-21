import { Injectable } from "@angular/core"
import { CacheService } from "./cache.service"

@Injectable({providedIn: 'root'})
export class AppService{
   constructor(private cache: CacheService ){}

   public changeBackground(filename: string = "") {
      filename = filename || this.cache.imagem

      const root = document.querySelector(':root') as any
      const mode = this.isDarkMode ? 'dark' : 'light'
      const data = `url(/assets/${mode}/${filename})`
      root.style.setProperty('--bg-image', data) 
   }

   public get isDarkMode() { 
      const matching = window.matchMedia
      const labeling = '(prefers-color-scheme: dark)'
      return !!(matching && matching(labeling).matches) 
   }
}