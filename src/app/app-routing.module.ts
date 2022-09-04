import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { PlayersGuard } from './players.guard';

const routes: Routes = [
{path:'',
component: AppComponent,
//canActivate:[AuthGuard],
children:[ 
  {
    path:'',
    loadChildren: () => import('src/app/modules/teams/teams.module').then(m => m.TeamsModule),
  }
]

  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
