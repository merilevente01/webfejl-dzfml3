import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) 
  },

  { 
    path: 'races', loadChildren: () => import('./pages/races/races.module').then(m => m.RacesModule) 
  },

  { 
    path: 'teams', loadChildren: () => import('./pages/teams/teams.module').then(m => m.TeamsModule) 
  },

  { 
    path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },

  { 
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },

  { path: 'successful', loadChildren: () => import('./pages/teams/successful/successful.module').then(m => m.SuccessfulModule) },


  { 
    path: '**',
    redirectTo: '/not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
