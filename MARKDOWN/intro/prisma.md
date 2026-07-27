---
title: Prisma 関連のトラブル
---

# Prisma 関連のトラブル

---
**目次**

- [(1) schema.prisma を VS Code で開くと、`datasource` 部分で警告が出る](#1)
---

## (1) schema.prisma を VS Code で開くと、`datasource` 部分で警告が出る <a id="1"></a>

### 問題詳細

Prisma のバージョンが 5.xx または 6.xx を使用している場合、`datasource` の `url` 部分で

```
The `url` property of the `datasource` is no longer supported in schema files. Move connection URLs for Migrate to `prisma.config.ts` and pass either `adapter` for a direct database connection or `accelerateUrl` for Accelerate to the `PrismaClient` constructor. See https://pris.ly/d/config-datasource and https://pris.ly/d/prisma7-client-config
```

というメッセージが出ることがあります。

これは、Prisma v7 以降は `datasource` の `url` プロパティのサポートが終了したことを示しています。<br>
Prisma の VS Code 拡張機能が、デフォルトで Prisma v7 の仕様を前提に検証を行うため、v5、v6 を使用している場合でも警告が表示されます。

Prisma v5、v6 を使用している場合は、この警告が出ていても動作に問題はありません。

### → 解決方法

警告表示が気になる場合は、以下の手順で VS Code の `Prisma: Pin To Prisma6` を有効にしてください。

1. 左下の歯車のアイコン<span class="material-symbols-outlined">settings</span>から設定メニューを開きます。
1. 検索フィールドで `prisma.pinToPrisma6` と入力するか、[こちらのリンク](vscode://settings/prisma.pinToPrisma6) をクリックして Prisma の設定を開いてください。
1. 「Prisma: Pin To Prisma6」にチェックを入れます。
1. `schema.prisma` に戻り、まだ警告が残っていたら、VS Code を再起動してください。
