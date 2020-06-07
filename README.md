# suikoden-election-2020-spreadsheet
Spreadsheet (Suikoden election 2020)

# GAS Template
A GAS template is powered by [howdy39/gas-clasp-starter: A starter template for Google Apps Script by clasp](https://github.com/howdy39/gas-clasp-starter)

# 手順
- あらかじめ `$ clasp login` を行って `~/.clasprc.json` を作っておく必要がある
- `.clasp.sample.json` をもとにして `.clasp.json` を作成する
  - `"scriptId"` の値には、スクリプトページの URL の以下の部分の値を設定する
    - 「スプレッドシートの URL」ではない
    - `https://script.google.com/d/ここの部分/edit`
    - 当該スプレッドシートには `~/.clasprc.json` の権限でアクセスできる必要がある
    - つまりスプレッドシートごとにリポジトリを作る必要がある
      - 開発用と本番用の場合はこの限りではない

# 参考
- [howdy39/gas-clasp-starter: A starter template for Google Apps Script by clasp](https://github.com/howdy39/gas-clasp-starter)
- [Google Apps Script をローカル環境で快適に開発するためのテンプレートを作りました - Qiita](https://qiita.com/howdy39/items/0e799a9bfc1d3bccf6e5)
- [5分で作るclaspを使ったGoogle Apps Scriptの開発環境 - Qiita](https://qiita.com/suin/items/b264092eab3ce553f16a)
