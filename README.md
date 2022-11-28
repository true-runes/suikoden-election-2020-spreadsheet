# Suikoden Election 2020 Spreadsheet

- Google Apps Script for Suikoden election 2020

# この年の特徴
- RDBMS は用いずに、TweetStorage を Rundeck 経由で操作して、スプレッドシート上でデータを完結させた
  - TweetStorage で cron で Rundeck で特定ハッシュタグのツイートを取得する
  - 取得したデータを特定のスプレッドシートにログとして書き連ねていく
  - そのログをスプレッドシート内でやりとりして集計用や発表用などに加工する
  - サイトの投票チェックはスプレッドシートを API化 して対応した

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

- `$ yarn build` すると `dist/` 配下にデプロイされるファイルがコピーされる
  - 単にコピーしているだけ
  - トランスパイルをしなくても `$ clasp push` したら自動でトランスパイルをしてくれる
- `package.json` の `scripts` は自分用に修正していった方がいい
  - デフォルトの `scripts` は現状に即していない
- `sample/` 配下に `gas-clasp-starter` にデフォルトで含まれているサンプルコードを移動してある

# 開発時実行コマンド

```sh
$ jest
$ yarn deploy
```

# 参考

- [howdy39/gas-clasp-starter: A starter template for Google Apps Script by clasp](https://github.com/howdy39/gas-clasp-starter)
- [Google Apps Script をローカル環境で快適に開発するためのテンプレートを作りました - Qiita](https://qiita.com/howdy39/items/0e799a9bfc1d3bccf6e5)
- [5 分で作る clasp を使った Google Apps Script の開発環境 - Qiita](https://qiita.com/suin/items/b264092eab3ce553f16a)

# 開発手順（古い内容のため、参考にしないこと）

- ~~`webpack.config.js` のエンドポイントに合わせて、コードを書く~~
  - ~~これを書いている時点では `src/index.ts` にごりごり書く~~
    - ~~ビルドしてできるファイルは `bundle.js` の一つになる~~
- ~~`$ yarn build` で `dist/` 配下にビルド成果が生成される~~
  - ~~`$ clasp push` で push されるのはこの `dist/` 配下のファイルになる~~
  - ~~現在の `$ yarn build` を実行すると、ビルド前に `dist/` は削除される~~
  - ~~現在の `webpack.config.js` では `src/*.ts` がトランスパイル対象になる~~
- ~~`package.json` の `scripts` と `webpack.config.js` は自分用に修正していった方がいい~~
  - ~~デフォルトの `scripts` は自分にあっていないためリネームしてある~~
- ~~`sample/` 配下には `gas-clasp-starter` に含まれているサンプルコードを配置してある~~

# GAS Template

- A GAS template is powered by [howdy39/gas-clasp-starter: A starter template for Google Apps Script by clasp](https://github.com/howdy39/gas-clasp-starter)
