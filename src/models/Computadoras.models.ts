import { Model, Table, Column, DataType } from "sequelize-typescript";

type Tcomputadoras = {
    numero: Number
    nombre: string

}


@Table({
    tableName: 'Computadoras'
})

class Computadoras extends Model<Tcomputadoras> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    numero!: Number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    nombre!: string;
}

export default Computadoras