import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Clinic from "./Clinic.entity";

@Entity("addresses")
export default class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  street: string;

  @Column({ type: "integer" })
  number: number;

  @Column({ length: 8 })
  zip: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @OneToOne(() => Clinic, (clinic) => clinic.address)
  clinic: Clinic;
}
