export interface IProduct<Category, Department> {
  name: string;

  description: string;

  category?: Category;

  department?: Department;
}
