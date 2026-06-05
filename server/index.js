import dotenv from 'dotenv'
dotenv.config();
import app from "./app.js";

const port =process.env.PORT || 5002;

app.get("/",(req,res)=>{
  res.send("welcome!! try in URL /api/tasks then get the task here if you want")
})

app.listen(port, () => {
  console.log(
    `Server running on port ${port}`
  );
}); 