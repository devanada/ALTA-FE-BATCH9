1. Buat satu folder contohnya `testing-js`
2. Jalankan

```
npm init -y
```

3. Install jest dengan command

```
npm i jest --save-dev
```

4. Buat folder (folder: `problem1`, `problem2`) dan file di masing-masing folder (problem1: `problem1.js`, `problem1.test.js`; problem2: `problem2.js`, `problem2.test.js`)
5. Buat file `.gitignore` dan tulis `node_modules` didalam file `.gitignore`
6. Rubah value didalam `package.json` di `script -> test` dari

```
echo \"Error: no test specified\" && exit 1
```

menjadi

```
jest
```

7. Buat function dan juga test file di masing-masing file dan juga folder
8. Jalankan perintah untuk melakukan testing (lakukan di root folder)

```
npm run test
```

nb: Untuk mendapatkan laporan coverage bisa merubah value didalam `package.json` di `script -> test` dari

```
jest
```

menjadi

```
jest --collect-coverage
```

command tersebut akan menghasilkan 1 folder bernama coverage yang mana berisi tentang laporan hasil testing
