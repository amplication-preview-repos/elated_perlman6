export type UserPrivateInfo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  birthDate: Date | null;
  country: string | null;
  city: string | null;
  cc: string | null;
  userId: string | null;
};
