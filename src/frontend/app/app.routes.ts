import { Routes } from '@angular/router'

const route = (path: string, importer: Function) => ({ path, loadComponent: () => importer() })

export const routes: Routes = [
   route('home', () => import('../pages/home/home.page').then(m => m.HomePage)),   
   route('quiz', () => import('../pages/quiz/quiz.page').then(m => m.QuizPage)),
   route('intro', () => import('../pages/intro/intro.page').then(m => m.IntroPage)),
   route('final', () => import('../pages/final/final.page').then(m => m.FinalPage)),
   { path: '', redirectTo: 'home', pathMatch: 'full', }
];
