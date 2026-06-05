import dotenv from 'dotenv'
dotenv.config();
import app from "./app.js";

const port =process.env.PORT || 5002;

app.get("/",(req,res)=>{
  res.status(200).json({message:"welcome!"})
  })

app.listen(port, () => {
  console.log(
    `Server running on port ${port}`
  );
}); 