import { Component, Input } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'

export enum tipoCampoHarmonicoEnum {
    MaiorTriade,
    MaiorTetrade,
    MenorTriade,
    MenorTetrade,
    MenorHarmonico,
    MenorMelodico,
}

@Component({
    selector: 'app-tabela-campo-harmonico',
    imports: [MatTableModule, MatInputModule],
    templateUrl: './tabela-campoharmonico.component.html',
})
export class AppTabelaCampoHarmonicoComponent {
    @Input()
    tipoCampoHarmonico!: tipoCampoHarmonicoEnum
    columnsToDisplay: string[]

    constructor() {}

    ngOnInit() {
        this.campoHarmonico = this.returnCampoHarmonico()
    }

    grausMaiorTriade = ['I', 'IIm', 'IIIm', 'IV', 'V', 'VIm', 'VIIm(b5)']
    grausMaiorTetrade = [
        'I7M',
        'IIm7',
        'IIIm7',
        'IV7M',
        'V7',
        'VIm7',
        'VII7m(b5)',
    ]
    grausMenorTriade = ['Im', 'IIm(b5)', 'III', 'IVm', 'Vm', 'VI', 'VII']
    grausMenorTetrade = [
        'Im7',
        'II7m(b5)',
        'III7M',
        'IVm7',
        'Vm7',
        'VI7M',
        'VII7',
    ]
    campoHarmonico: string[][]

    returnCampoHarmonico(): string[][] {
        if (this.tipoCampoHarmonico == tipoCampoHarmonicoEnum.MaiorTriade) {
            this.columnsToDisplay = this.grausMaiorTriade
            return this.campoHarmonicoMaiorTriade
        } else if (
            this.tipoCampoHarmonico == tipoCampoHarmonicoEnum.MaiorTetrade
        ) {
            this.columnsToDisplay = this.grausMaiorTetrade
            return this.campoHarmonicoMaiorTetrade
        } else if (
            this.tipoCampoHarmonico == tipoCampoHarmonicoEnum.MenorTriade
        ) {
            this.columnsToDisplay = this.grausMenorTriade
            return this.campoHarmonicoMenorTriade
        } else if (
            this.tipoCampoHarmonico == tipoCampoHarmonicoEnum.MenorTetrade
        ) {
            this.columnsToDisplay = this.grausMenorTetrade
            return this.campoHarmonicoMenorTetrade
        }

        return this.campoHarmonicoMaiorTriade
    }

    filtrarNotas(e: any): void {
        this.campoHarmonico = this.returnCampoHarmonico().filter((innerArray) =>
            innerArray.some((item) =>
                item.toUpperCase().includes(e.target.value.toUpperCase())
            )
        )
    }

    campoHarmonicoMaiorTriade: string[][] = [
        ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bm(b5)'],
        ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#m(b5)'],
        ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#m(b5)'],
        ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#m(b5)'],
        ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#m(b5)'],
        ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#m(b5)'],
        ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#m(b5)'],
        ['Db', 'Eb', 'Fm', 'Gb', 'Ab', 'Bbm', 'Cm(b5)'],
        ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gm(b5)'],
        ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Dm(b5)'],
        ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Am(b5)'],
        ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Em(b5)'],
        ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#m(b5)'],
        ['G#', 'A#m', 'C#m', 'C#', 'D#', 'E#m', 'G#m(b5)'],
        ['D#', 'E#m', 'Gm', 'G#', 'A#', 'C#m', 'D#m(b5)'],
        ['Fb', 'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Ebb'],
        ['Gb', 'Abm', 'Bbm', 'Cb', 'Db', 'Ebm', 'Fm(b5)'],
    ]

    campoHarmonicoMaiorTetrade: string[][] = [
        ['C7M', 'Dm7', 'Em7', 'F7M', 'G7', 'Am7', 'B7(b5)'],
        ['G7M', 'Am7', 'Bm7', 'C7M', 'D7', 'Em7', 'F#7(b5)'],
        ['D7M', 'Em7', 'F#m7', 'G7M', 'A7', 'Bm7', 'C#7(b5)'],
        ['A7M', 'Bm7', 'C#m7', 'D7', 'E7', 'F#m7', 'G#7(b5)'],
        ['E7M', 'F#m7', 'G#m7', 'A7', 'B7', 'C#m7', 'D#7(b5)'],
        ['B7M', 'C#m7', 'D#m7', 'E7', 'F#7', 'G#m7', 'A#7(b5)'],
        ['F#7M', 'G#m7', 'A#m7', 'B7', 'C#7', 'D#m7', 'E#7(b5)'],
        ['Db7M', 'Eb7', 'Fm7', 'Gb7M', 'Ab7', 'Bbm7', 'C7(b5)'],
        ['Ab7M', 'Bbm7', 'Cm7', 'Db7', 'Eb7', 'Fm7', 'G7(b5)'],
        ['Eb7M', 'Fm7', 'Gm7', 'Ab7', 'Bb7', 'Cm7', 'D7(b5)'],
        ['Bb7M', 'Cm7', 'Dm7', 'Eb7', 'F7', 'Gm7', 'A7(b5)'],
        ['F7M', 'Gm7', 'Am7', 'Bb7', 'C7', 'Dm7', 'Em7(b5)'],
        ['C#7M', 'D#m7', 'E#m7', 'F#7M', 'G#7', 'A#m7', 'B#7(b5)'],
        ['G#7M', 'A#m7', 'C#m7', 'C#7', 'D#7', 'E#m7', 'G#7(b5)'],
        ['D#7M', 'E#m7', 'Gm7', 'G#7', 'A#7', 'C#m7', 'D#7(b5)'],
        ['Fb7M', 'Gb7', 'Abm7', 'Bb7', 'Cb7', 'Db7', 'Ebb7(b5)'],
        ['Gb7M', 'Abm7', 'Bbm7', 'Cb7', 'Db7', 'Ebm7', 'Fm7(b5)'],
    ]

    campoHarmonicoMenorTriade: string[][] = [
        ['Cm', 'Dm(b5)', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'],
        ['Gm', 'Am(b5)', 'Bb', 'Cm', 'Dm', 'Eb', 'F'],
        ['Dm', 'Em(b5)', 'F', 'Gm', 'Am', 'Bb', 'C'],
        ['Am', 'Bm(b5)', 'C', 'Dm', 'Em', 'F', 'G'],
        ['Em', 'Fm(b5)', 'G', 'Am', 'Bm', 'C', 'D'],
        ['Bm', 'Cm(b5)', 'D', 'Em', 'F#m', 'G', 'A'],
        ['F#m', 'Gm(b5)', 'A', 'Bm', 'C#m', 'D', 'E'],
        ['Dbm', 'Ebm(b5)', 'E', 'F#m', 'Gbm', 'Ab', 'A'],
        ['Abm', 'Bbm(b5)', 'C', 'Dbm', 'Eb', 'F#m', 'G'],
        ['Eb', 'Fm(b5)', 'G', 'Abm', 'Bbm', 'Cm', 'Db'],
        ['Bbm', 'Cm', 'D(b5)', 'Eb', 'F', 'Gm', 'Am'],
        ['F', 'Gm', 'Am', 'Bb', 'Cm', 'Dm', 'Em(b5)'],
        ['C#m', 'D#m(b5)', 'E', 'F#m', 'G#m', 'A', 'B'],
        ['G#m', 'A#m(b5)', 'B', 'C#m', 'D', 'E', 'F#'],
        ['D#m', 'E#m(b5)', 'F', 'G#m', 'A#m', 'B', 'C#'],
        ['Fm', 'Gbm', 'Ab', 'Bb', 'Cm', 'Dbm', 'Eb'],
        ['Gb', 'Abm(b5)', 'Bb', 'Cm', 'Dbm', 'Eb', 'F#m'],
    ]

    campoHarmonicoMenorTetrade: string[][] = [
        ['Cm7', 'Dm7(b5)', 'Eb7M', 'Fm7', 'Gm7', 'Ab7M', 'Bb7'],
        ['Gm7', 'Am7(b5)', 'Bb7M', 'Cm7', 'Dm7', 'Eb7M', 'F7'],
        ['Dm7', 'Em7(b5)', 'F7M', 'Gm7', 'Am7', 'Bb7M', 'C7'],
        ['Am7', 'Bm7(b5)', 'C7M', 'Dm7', 'Em7', 'F7M', 'G7'],
        ['Em7', 'Fm7(b5)', 'G7M', 'Am7', 'Bm7', 'C7M', 'D7'],
        ['Bm7', 'Cm7(b5)', 'D7', 'Em7', 'F#m7', 'G7M', 'A7'],
        ['F#m7', 'Gm7(b5)', 'A7', 'Bm7', 'C#m7', 'D7', 'E7'],
        ['Dbm7', 'Ebm7(b5)', 'E7M', 'F#m7', 'Gbm7', 'Ab7M', 'A7'],
        ['Abm7', 'Bbm7(b5)', 'C7', 'Dbm7', 'Eb7M', 'F#m7', 'G7'],
        ['Eb7M', 'Fm7(b5)', 'G7', 'Abm7', 'Bbm7', 'Cm7', 'Db7'],
        ['Bbm7', 'Cm7', 'D7(b5)', 'Eb7M', 'F7', 'Gm7', 'Am7'],
        ['F7', 'Gm7', 'Am7', 'Bb7M', 'Cm7', 'Dm7', 'Em7(b5)'],
        ['C#m7', 'D#m7(b5)', 'E7M', 'F#m7', 'G#m7', 'A7', 'B7'],
        ['G#m7', 'A#m7(b5)', 'B7', 'C#m7', 'D7', 'E7', 'F#7'],
        ['D#m7', 'E#m7(b5)', 'F7', 'G#m7', 'A#m7', 'B7', 'C#7'],
        ['Fm7', 'Gbm7', 'Ab7M', 'Bb7', 'Cm7', 'Dbm7', 'Eb7M'],
        ['Gb7', 'Abm7(b5)', 'Bb7M', 'Cm7', 'Dbm7', 'Eb7M', 'F#m7'],
    ]
}
