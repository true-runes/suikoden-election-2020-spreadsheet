# suikoden-election-2020-spreadsheet
Spreadsheet (Suikoden election 2020)

# GAS Template
A GAS template is powered by [howdy39/gas-clasp-starter: A starter template for Google Apps Script by clasp](https://github.com/howdy39/gas-clasp-starter)

# 手順
- あらかじめ `$ clasp login` を行って `~/.clasprc.json` を作っておく必要がある
- `.clasp.sample.json` をもとにして `.clasp.json` を作成する
  - `"scriptId"` の値には、スプレッドシートの URL の以下の部分の値を設定する
    - `https://docs.google.com/spreadsheets/d/ここの値/edit#gid=0`
    - 当該スプレッドシートには `~/.clasprc.json` の権限でアクセスできる必要がある
    - つまりスプレッドシートごとにリポジトリを作る必要がある
      - 開発用と本番用の場合はこの限りではない
