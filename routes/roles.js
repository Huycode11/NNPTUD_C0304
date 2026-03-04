var express = require('express');
var router = express.Router();

/* DATA ROLE */

let dataRole = [
  {
    id: "r1",
    name: "Quản trị viên",
    description: "Toàn quyền quản lý hệ thống"
  },
  {
    id: "r2",
    name: "Biên tập viên",
    description: "Quản lý nội dung và dữ liệu"
  },
  {
    id: "r3",
    name: "Người dùng",
    description: "Tài khoản người dùng thông thường"
  }
];

/* DATA USER */

let dataUser = [
  {
    username: "nguyenvana",
    role: { id: "r1", name: "Quản trị viên" }
  },
  {
    username: "tranthib",
    role: { id: "r2", name: "Biên tập viên" }
  },
  {
    username: "levanc",
    role: { id: "r3", name: "Người dùng" }
  },
  {
    username: "ngocanh",
    role: { id: "r1", name: "Quản trị viên" }
  }
];


/* GET roles */

router.get('/', function(req, res) {
  res.json(dataRole);
});


/* GET role by id */

router.get('/:id', function(req, res) {

  const role = dataRole.find(r => r.id === req.params.id);

  res.json(role);

});


/* CREATE role */

router.post('/', function(req, res) {

  const newRole = req.body;

  dataRole.push(newRole);

  res.json(newRole);

});


/* UPDATE role */

router.put('/:id', function(req, res) {

  const index = dataRole.findIndex(r => r.id === req.params.id);

  dataRole[index] = req.body;

  res.json(dataRole[index]);

});


/* DELETE role */

router.delete('/:id', function(req, res) {

  dataRole = dataRole.filter(r => r.id !== req.params.id);

  res.json({message:"deleted"});

});


/* ===== API BÀI YÊU CẦU ===== */

router.get('/:id/users', function(req,res){

  const users = dataUser.filter(u => u.role.id === req.params.id);

  res.json(users);

});


module.exports = router;