import { Injectable } from "@angular/core"
import { NowService } from "./now.service"

@Injectable({providedIn: 'root'})
export class AppService{
   constructor(private now: NowService ){}

   public changeBackground(filename: string = "") {
      filename = filename || this.now.imagem

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