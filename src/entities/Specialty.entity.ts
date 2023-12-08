import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Clinic from "./Clinic.entity";

@Entity("specialties")
export default class Specialty {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120, unique: true })
  name: string;

  @OneToMany(() => Clinic, (clinic) => clinic.specialty)
  clinics: Clinic[];
}
