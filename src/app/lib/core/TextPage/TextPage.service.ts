import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENVIRONMENT } from '../../util/tokens';
import { TranslateService } from '@ngx-translate/core';


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
  public translate = inject(TranslateService);

  constructor() { }

  getPage(pageName: string) {
    const url = this.env.apiUrl+
      '/textpage.php?page='+encodeURIComponent(pageName)+
      '&'+'lang='+this.translate.currentLang;
    return this.http.get<ITextPage>(url);
  }

  setPage(data: ITextPage) {
    const url = this.env.apiUrl+'/textpage.php?save='+encodeURIComponent(data.name);
    return this.http.post<ITextPage>(url, data);
  }

}
