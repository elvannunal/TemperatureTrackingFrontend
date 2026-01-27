import { Injectable, NgZone, inject, signal } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { TemperatureData } from '../../models/temperature.model';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private zone = inject(NgZone);

  private hubConnection!: signalR.HubConnection;

  public currentData = signal<TemperatureData | null>(null);

  constructor() {
    this.startConnection();
  }

  private startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5057/temperatureHub')
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR Bağlantısı Kuruldu 🚀'))
      .catch(err => console.error('Bağlantı Hatası: ', err));

    this.hubConnection.on('ReceiveTemperature', (tempValue: number) => {
      this.zone.run(() => { 
        const data: TemperatureData = {
          temperature: tempValue,
          createdAt: new Date(),
          message: tempValue > 80 ? "Sistem aşırı ısındı!" : "Sistem stabil.",
          isAlarm: tempValue > 80
        };
        this.currentData.set(data);
      });
    });
  }
}
