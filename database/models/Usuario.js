
module.exports = function (sequelize, DataTypes){
    const alias = 'Usuario';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_usuario: {
            type: dataTypes.STRING,

        },
        email: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        fecha_nacimiento:{
            type: dataTypes.DATE,

        },
    };
    
    const config = {
        timestamps: false
    };
    const Usuario = sequelize.define(alias, cols, config);    

    Usuario.associate = function(models){
        Usuario.hasMany(models.Resenas, {
            as: "resenas",
            foreignKey: "usuario_id"
        });
    }

    return Usuario;

}