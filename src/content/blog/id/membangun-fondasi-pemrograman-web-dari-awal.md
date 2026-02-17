---
title: "Membangun Fondasi Pemrograman Web dari Awal"
date: 2026-02-16
summary: "Mengenal pondasi dasar teknologi web seperti HTML, CSS, dan JAVASCRIPT"
lang: "id"
category: "web-development"
tags: ["web", "belajar"]
banner: ""
---

Pasti sudah tidak asing lagi dengan halaman antarmuka seperti Google, Medium, Wikipedia, dan lain sebagainya.
Mungkin kalian pernah kepikiran, bagaimana hal tersebut bisa dibuat? Apakah kita juga bisa membuat sesuatu yang serupa? Mari kita ulik.
Kita perlu tahu bahwa yang berjalan di browser bisa dikategorikan menjadi dua hal besar, yaitu website dan web app.

### Website

Website merupakan halaman atau sekumpulan halaman digital. Tujuannya sederhana, yaitu menyampaikan informasi kepada pengunjung.

Di era sekarang, website menjadi poster digital, layanan informasi, dan profil suatu perusahaan, institusi, organisasi, maupun pribadi. Di samping itu, website juga sering menjadi media belajar, seperti orang-orang yang membagikan tulisannya (disebut blog).

### WebApp

Web app adalah aplikasi yang diakses melalui browser untuk menyelesaikan tugas tertentu. Aplikasi ini sangat interaktif dan kontennya sering kali berubah secara dinamis berdasarkan input pengguna.

Contohnya seperti Google Docs, Google Sheets, atau media sosial seperti Facebook.

### Teknologi yang digunakan

Browser secara bawaan menampilkan HTML, CSS, dan menjalankan JavaScript sebagai bahasa utama di sisi client.
Lalu, apa itu file-file tersebut dan apa fungsinya?

> Di bawah ini ada contoh kodenya. Jika kalian pertama kali melihat kode, tidak perlu langsung berusaha memahaminya. Cukup lihat dulu saja.

- #### HTML
  HyperText Markup Language adalah format dokumen yang digunakan browser untuk menampilkan halaman web.
  File .html mendukung pemanggilan file CSS dan JavaScript. HTML juga dapat menampilkan gambar, video, dan audio.
  Contoh kode HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ini Judul</title>
  </head>
  <body>
    <h1>Hello word</h1>
    <p>my name is fidi</p>
  </body>
</html>
```

- #### CSS
  Cascading Style Sheets adalah aturan tata letak yang digunakan HTML untuk mengatur tampilan elemen-elemen di dalamnya agar terlihat menarik.
  Selain mengatur tata letak, CSS juga digunakan untuk membuat animasi agar website tidak terlihat kaku.
  Contoh kode CSS:

```css
body {
  padding: 7rem;
  background-color: #3bbff8;
}
```

- #### JAVASCRIPT
  JavaScript adalah bahasa scripting yang digunakan browser untuk memberikan interaksi pada halaman web.
  Contohnya seperti tombol yang bisa diklik. JavaScript juga sering digunakan di belakang layar untuk menghasilkan elemen HTML secara dinamis atau menambahkan perilaku tertentu pada halaman.
  Contoh kode JavaScript:

```js
alert("hello word");
console.log("hi im fidi");
```

### Kesimpulan

Untuk membangun website atau web app, yang harus kita pahami adalah teknologi yang membangunnya.
Untuk membuat website sederhana, HTML, CSS, dan JavaScript sudah cukup. Namun untuk membangun web app, biasanya diperlukan tambahan yang berjalan di server melalui perantara yang disebut API. API ini biasanya dipanggil menggunakan JavaScript. Jadi di browser tetap menggunakan HTML, CSS, dan JavaScript.

Web app modern umumnya membutuhkan server atau backend untuk menyimpan dan mengelola data, yang diakses melalui API.

Agar lebih mudah dibayangkan, kita bisa mengibaratkan teknologi tersebut sebagai:

- HTML : Kerangka
- CSS : Gaya Penampilan
- JavaScript : Perilaku
- API : Pelayan
- Server : Dapur

Terima kasih sudah membaca. Semoga tulisan ini memberikan pemahaman dan gambaran baru tentang web development.
