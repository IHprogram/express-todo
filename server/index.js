import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import mongoURI from './default.js'

import todoRoutes from './routes/todos.js'

const app = express();
const port = 3001;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/todos', todoRoutes);

// 「ホームページ(/)」に対してGETリクエストが行われると「Hello World!」を返却する。
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/api', (req, res) => {
  res.json({ todo: "Hello API!" });
})

// mongoose.connect()でMongoDBへ接続できる。また、Promiseを返すのでthenとcatchを使用する
mongoose.connect(mongoURI, { useNewParser: true, useUnifiedTopology: true })
  // app.listen(ポート番号, 実行したい処理)で、ポートを指定し、処理を行う
  .then(() => app.listen(port, () => {
    console.log(`${port}につなぎました`);
  }))
  .catch((err) => console.log(`エラー発生です: ${err.message}`));
