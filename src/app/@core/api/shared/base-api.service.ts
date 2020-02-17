import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from '../api.config';
import {IApiModuleConfig} from './interfaces/api.config.interface';
import {IJsonRpcResponse} from './interfaces/jsonrpc-response.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class BaseApiService {

    constructor(@Inject(API_CONFIG) private config: IApiModuleConfig,
                private http: HttpClient) {
    }

    get<T>(path = ''): Observable<T> {
        return this.http.get<IJsonRpcResponse<any>>('/assets/api/' + path)
            .pipe(
                map((resp: IJsonRpcResponse<any>) => {
                    if (!!resp.error) {
                        throw Error(`${resp.error.code}: ${resp.error.message}`);
                    }
                    return resp.result;
                })
            );
    }
}
