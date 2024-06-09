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
    const url = this.env.apiUrl+'/textpage.php?page='+encodeURIComponent(pageName);
    return this.http.get<ITextPage>(url);
  }

  setPage(data: ITextPage) {
    const url = this.env.apiUrl+'/textpage.php?save='+encodeURIComponent(data.name);
    return this.http.post<ITextPage>(url, data);
  }

}
