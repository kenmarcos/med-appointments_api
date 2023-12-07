import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Clinic, User } from "../entities";

@Entity("appointments")
export default class Appointment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  time: string;

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;

  @ManyToOne(() => Clinic, (clinic) => clinic.appointments)
  clinic: Clinic;
}
