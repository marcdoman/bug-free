
module.exports = function (sequelize, DataTypes){
    const Usuario = sequelize.define(
        'Usuarios', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_usuario: {
            type: DataTypes.STRING,
        },

        email: {
            type: DataTypes.STRING,
        },

        password: {
            type: DataTypes.STRING,
        },

        fecha_nacimiento:{
            type: DataTypes.DATE,
        },
    },

    {
        timestamps: false
    }
    );


      

 //   Usuario.associate = function(models){
 //       Usuario.hasMany(models.Resenas, {
   //         as: "resenas",
  //          foreignKey: "usuario_id"
  //      });
  //  }

 //   return Usuario;

}