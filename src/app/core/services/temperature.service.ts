import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TemperatureData } from '../../models/temperature.model';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  private http = inject(HttpClient);
  
  private readonly apiUrl = 'http://localhost:5057/api/Alarms';

  /**
   * Geçmiş alarm loglarını veritabanından çeker.
   */

  getAlarmLogs(): Observable<TemperatureData[]> {
    return this.http.get<TemperatureData[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Alarm logları çekilirken hata oluştu:', error);
        return throwError(() => new Error('Veri çekme hatası.'));
      })
    );
  }

  /**
   * 
   */
  checkAlarmStatus(value: number): boolean {
    const threshold = 80;
    return value > threshold;
  }
}