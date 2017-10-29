export class ProgramUserListConfig {
    type = 'all';
  
    filters: {
              Id? :string,
              tc? :string,
              Name? :string,
              last_name? :string,
              gander? :string,
              birth_at? :string,
              bio? :string,
              AddressID? :number,
              DoctorId? :number,
            }
       = {};
  }
  