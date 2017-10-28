export class DoctorListConfig {
    type = 'all';
  
    filters: {
              Id? :string,
              Name? :string,
              Address? :string,
              Available? :boolean,
            }
       = {};
  }
  