import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatTableModule } from '@angular/material/table'
import { TablerIconsModule } from 'angular-tabler-icons'

// card 2
interface campoHarmonico {
    key: string
    notes: string[]
}

enum tipoCampoHarmonico {
    Maior,
    Menor,
    MenorHarmonico,
    MenorMelodico,
}

@Component({
    selector: 'app-tabela-campo-harmonico',
    imports: [MatTableModule],
    templateUrl: './tabela-campoharmonico.component.html',
})
export class AppTabelaCampoHarmonicoComponent {
    constructor() {}

    columnsToDisplay = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']

    campoHarmonicoMaiorTriade: campoHarmonico[] = [
        { key: 'C', notes: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'] },
        { key: 'C#', notes: ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'] },
        { key: 'D', notes: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'] },
        { key: 'D#', notes: ['D#', 'E#m', 'Gm', 'G#', 'A#', 'C#m', 'D#dim'] },
        { key: 'E', notes: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'] },
        { key: 'F', notes: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'] },
        { key: 'F#', notes: ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'] },
        { key: 'G', notes: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'] },
        { key: 'G#', notes: ['G#', 'A#m', 'C#m', 'C#', 'D#', 'E#m', 'Gdim'] },
        { key: 'A', notes: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'] },
        { key: 'A#', notes: ['A#', 'B#m', 'D#m', 'D#', 'F', 'Gm', 'A#dim'] },
        { key: 'B', notes: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'] },
    ]
}
