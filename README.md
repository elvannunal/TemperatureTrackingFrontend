<img width="1463" height="800" alt="Ekran Resmi 2026-01-27 19 40 47" src="https://github.com/user-attachments/assets/007f5d0e-06bd-4029-bf8d-9289826dc977" /># 📊 Temperature Tracking Dashboard (Angular 19)

Bu proje, bir backend servisinden **SignalR** aracılığıyla gelen gerçek zamanlı sıcaklık verilerini görselleştiren, modern ve reaktif bir kullanıcı arayüzüdür.

## 🌟 Öne Çıkan Özellikler

* **Angular 19 & Signals:** Uygulama içi durum yönetimi ve UI güncellemeleri için Angular'ın en güncel reaktif programlama tekniği olan **Signals** mimarisi kullanılmıştır.
* **Gerçek Zamanlı Veri Akışı:** SignalR client entegrasyonu sayesinde sayfa yenilenmesine gerek kalmadan veriler saniyelik (real-time) olarak güncellenir.
* **Dinamik Renk Kodlaması:** Sıcaklık değerine göre UI bileşenleri otomatik olarak renk değiştirerek kullanıcıya görsel geri bildirim sağlar:
    * 🟢 **Yeşil:** Güvenli seviye (0°C - 60°C).
    * 🟠 **Turuncu:** Uyarı seviyesi (60°C - 80°C).
    * 🔴 **Kırmızı:** Kritik seviye (80°C ve üzeri).
* **Akıllı Alarm Bildirimi:** Sıcaklık **80°C** eşiğini geçtiğinde reaktif bir uyarı kartı ve animasyonlu alarm gösterimi devreye girer.

## 🛠️ Kullanılan Teknolojiler

* **Framework:** Angular 19 (Standalone Components)
* **State Management:** Angular Signals & Computed Properties
* **Communication:** Microsoft SignalR Client
* **Styling:** SCSS (BEM Methodology & Flexbox)
* **Optimization:** NgZone (Asenkron veri senkronizasyonu)

## 📸 Ekran Görüntüsü

Aşağıda, sistemin canlı veri akışı sırasında çekilmiş bir görüntüsü yer almaktadır:

<img width="1470" height="798" alt="Ekran Resmi 2026-01-27 19 40 59" src="https://github.com/user-attachments/assets/eacf6e89-9bcd-424d-93ff-4388ee75cdfa" />
<img width="1463" height="800" alt="Ekran Resmi 2026-01-27 19 40 47" src="https://github.com/user-attachments/assets/e6969400-2533-4763-b8c4-eca93c9e7782" />



## 🚀 Kurulum ve Çalıştırma

1.  **Depoyu Klonlayın:**
    ```bash
    git clone [https://github.com/elvannunal/TemperatureTrackingFrontend.git](https://github.com/elvannunal/TemperatureTrackingFrontend.git)
    ```
2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```
3.  **Uygulamayı Başlatın:**
    ```bash
    npm start
    ```
4.  **Tarayıcıda Görüntüleyin:**
    `http://localhost:4200` adresine gidin. (Backend servisinin çalıştığından emin olun.)
