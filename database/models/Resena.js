
module.exports = function (sequelize, DataTypes){
    const Resena = sequelize.define(
        'Resenas',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pelicula_id: {
            type: DataTypes.INTEGER,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
        },
        texto_resena: {
            type: DataTypes.STRING,
        },
        puntaje: {
            type: DataTypes.DECIMAL,
        },
        fecha_creacion:{
            type: DataTypes.DATE,
        },
        fecha_actualizacion:{
            type: DataTypes.DATE,
        }       
    },
     {
        timestamps: false
    }
    );

    

  //  Resena.associate = function(models){
 //       Resena.belongsTo(models.Pelicula, {
   //        as: "usuarios",
   //         foreignKey: "resena_id",
   //         otherKey: "usuario_id"
   //     });
  //  }

 //return Resena;

}
