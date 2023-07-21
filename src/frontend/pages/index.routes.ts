import { Routes } from '@angular/router'

const route = (path: string, importer: Function) => ({ path, loadComponent: () => importer() })

export const routes: Routes = [
   route('home', () => import('./home/home.page').then(m => m.HomePage)),   
   route('quiz', () => import('./quiz/quiz.page').then(m => m.QuizPage)),
   route('intro', () => import('./intro/intro.page').then(m => m.IntroPage)),
   route('final', () => import('./final/final.page').then(m => m.FinalPage)),
   { path: '', redirectTo: 'home', pathMatch: 'full', }
];
