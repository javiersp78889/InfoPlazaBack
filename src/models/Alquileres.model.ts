import { Column, DataType, Model, Table } from "sequelize-typescript";


type TAlquileres ={
    libro: string
    nombre: string

}

@Table({
    tableName:'Alquileres'
})

class Alquileres extends Model<TAlquileres>{
    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    libro!:string

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    nombre!: string
    
}

export default Alquileres;