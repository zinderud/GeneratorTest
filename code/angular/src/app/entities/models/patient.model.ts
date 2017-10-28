export interface PatientModel {
  Id : string;
  Name : string;
  Address  ? : string;
  Age  ? : number;
  History  ? : string;
  DoctorId  ? : number;
  ProgramUserId  ? : number;
}
