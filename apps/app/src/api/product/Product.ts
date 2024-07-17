export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  price: number | null;
  isActive: boolean | null;
  stock: number | null;
  createdBy: string | null;
  name: string | null;
  category: string | null;
};
