const express=require("express")
const app=express();

const users=[{
    name:"John",
    kidney:[{
        healthy:false
    }]
}]

app.use(express.json())

app.get("/", function(req, res)  {
    try {
      const NoOfK = users[0].kidney.length;
      let NoOfHK = 0;
      let NoOfUK = 0;
      for (let i = 0; i < NoOfK; i++) {
        if (users[0].kidney[i].healthy === true) {
          NoOfHK++;
        } else {
          NoOfUK++;
        }
      }
      res.json({
        "Number of Kidneys": NoOfK,
        "Number of Healthy Kidneys": NoOfHK,
        "Number of Unhealthy Kidneys": NoOfUK
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Error occurred" });
    }
  });

app.post("/",function(req,res){
    const isH=req.body.isH;
    users[0].kidney.push({
        healthy:isH
    })
    res.json({
        msg:"done"
    })
})

app.put("/", function(req, res) {
  users[0].kidney.forEach(kidney => {
      kidney.healthy = true;
  });
     //for(let i=0;i<users[0].kidney.length;i++){
    //         users[0].kidney[i].healthy=true;
    //     }

  res.json({
      msg: "done"
  })
})

app.delete("/",function(req,res){
  if(AtleastOne()){
    const newK=[];
    for(let i=0;i<users[0].kidney.length;i++){
      newK.push({
        healthy:true
      })
    } 
    users[0].kidney=newK;
  res.json ({msg: "done"})
  }
  else{
    res.status(411).send({
      msg:"You have no bad kidneys"
    });
  }
})

function AtleastOne(){
  let AtleastOne=false;
  for(let i=0;i<users[0].kidney.length;i++){
    if(!users[0].kidney[i].healthy){
        AtleastOne=true;
    }
  }
  return AtleastOne;
}

app.listen(3000, () => { 
    console.log("server is running on port 3000")
})







