import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private http: HttpClient) {}

  /**
   * Read the file on path of the param, and return its content
   * @param localPath: string
   * @return Observable of not definition object
   */
  public getLocalFile(localPath: string): Observable<any> {
    return this.http.get(localPath);
  }
}
