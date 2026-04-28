export interface CreateUserInput {
  name: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  role: string;
  createdAt: Date;
}