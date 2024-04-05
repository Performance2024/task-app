import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable, catchError, map } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Student } from '../model/student';
import { HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
};
const baseUrl = 'http://localhost:3000';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(url: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${baseUrl + url}`, httpOptions);
  }

  getATask(url: string): Observable<Task> {
    return this.http.get<Task>(`${baseUrl + url}`, httpOptions);
  }

  createStudent(url: string, data: object) {
    return this.http.post(`${baseUrl + url}`, data,{observe:"response"});
  }
}
