const express = require('express');
const app = express();
const {PrismaClient} = require("@prisma/client");
const prisma =  new PrismaClient();

app.use(express.json());

// todo: For get data from table
app.get('/get_user', async (req, res)=> {
   const allUsers=await prisma.user.findMany();
   res.json(allUsers);
});

// todo: For get single data from table
app.get('/get_user/:id', async (req, res)=> {
   const id=req.params.id
   const allUsers=await prisma.user.findUnique(
      {
         where:
         {id:parseInt(id)}
      }
   );
   res.json(allUsers);
});

// todo: For post data for table
app.post('/addUser', async  (req, res)=> {
    const postUser= await prisma.user.create({data: req.body});
    res.json(postUser);
 });

 // todo: For update data from table
app.patch('/update_user/:id', async  (req, res)=> {
   const id=req.params.id;
   const newName=req.body.name;
   const newAge=req.body.age;

   const updateUser= await prisma.user.update({
      where:{id:parseInt(id)},
      data:{name:newName,age:newAge}
   });
   res.json(updateUser);
});

// todo: For delete data from table
app.delete('/delete_user/:id', async  (req, res)=> {
   const id=req.params.id;

   const deleteUser= await prisma.user.delete({
      where:{id:parseInt(id)},
   });
   res.json(deleteUser);
});

// todo: For get all bikes from table
app.get('/get_bikes', async (req, res)=> {
   const allBikes=await prisma.bikes.findMany();
   res.json(allBikes);
});

// todo: For add bikes from table
app.post('/add_bike', async (req, res)=> {
   const addBikes=await prisma.bikes.create({
      data:req.body,
      include:{
         owner:true
      }
   });
   res.json(addBikes);
});

// todo: For get all house from table
app.get('/get_house', async (req, res)=> {
   const allHouse=await prisma.house.findMany();
   res.json(allHouse);
});

// todo: For add house from table
app.post('/add_house', async (req, res)=> {
   const addHouse=await prisma.house.create({
      data:req.body
   });
   res.json(addHouse);
});

app.listen(3000,()=>console.log("Server running on port 3000"))