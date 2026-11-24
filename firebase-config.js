// Konfigurasi Firebase untuk WEB (Project settings -> General -> Your apps -> Web app).
// Nilai ini memang publik (terlihat di browser siapa pun), jadi AMAN di-commit.
// Keamanan data dijaga oleh Firebase Auth + database.rules.json, bukan oleh kerahasiaan key ini.
// JANGAN isi password, kredensial ESP32, atau secret.h di sini.
const firebaseConfig = {
  apiKey: "API_KEY",
  databaseURL: "https://PROJECT-ID-default-rtdb.firebaseio.com",
  projectId: "PROJECT-ID"
};
