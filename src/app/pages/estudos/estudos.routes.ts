import { Routes } from '@angular/router';


// pages
import { EstudoCampoHarmonicoComponent } from './campoharmonico/estudo-campoharmonico.component';

export const EstudosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'campoharmonico',
        component: EstudoCampoHarmonicoComponent,
      }
    ],
  },
];
