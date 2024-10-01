export type UserDataContext = {
  isAdmin: boolean;
  isDoctor?: boolean;
  doctorEmail?: string;
} | null;
