import { AllowNull, Column, DataType, Model, Table } from "sequelize-typescript";

type TLibros = {
    nombre: string
    autor: string
    estante: string
    cantidad: Number

}

@Table({
    tableName: 'Libros'
})

class Libros extends Model {
    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    nombre!: string

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    autor!: string

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    estante!: string
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    numero!: Number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cantidad!: Number
}

export default Libros;