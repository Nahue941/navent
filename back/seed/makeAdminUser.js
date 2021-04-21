const {User} = require("../models");
const userId = Number(process.argv[2]);


if (!userId){
  console.log(`Se debe pasar como parametro el id del usuario al que se le quiere cambiar el rol.`);
  return; 
}

User.findByPk(userId)
  .then(res => {
    if(!res) {
      throw new Error (`Ese ID de usuario no existe en la Base de Datos`);
    }
    return res.dataValues
  })
  .then(user => {
    User.update({admin: !user.admin}, {where: {id:user.id}})
    .then(()=> {
      console.log(`Se cambio el usuario:
    email: ${user.email}
    ----------------------------------
    su nuevo rol es: ${!user.admin?`ADMIN`:`USUARIO`}
    ----------------------------------`)
    process.exit()
    })

  })
  //.then(() => process.exit())
  .catch(err => console.log(err));