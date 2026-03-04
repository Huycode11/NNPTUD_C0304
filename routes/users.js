var express = require('express');
var router = express.Router();

let dataUser = [
{
username:"nguyenvana",
password:"123456",
email:"vana@gmail.com",
fullName:"Nguyễn Văn A",
status:true,
loginCount:15,
role:{id:"r1",name:"Quản trị viên"},
creationAt:"2026-03-04T08:10:00.000Z",
updatedAt:"2026-03-04T08:10:00.000Z"
},
{
username:"tranthib",
password:"123456",
email:"thib@gmail.com",
fullName:"Trần Thị B",
status:true,
loginCount:7,
role:{id:"r2",name:"Biên tập viên"},
creationAt:"2026-03-04T08:11:00.000Z",
updatedAt:"2026-03-04T08:11:00.000Z"
},
{
username:"levanc",
password:"123456",
email:"vanc@gmail.com",
fullName:"Lê Văn C",
status:true,
loginCount:3,
role:{id:"r3",name:"Người dùng"},
creationAt:"2026-03-04T08:12:00.000Z",
updatedAt:"2026-03-04T08:12:00.000Z"
}
];


/* GET users */

router.get('/', function(req, res) {

res.json(dataUser)

});


/* GET user by username */

router.get('/:username', function(req, res) {

const user = dataUser.find(u=>u.username===req.params.username)

if(!user){
return res.status(404).json({message:"User not found"})
}

res.json(user)

});


/* CREATE user */

router.post('/', function(req, res) {

const newUser = {
...req.body,
creationAt:new Date(),
updatedAt:new Date()
}

dataUser.push(newUser)

res.json(newUser)

});


/* UPDATE user */

router.put('/:username', function(req, res) {

const index=dataUser.findIndex(u=>u.username===req.params.username)

if(index===-1){
return res.status(404).json({message:"User not found"})
}

dataUser[index]={
...req.body,
creationAt:dataUser[index].creationAt,
updatedAt:new Date()
}

res.json(dataUser[index])

});


/* DELETE user */

router.delete('/:username', function(req, res) {

dataUser=dataUser.filter(u=>u.username!==req.params.username)

res.json({message:"deleted"})

});


/* GET USERS BY ROLE */

router.get('/role/:id', function(req,res){

const users=dataUser.filter(u=>u.role.id===req.params.id)

res.json(users)

})


module.exports = router;