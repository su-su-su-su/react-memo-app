## Reactメモアプリ

シンプルなメモアプリで、ユーザーがメモを追加、編集、削除できる機能を提供します。メモはローカルストレージに保存されるため、ブラウザを閉じてもデータは保持されます。

1. 作業PCの任意の作業ディレクトリにて git clone してください。

   ```
   git clone -b react-memo-app https://github.com/su-su-su-su/react-memo-app.git
   ```

2. npm installを実行してpackage.jsonの必要なパッケージをインストール

   ```
   npm install
   ```

3. アプリケーションを起動
   ```
   npm start
   ```

http://localhost:3000で起動します。

### 使い方

**新規作成**
`+`ボタンで新規メモを作成、編集画面に入力し`保存`ボタンで保存します。

**編集**
作成したメモをクリックすると、編集画面が開きます。`保存`ボタンで上書きします。

**削除**
作成したメモをクリックすると、編集画面が開きます。`削除`ボタンで削除します。
