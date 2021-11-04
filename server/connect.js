import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

//db connection
const DB = process.env.DB
export const Conn = () => {
  return mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
}

//server port
export const PORT = process.env.PORT || 5000