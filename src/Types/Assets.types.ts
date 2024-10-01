export interface Assets {
  appointment_img: string;
  header_img: string;
  group_profiles: string;
  logo: string;
  chats_icon: string;
  verified_icon: string;
  info_icon: string;
  profile_pic: string;
  arrow_icon: string;
  contact_image: string;
  about_image: string;
  menu_icon: string;
  cross_icon: string;
  dropdown_icon: string;
  upload_icon: string;
  stripe_logo: string;
  razorpay_logo: string;
}

// Interface for doctor address
export interface Address {
  line1: string;
  line2: string;
}

// Interface for individual doctor
export interface Doctor {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: Address;
}

// Type for the collection of doctors
export type DoctorCollections = Doctor[];

// Interface for speciality data
export interface Speciality {
  speciality: string;
  image: string;
}

// Interface for additional asset icons
export interface AdditionalAssets {
  add_icon: string;
  admin_logo: string;
  appointment_icon: string;
  cancel_icon: string;
  doctor_icon: string;
  upload_area: string;
  home_icon: string;
  patients_icon: string;
  people_icon: string;
  list_icon: string;
  tick_icon: string;
  appointments_icon: string;
  earning_icon: string;
}
