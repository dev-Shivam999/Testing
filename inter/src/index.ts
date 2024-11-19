import express, { json, Request, Response } from 'express'
import { client } from './db';
export const app = express();

app.use(express.json())

app.post('/sum', async(req: Request, res: Response) => {
  const a=req.body.a
  const b=req.body.b
    const answer =a+b;
    
 const data = await client.request.create({
    data:{
        a,b,
        answer,
        type:'ADD'
    }
  })
  res.json({answer:data.answer,id:data.id})
});

