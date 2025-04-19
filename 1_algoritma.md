# Algoritma Mendeteksi Palindrom

### Algoritma Deskriptif

1. mulai
1. masukkan sebuah kata
1. periksa apakah itu sebuah kata
1. jika benar maka lanjut ke langkah 6
1. jika tidak maka kembali ke langkah 2
1. hitung panjang kata sebagai **"len"**
1. tentukan variabel hasil sebagai 'benar' untuk pertama kali
1. buatlah variabel i dengan nilai 0 untuk inisialisasi perulangan
1. periksa setiap huruf dalam kata tersebut dari awal sampai akhir, apakah huruf dengan urutan ***i*** sama dengan huruf dengan index ***len - 1 - i***
1. jika ada yang tidak sama maka ubah hasil menjadi 'salah'
1. tambah i dengan 1 setiap selesai 1 perulangan
1. ulangi sampai i sama dengan len
1. buatlah variabel output
1. jika hasil benar tampilkan 'kata ini palindrom'
1. jika tidak maka tampilkan 'kata ini bukan palindrom'
1. selesai

### Algoritma Flowchart

```mermaid

graph TD
a((start))
in[/kata/]
val{typeof kata == 'string'}
var[len = kata.length]
res[hasil = true]
loop[i = 0]
conloop@{shape: diamond, label: i < len - 1}
con@{shape: diamond, label: 'kata[i] !== kata[len - i]'}
tr[hasil = false]
inc[init = init + 1]
resout[output]
rescon{hasil == true}
out1[/'palindrom'/]
out2[/'bukan palindrom'/]
x(((stop)))

a --> in
in --> val
val --true--> var
val --false--> in
var --> res
res --> loop
loop --> conloop
conloop --true--> con
con --true--> tr
tr --> inc
inc --> loop
con --false--> inc
conloop --false--> resout
resout --> rescon
rescon --true--> out1
rescon --false--> out2
out1 & out2 --> x


```

---

# Algoritma membalikkan kalimat

### Algoritma Deskriptif

1. mulai
1. masukkan sebuah kalimat
1. periksa apakah input berupa kalimat
1. jika benar maka lanjut ke langkah 6
1. jika tidak maka kembali ke langkah 2
1. siapkan variabel 'kata' untuk mengumpulkan karakter menjadi kata
1. siapkan variabel 'terbalik' untuk mengumpulkan kata yang sudah terkumpul
1. hitung panjang kalimat sebagai ***'len'***
1. lakukan perulangan sebanyak ***'len'*** untuk memeriksa setiap karakter dalam kalimat dari awal sampai akhir
1. jika bukan karakter spasi maka masukkan karakter tersebut ke variabel 'kata' yang ditambahkan setelah isi variabel 'kata' sebelumnya
1. jika karakter spasi maka isi variabel 'terbalik' dengan spasi ditambah variabel 'kata' ditambah variabel 'terbalik' yang sudah terisi sebelumnya
1. tampilkan variabel 'terbalik'
1. selesai

### Flowchart

```mermaid

graph TD

a((start))
in[/kalimat/]
val{typeof kalimat == 'string'}
b[kata = '']
c[terbalik = '']
d[len = kalimat.length]
e[loop kalimat sebanyak len]
e --> con
con{kalimat i !== ' '}
f[kata = kata + kalimat i]
g[kata = '']
h[terbalik = ' ' + kata + terbalik]
out[/kata + terbalik/]
x(((stop)))

a --> in
in --> val
val --true-->b
val --false-->in
b --> c
c --> d
con --true--> f
con --false--> g
g --> h
f & h --> out
out --> x

```