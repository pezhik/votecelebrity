const express=require('express'),
      cors=require('cors'),
      bodyParser=require('body-parser'),
      morgan=require('morgan')

const app=express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())


app.listen(process.env.PORT||8081)
