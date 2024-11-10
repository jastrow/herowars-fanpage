import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface IFormData {
  email: string | null;
  content: string | null;
}
export interface IFormStatus {
  status: boolean;
  errorMsg?: string;
}

@Injectable({
  providedIn: 'root'
})
export class KontaktService {
  private http = inject(HttpClient);

  send(formData: IFormData) {
    return this.http.post<IFormStatus>('/api/login.php?kontakt=1', formData);
  }

}
