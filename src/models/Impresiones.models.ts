import { Table, Column, DataType, Model, AllowNull } from 'sequelize-typescript'


@Table({
    tableName: 'Impresiones'
})

class Impresiones extends Model {
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    nombre!: string;
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    tipo!: string;

    @Column ({
        type: DataType.INTEGER,
        allowNull:false
    })
    cantidad!:Number
}

export default Impresiones;