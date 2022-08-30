#google-sheet-example-nodejs


## 1) create a service account on google cloud
[link](https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest)

and download the key in `./key.json`

## 2) grant spreadsheet permission to the Service account
![image](https://user-images.githubusercontent.com/5538753/187439642-2747bc2c-3993-4e23-9a16-2e3408c7f5e1.png)

## 3) Run

`spreadsheetId="yourSheetId"`

```
$ node readTable.js
```
![image](https://user-images.githubusercontent.com/5538753/187440307-3373b59d-8e28-4702-80e6-b034ae4c1a20.png)
