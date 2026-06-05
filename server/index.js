import dotenv from 'dotenv'
dotenv.config();
import app from "./app.js";

const port =process.env.PORT || 5002;

app.get("/",(req,res)=>{
  return res.send("Welcome!!")
  })

app.listen(port, () => {
  console.log(
    `Server running on port ${port}`
  );
}); 