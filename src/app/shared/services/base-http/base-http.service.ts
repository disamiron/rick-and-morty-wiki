import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpResponse, QueryParams } from './base-http.type';
import { MatSnackBar } from '@angular/material/snack-bar';

const DEFAULT_HEADERS = {
  accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
};

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  private readonly _model = '/api';

  private readonly _baseHref = 'https://rickandmortyapi.com' + this._model;

  constructor(private _http: HttpClient, private _snackBar: MatSnackBar) {}

  public getData<R>(
    url: string,
    params?: QueryParams
  ): Observable<HttpResponse<R>['data']> {
    const headers = new HttpHeaders(DEFAULT_HEADERS);

    return this._http
      .get<HttpResponse<R>>(this._baseHref + url, {
        headers: headers,
        params: params,
      })
      .pipe(
        catchError<any, any>((e) => {
          return this._handleError(e);
        })
      );
  }

  private _handleError(e: HttpErrorResponse): Observable<Error> {
    this._snackBar.open(`Ooops, ${e.error.error}`, 'Close', {
      duration: 3000,
    });
    return throwError(() => e);
  }
}
