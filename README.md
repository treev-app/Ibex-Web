# Ibex Web

Ibexの公式ランディングページと操作ガイドを管理する公開リポジトリです。

## 構成

- `/` — 製品紹介、ダウンロード案内、プライバシー方針
- `/guide/` — インストールから議事録保存までの操作ガイド

ビルド処理や外部JavaScript、アクセス解析は使用していません。HTML・CSS・JavaScriptのみの静的サイトです。

## ローカル確認

```sh
python3 -m http.server 4178
```

ブラウザで `http://127.0.0.1:4178/` を開きます。

## 公開

`main` ブランチへの更新はGitHub ActionsでGitHub Pagesへ反映されます。公開前にGitHubのリポジトリ設定から、PagesのSourceを「GitHub Actions」に設定してください。

## セキュリティ

- APIキー、FTP情報、署名情報などの秘密情報をコミットしないでください。
- `.env` ファイルは `.gitignore` の対象です。
- 問題の報告方法は [SECURITY.md](SECURITY.md) を確認してください。
