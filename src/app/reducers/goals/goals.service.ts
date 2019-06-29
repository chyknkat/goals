import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable(({providedIn: 'root'}) as any)
export class GoalsService {

    private url = 'environment.api';
    constructor(private http: HttpClient) { }
}