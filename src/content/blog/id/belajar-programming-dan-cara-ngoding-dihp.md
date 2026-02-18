---
title: "Belajar Programming dan Ngoding di Smartphone / HP"
date: 2026-02-17
summary: "Belajar programming lewat smartphone, tools apa aja yang dipake untuk ngoding dismartphone"
lang: "id"
category: "programming"
tags: ["belajar", "tips"]
banner: "ngoding-dihp.jpeg"
---

Pernah kepikiran, kira-kira smartphone Android yang kita gunakan bisa buat ngoding enggak?

Jawabannya tentu bisa. Pada dasarnya smartphone juga komputer portable. Kalian bisa menggunakannya untuk belajar programming dan ngoding. Namun memang ada keterbatasan, terutama dari sisi dukungan perangkat lunak dan perangkat keras.

Kalau ingin belajar web development dasar yang menghasilkan file statis, ngoding di HP sangat bisa. Tapi kalau ingin bikin yang dinamis dan kompleks, biasanya lebih repot di konfigurasi. Bukan mustahil, hanya saja butuh usaha lebih.

## Apa Itu Ngoding?
Sederhananya, ngoding itu proses menulis kode untuk membuat program. Program ini berisi perintah untuk si komputer.
Misalnya seperti ini:
```py
print("Hello world")
```
Kata **print** memerintahkan komputer untuk menampilkan isi yang ada di dalam kurung. Teks yang dibungkus tanda kutip dua itu disebut **string**, dan yang ditampilkan adalah **Hello world**.

Intinya, kita memberi instruksi, komputer menjalankan.

## Apa Saja yang Didukung di Smartphone Android?

1.  ### Web Development Dasar
    Ini sudah pasti bisa banget. Kalian bisa ngoding:
    - HTML.
    - CSS.
    - JavaScript.
    
    Untuk belajar dasar, HP sudah lebih dari cukup.
2.  ### Runtime JavaScript (Node.js)
    Ingin belajar istilah backend dan frontend di smartphone? Sangat bisa, dengan keterbatasannya tentu saja. Tapi untuk proyek belajar, ini sudah cukup nyaman.
3.  ### Framework Modern
    Pada dasarnya framework modern itu berjalan di atas runtime. Jadi selama runtime bisa jalan, kemungkinan besar framework juga bisa ikut jalan.
    Beberapa framework yang sudah saya coba di smartphone:
    - Astro JS (penggunaan dasar)
    - SvelteKit (penggunaan dasar)
    
    Untuk React atau Vue juga bisa, silakan eksplor sendiri.

## Tools untuk Ngoding di Smartphone Android
Alat yang bisa digunakan untuk ngoding di Android:
1.  Acode
2.  Termux

Kalian bisa install kedua aplikasi tersebut lewat F-Droid atau GitHub resmi mereka.

### Kombinasi Acode + Termux
Kalian bisa menggunakan dua kombinasi aplikasi tersebut:
* Acode sebagai code editor
* Termux untuk eksekusi file

Kalau mau pakai salah satu saja juga bisa.
Di Termux kalian bisa menggunakan vim sebagai code editor.

Di versi terbaru, Acode sudah membawa lingkungan Linux Alpine, jadi bisa eksekusi file langsung tanpa perlu Termux.

Kalau kalian ingin menggunakan kombinasi **Termux + Acode** atau **Termux** saja, saya sarankan install **proot-distro** untuk dukungan paket yang lebih luas.

## Apa Saja yang Bisa Dilakukan?
Seperti disebutkan sebelumnya, bisa untuk web development. Kita juga bisa ngoding bahasa lain seperti:
* Python
* Bash
* JavaScript versi Node.js
* dan lain sebagainya

Tinggal atur konfigurasinya saja.

## Penggunaan Dasar Acode
Setelah install, buka Acode. Kita konfigurasi dasar supaya lebih enak ngodingnya.
1.  Klik menu di pojok kiri atas
2.  Klik logo puzzle di bawah ikon kaca pembesar
3.  Install beberapa plugin yang membantu, misalnya:
  * Emmet
  * Auto Rename Tag

### Cara Membuat File di Acode
1.  Klik titik tiga di kanan atas 
2.  Pilih opsi pertama
3.  Masukkan nama file, misalnya **index.html**
4.  Tekan OK

Setelah file dibuat, kalian bisa mulai menulis kode HTML di situ.
Kalau ingin generate template HTML dasar, bisa ketik **!** lalu tekan **CTRL + h**.
Kalau tidak berhasil, bisa tulis struktur HTML dasar secara manual.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>your site</title>
</head>
<body>
  <h1>hello world</h1>
</body>
</html>
```
Setelah selesai, jalankan dengan klik tombol play di kiri atas.

### Menggunakan Terminal di Acode (Node.js)
Untuk mencoba terminal di Acode:
1.  Klik titik tiga kanan atas
2.  Pilih Terminal

Sebelumnya kita perlu install Node.js dulu. Karena Acode memakai Alpine Linux, maka yang digunakan package managernya **apk**.
Install Node.js:
```bash
apk add nodejs
```
setelah proeses selesai cek apakah sudah terinstall
```bash
node -v
```
jika muncul versi nya maka berhasil, misalnya seperti ini
```bash
v22.15.1
```

### Membuat dan Menjalankan File JavaScript di nodejs lewat terminal
Buat file baru:
```bash
vi test.js
```
Sebelum mengetik, tekan huruf **i** karena kita pakai **vi** (mode insert).
Lalu ketik:
```bash
console.log("Hello world")
```
* Simpan file:  Tekan **ESC**
* Ketik **:wq** lalu Enter
Jalankan file:
```bash
node test.js
```
Kalau muncul output, berarti berhasil jalan.

## Bagaimana Kalau di Termux?
Pada dasarnya Termux itu seperti Linux (tidak 100% mirip). Kalau kalian sudah pernah pakai Linux, kalian akan cepat ngerti Termux.
Bisa buat folder, buat file, install package, dan menjalankan program langsung dari terminal.

## Kesimpulan
Jadi, HP yang kita gunakan itu sebenarnya bisa dipakai untuk ngoding. Bahkan kalau kalian eksplor lebih jauh, bisa jadi alat yang cukup powerful.

Memang ada keterbatasan, tapi untuk belajar itu sudah lebih dari cukup. Kalian bisa bikin program sederhana sampai yang lebih kompleks, bahkan membuat sesuatu yang bisa menyelesaikan masalah kalian sendiri.

Smartphone bukan cuma buat scroll media sosial. Bisa juga jadi alat produktif, tergantung kita mau pakai untuk apa.