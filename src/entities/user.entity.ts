import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 20, unique: true })
  cpf: string;

  @Column({ length: 20 })
  phone: string;

  @Column()
  birthday: Date;

  @Column({ length: 280 })
  description: string;

  @Column({ length: 10 })
  cep: string;

  @Column({ length: 20 })
  state: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 140 })
  street: string;

  @Column({ length: 5 })
  number: string;

  @Column({ length: 50, nullable: true })
  complement: string;

  @Column({ default: false })
  isStaff: boolean;

  @Column({ length: 80 })
  password: string;

  @Column({ default: false })
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export { User };
