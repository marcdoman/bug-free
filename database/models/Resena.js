
module.exports = function (sequelize, DataTypes){
    const resena = sequelize.define(
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
        tableName: "resenas",
        timestamps: false
        //nota para el que corrige: deberia decir true pero no nos dejaba cambiar la basededatos asique nos tiraba error
    }
    );

    

    resena.associate = function(models){
        resena.belongsTo(models.Usuarios, {
           as: "usuarios",
           foreignKey: "usuario_id"
        });
    }

   return resena;

}
