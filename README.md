# suikoden-election-2020-spreadsheet

Spreadsheet (Suikoden election 2020)

# GAS Template

A GAS template is powered by [howdy39/gas-clasp-starter: A starter template for Google Apps Script by clasp](https://github.com/howdy39/gas-clasp-starter)

# 環境構築手順

- あらかじめ `$ clasp login` を行って `~/.clasprc.json` を作っておく必要がある
- `.clasp.sample.json` をもとにして `.clasp.json` を作成する
  - `"scriptId"` の値には、スクリプトページの URL の以下の部分の値を設定する
    - 「スプレッドシートの URL」ではない
    - `https://script.google.com/d/ここの部分/edit`
    - 当該スプレッドシートには `~/.clasprc.json` の権限でアクセスできる必要がある
    - つまりスプレッドシートごとにリポジトリを作る必要がある
      - 開発用と本番用の場合はこの限りではない

# 開発手順

- `webpack.config.js` のエンドポイントに合わせて、コードを書く
  - これを書いている時点では `src/index.ts` にごりごり書く
    - ビルドしてできるファイルは `bundle.js` の一つになる
- `$ yarn build` で `dist/` 配下にビルド成果が生成される
  - `$ clasp push` で push されるのはこの `dist/` 配下のファイルになる
  - 現在の `$ yarn build` を実行すると、ビルド前に `dist/` は削除される
  - 現在の `webpack.config.js` では `src/*.ts` がトランスパイル対象になる
- `package.json` の `scripts` と `webpack.config.js` は自分用に修正していった方がいい
  - デフォルトの `scripts` は自分にあっていないためリネームしてある
- `sample/` 配下には `gas-clasp-starter` に含まれているサンプルコードを配置してある

# 参考

- [howdy39/gas-clasp-starter: A starter template for Google Apps Script by clasp](https://github.com/howdy39/gas-clasp-starter)
- [Google Apps Script をローカル環境で快適に開発するためのテンプレートを作りました - Qiita](https://qiita.com/howdy39/items/0e799a9bfc1d3bccf6e5)
- [5 分で作る clasp を使った Google Apps Script の開発環境 - Qiita](https://qiita.com/suin/items/b264092eab3ce553f16a)
