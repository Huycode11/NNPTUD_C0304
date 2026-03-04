var express = require('express');
var router = express.Router();

/* DATA ROLE */

let dataRole = [
  {
    id: "r1",
    name: "Quản trị viên",
    description: "Toàn quyền quản lý hệ thống",
    creationAt: "2026-03-04T08:00:00.000Z",
    updatedAt: "2026-03-04T08:00:00.000Z"
  },
  {
    id: "r2",
    name: "Biên tập viên",
    description: "Quản lý nội dung và dữ liệu",
    creationAt: "2026-03-04T08:00:00.000Z",
    updatedAt: "2026-03-04T08:00:00.000Z"
  },
  {
    id: "r3",
    name: "Người dùng",
    description: "Tài khoản người dùng thông thường",
    creationAt: "2026-03-04T08:00:00.000Z",
    updatedAt: "2026-03-04T08:00:00.000Z"
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

  const newRole = {
    ...req.body,
    creationAt: new Date(),
    updatedAt: new Date()
  };

  dataRole.push(newRole);

  res.json(newRole);

});


/* UPDATE role */

router.put('/:id', function(req, res) {

  const index = dataRole.findIndex(r => r.id === req.params.id);

  if(index === -1){
    return res.status(404).json({message:"Role not found"});
  }

  dataRole[index] = {
    ...req.body,
    creationAt: dataRole[index].creationAt,
    updatedAt: new Date()
  };

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