export class PatientListConfig {
    type = 'all';
  
    filters: {
              Id? :string,
              Name? :string,
              Address? :string,
              Age? :number,
              History? :string,
              DoctorId? :number,
              ProgramUserId? :number,
            }
       = {};
  }
  