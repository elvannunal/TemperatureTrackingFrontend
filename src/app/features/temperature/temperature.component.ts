import { Component, computed, inject } from '@angular/core';
import { SignalrService } from '../../core/services/signalr.service';
import { TemperatureService } from '../../core/services/temperature.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temperature',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss'
})

export class TemperatureComponent {

  // Dependency Injection
  private signalRService = inject(SignalrService);
  private temperatureService = inject(TemperatureService);

  public currentData = this.signalRService.currentData;

  public readonly threshold = 80;

  /**
   *Sıcaklık değiştiğinde alarm durumunu otomatik hesapla
   */

  public isAlarmActive = computed(() => {
    const data = this.currentData();
    return data ? this.temperatureService.checkAlarmStatus(data.temperature) : false;
  });

  /**
   * UI'daki renk değişimlerini yönetir
   */
  getTemperatureStatusColor(): string {
    const temp = this.currentData()?.temperature ?? 0;
    if (temp > this.threshold) return '#d32f2f'; // Kritik için kırmızı
    if (temp > 60) return '#f57c00'; // Uyarı için turuncusu
    return '#388e3c'; // Güvenli için yeşil
  }
}
