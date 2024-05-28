import 'dotenv/config'
import { connect } from "mongoose";

async function dbConnect(): Promise<void>{
  const BD_URI = <string>process.env.DB_URI
  await connect(BD_URI)
}

export default dbConnect