
module.exports = function (sequelize, DataTypes){
    const alias = sequelize.define(
        'Resena',{

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

    //const Resena = sequelize.define(alias, cols, config);    

  //  Resena.associate = function(models){
   //     Resena.belongsTo(models.Pelicula, {
     //       as: "usuarios",
            //through que? donde lo creo?
            // through: "usuario_pelicula",
            //fin de pregunta
       //     foreignKey: "resena_id",
         //   otherKey: "usuario_id"
       // });
   // }

 //return Resena;

}
