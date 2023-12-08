import { AppDataSource } from "../data-source";
import { Address, Appointment, Clinic, Specialty, User } from "../entities";
import {
  AddressRepo,
  AppointmentRepo,
  ClinicRepo,
  SpecialtyRepo,
  UserRepo,
} from "../interfaces";

export const userRepo: UserRepo = AppDataSource.getRepository(User);
export const clinicRepo: ClinicRepo = AppDataSource.getRepository(Clinic);
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address);
export const appointmentRepo: AppointmentRepo =
  AppDataSource.getRepository(Appointment);
export const spcialtyRepo: SpecialtyRepo =
  AppDataSource.getRepository(Specialty);
