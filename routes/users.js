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
role:{id:"r1",name:"Quản trị viên"}
},
{
username:"tranthib",
password:"123456",
email:"thib@gmail.com",
fullName:"Trần Thị B",
status:true,
loginCount:7,
role:{id:"r2",name:"Biên tập viên"}
},
{
username:"levanc",
password:"123456",
email:"vanc@gmail.com",
fullName:"Lê Văn C",
status:true,
loginCount:3,
role:{id:"r3",name:"Người dùng"}
}
];


/* GET users */

router.get('/', function(req, res) {

res.json(dataUser)

});

/* GET user by username */

router.get('/:username', function(req, res) {

const user = dataUser.find(u=>u.username===req.params.username)

res.json(user)

});


/* CREATE user */

router.post('/', function(req, res) {

const newUser=req.body

dataUser.push(newUser)

res.json(newUser)

});


/* UPDATE user */

router.put('/:username', function(req, res) {

const index=dataUser.findIndex(u=>u.username===req.params.username)

dataUser[index]=req.body

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