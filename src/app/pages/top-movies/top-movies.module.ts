import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TopMoviesPageRoutingModule} from './top-movies-routing.module';

import {TopMoviesPage} from './top-movies.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TopMoviesPageRoutingModule,
        SharedModule
    ],
    declarations: [TopMoviesPage]
})
export class TopMoviesPageModule {
}
