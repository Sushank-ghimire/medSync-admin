interface Address {
  line1?: string;
  line2?: string;
}

export interface DoctorAddDataTypes {
  name: string;
  email: string;
  password: string;
  image: string | unknown;
  speciality: string;
  degree: string;
  experience: string | number;
  about: string;
  fees: number;
  address: Address;
}
