import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENVIRONMENT } from '@lib/util/tokens';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  private http = inject(HttpClient);
  private env = inject(ENVIRONMENT);

  getLinks() {
    return this.http.get<string[]>('/api/getGiftLinks.php');
  }

}
