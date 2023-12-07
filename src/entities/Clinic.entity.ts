import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Address from "./Address.entity";
import Specialty from "./Specialty.entity";
import Appointment from "./Appointments.entity";

@Entity("clinics")
export default class Clinic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "boolean", default: true })
  public: boolean;

  @Column({ length: 120, unique: true })
  name: string;

  @Column({ type: "integer", default: 0 })
  beds: number;

  @CreateDateColumn({ type: "date" })
  partnerSince: string;

  @UpdateDateColumn({ type: "date" })
  infosUpdateAt: string;

  @OneToOne(() => Address, (address) => address.clinic)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Specialty, (specialty) => specialty.clinics)
  specialty: Specialty;

  @OneToMany(() => Appointment, (appointment) => appointment.clinic)
  appointments: Appointment[];
}
