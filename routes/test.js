import  express  from "express";
const router = express.Router();

// router.get("/testroute",(req,res)=>{
//   res.json("hello");
// })

router.post("/testroute",(req,res)=>{
    console.log(req.body);
    res.json("hello");

  })



export default router;