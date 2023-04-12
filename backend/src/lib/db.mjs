import { Sequelize, DataTypes }  from 'sequelize';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './CitasAutores.sqlite'
});

const Cita = db.define('Cita', {
    texto: {
        type: DataTypes.STRING
    },
    verificada: {
        type: DataTypes.BOOLEAN
    }
});

const Autor = db.define('Autor', {
    nome: {
        type: DataTypes.STRING
    },
    nacemento: {
        type: DataTypes.DATEONLY
    },
    falecemento: {
        type: DataTypes.DATEONLY
    },
    ficcion: {
        type: DataTypes.BOOLEAN
    },
    xenero: {
        type: DataTypes.STRING
    }
});

Cita.belongsTo(Autor)
Autor.hasMany(Cita)

await db.sync({ alter: true })

export {
    db,
    Autor,
    Cita
}