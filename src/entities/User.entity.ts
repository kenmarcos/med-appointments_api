import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Appointment } from "../entities";
import bcryptjs, { getRounds } from "bcryptjs";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("identity")
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120, unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  isAdmin: boolean;

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    // verificar se a senha já está criptografada
    const hasRounds = getRounds(this.password);

    // se não estiver criptografada, criptografar a senha
    if (!hasRounds) {
      this.password = bcryptjs.hashSync(this.password, 10);
    }
  }
}
