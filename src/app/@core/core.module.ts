import { NgModule } from '@angular/core';
import {ApiModule} from './api/api.module';
import {environment} from '../../environments/environment';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        ApiModule.forRoot(
            {
                baseUrl: environment.apiUrl,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        ),
    ],
    providers: [
    ]
})
export class CoreModule { }
