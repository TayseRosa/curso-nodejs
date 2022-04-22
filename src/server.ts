import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req:Request, res:Response)=>{


  res.send('Olá mundo!');
})

server.get('/noticia/:slug', (req:Request, res:Response)=>{
  let slug = req.params.slug;//Rota dinâmica
  res.send(`Notícia: ${slug}`);
});

server.get('/voo/:origem-:destino', (req:Request, res:Response)=>{
  /* let { origem, destino } = req.params;//Rota dinâmica */
  let origem = req.params.origem;//Rota dinâmica
  let destino = req.params.destino;//Rota dinâmica
  res.send(`Procurando vôo de : ${origem.toUpperCase()} até ${destino.toLocaleUpperCase()}`);
});

server.listen(3000);