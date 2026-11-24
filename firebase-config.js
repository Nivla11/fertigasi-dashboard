// Konfigurasi Firebase untuk WEB (Project settings -> General -> Your apps -> Web app).
// Nilai ini memang publik (terlihat di browser siapa pun), jadi AMAN di-commit.
// Keamanan data dijaga oleh Firebase Auth + database.rules.json, bukan oleh kerahasiaan key ini.
// JANGAN isi password, kredensial ESP32, atau secret.h di sini.
const firebaseConfig = {
  apiKey: "AIzaSyBk5H1J8RoRxqDofK32lYRdMxC_bvuFTag",
  databaseURL: "https://fertigasi-cabai-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fertigasi-cabai"
};
