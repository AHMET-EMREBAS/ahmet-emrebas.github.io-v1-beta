export interface Location {
  id?: number;
  uuid?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  location: string;

  x: string;

  y: string;

  z: string;
}
