import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileEntity{
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  name : string

  @Column()
 filename : string

 @Column()
 path : string

 @Column()
 mimetype: string;

}