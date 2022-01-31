# react-vite-sample

プロト作成をすぐに始められるように React ベースで多くの SPA に共通しそうな内容をセットアップしたサンプルプロジェクトです。

プロト作成とドッグフーディングを繰り返し、勝算が見えてきたら UX/UI やバックエンドを見直して本格的な開発に移ることを想定しているので、
UX/UI やバックエンドとのワークフローに関係しそうな内容（デザインシステム、UI コンポーネント、クライアントコードの自動生成など）は
サンプルプロジェクトに含めていません。

## 含めたもの

- ビルドツール、JS フレームワーク、プログラミング言語
  - [Vite](https://vitejs.dev/)
  - [React](https://ja.reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - 参考にしたもの
    - [Vite で最速 React&TypeScript](https://zenn.dev/sprout2000/articles/98145cf2a807b1)
- 静的解析ツール、コードフォーマッター
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - 参考にしたもの
    - [Vite+React の環境構築](https://zenn.dev/kk6/scraps/36fa4579df6acb)
- ルーティング
  - [React Router](https://reactrouter.com/)
  - [Tutorial](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
- コンポーネントライブラリ
  - [Mantine](https://mantine.dev/)

## これから含めるもの

- バリデーション
  - [v8n](https://imbrn.github.io/v8n/)
- エラー処理
  - [Error Boundary](https://ja.reactjs.org/docs/error-boundaries.html)
  - [Error Boundary を Function Component で扱う](https://kudolog.net/posts/func-error-boundary/)
  - [React Suspense での非同期処理のエラー処理パターン](https://zenn.dev/berlysia/articles/5dfa58f282aa14)
- 状態管理
  - [React を取り巻く状態管理の潮流を学ぼう。Hooks や Server Components などの登場で何が変わるか](https://eh-career.com/engineerhub/entry/2022/01/13/090000)
  - [「3 種類」で管理する React の State 戦略](https://zenn.dev/yoshiko/articles/607ec0c9b0408d)
- モックライブラリ
  - [フロントエンドのテストのモックには msw を使うのが最近の流行りらしい](https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests)
- モーダル
  - [Modals manager](https://mantine.dev/others/modals/)
- ドラッグ＆ドロップ
  - [React DnD](https://react-dnd.github.io/react-dnd/about)

## 含めないもの

- デザインシステム
- クライアントコードの自動生成
