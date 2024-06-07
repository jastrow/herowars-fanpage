import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENVIRONMENT } from '../tokens';


export interface ITextPage {
  name: string;
  html: string;
}

@Injectable({
  providedIn: 'root'
})
export class TextPageService {
  private http = inject(HttpClient);
  private env = inject(ENVIRONMENT);

  constructor() { }

  getPage(pageName: string) {
    return this.http.get<ITextPage>(this.env.apiUrl+'/textpage.php?page='+encodeURI(pageName));
  }

  setPage(data: ITextPage) {
    return this.http.post<ITextPage>(this.env.apiUrl+'/textpage.php?save='+encodeURI(data.name), data);
  }

}
