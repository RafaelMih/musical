import { Routes } from '@angular/router'

// pages
import { EstudoCampoHarmonicoComponent } from './campoharmonico/estudo-campoharmonico.component'
import { FuncoesHarmonicasComponent } from './funcoesharmonicas/funcoesharmonicas.component'
import { CadenciasComponent } from './cadenciasharmonicas/cadencias.component'
import { ProgressoesHarmonicasComponent } from './progressoesharmonicas/progressoesharmonicas.component'

export const EstudosRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'campoharmonico',
                component: EstudoCampoHarmonicoComponent,
            },
            {
                path: 'funcoesharmonicas',
                component: FuncoesHarmonicasComponent,
            },
            {
                path: 'cadenciasharmonicas',
                component: CadenciasComponent,
            },
            {
                path: 'progressoesharmonicas',
                component: ProgressoesHarmonicasComponent,
            },
        ],
    },
]
