import { BeforeInsert, BeforeUpdate, Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";

@Entity('category', {schema:'ventas'} )
export class CategoryEntity{
@PrimaryGeneratedColumn('uuid')
id:string;
  
//Crear
@CreateDateColumn({
   name:'created_date',
   type:'timestamptz',
   default:() => 'CURRENT_TIMESTAMP',
 })
 createdAt: Date;
 
 //Actualizar
@UpdateDateColumn({
 name:'updated_date',
 type:'timestamptz',
 default:() => 'CURRENT_TIMESTAMP',
})
updatedAt: Date;
  //Borrar
@DeleteDateColumn({
 name:'deleted_date',
 type:'timestamptz',
 default:() => 'CURRENT_TIMESTAMP',
})
deletedAt: Date;
  
  //Relaciones
@OneToMany(() => ProductEntity, (product) => product.category)
  children: ProductEntity[];
  
    //Columna de Titulo
@Column('varchar', {
    name:'title',
    unique:true,
    comment:'Titulo del producto',
  })
  title: string;
  //Columna de Descripción
  @Column('varchar', {
    name:'description',
    nullable:true,
    comment:'Descripción del producto',
  })
  description: string;
}

  //DECORADORES//

@BeforeInsert
@BeforeUpdate

categories: number;

async setTitle(){
  if (!this.title){
    return ('El producto no existe');
  }
  this.title = this.title.toUpperCase();
}

/*asyn setEmail(){
  if(!this.email){
    return ('El correo no existe');
  }

  this.email = this.email.setEmail.toLowerCase().trim;*/
}