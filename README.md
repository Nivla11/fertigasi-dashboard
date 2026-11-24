# Fertigasi Cabai berbasis WSN

Kontroller ESP32 + 5 node sensor (nRF24L01) + fuzzy Mamdani, dengan dashboard web (Firebase Realtime Database).
Mode **AUTO** (siklus tiap 1 jam) dan **SIM** (input simulasi dari dashboard) dipilih lewat dashboard.

## Struktur

```
index.html                 dashboard (di-host GitHub Pages)
firebase-config.js         config Firebase WEB (publik, aman di-commit)
database.rules.json        aturan keamanan Realtime Database
firmware/fertigasi_esp32_controller/
  fertigasi_esp32_controller.ino
  secret.h.example         template kredensial -> salin jadi secret.h (tidak di-commit)
```

## Setup firmware
1. Salin `secret.h.example` menjadi `secret.h` di folder yang sama, isi WiFi + akun Firebase ESP32.
2. Library: ArduinoJson v7, LiquidCrystal_I2C. Board: ESP32 Dev Module.

## Setup Firebase
1. Authentication -> Sign-in method -> aktifkan **Email/Password**. Buat 2 user: akun dashboard dan akun ESP32.
2. Salin UID kedua user (tab Users) ke `database.rules.json`, ganti `UID_AKUN_DASHBOARD` dan `UID_AKUN_ESP32`, lalu tempel di Realtime Database -> Rules -> Publish.
3. Isi `firebase-config.js` dengan config web app Anda.
4. Authentication -> Settings -> Authorized domains -> tambahkan `USERNAME.github.io`.

## Online lewat GitHub Pages
Repo -> Settings -> Pages -> Source: *Deploy from a branch* -> `main` / `(root)`.
Dashboard tersedia di `https://USERNAME.github.io/NAMA-REPO/`.

## Keamanan
- Jangan commit `secret.h` (sudah di `.gitignore`).
- Jika kredensial pernah ter-commit, ganti password akun ESP32 dan WiFi, karena riwayat git tetap menyimpannya.
- Di Google Cloud Console -> APIs & Services -> Credentials, batasi Web API Key ke referrer `https://USERNAME.github.io/*`.
