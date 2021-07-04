export interface Credentials {
    email: string;
    password: string;
  }
  
  export type Status = 'initial' | 'pending' | 'success' | 'error';
  
  export type Mode = 'signin' | 'signup';

  export interface Role {
    name: string;
  }
  export interface UserSignup {
    email: string;
    username: string;
    password: string;
    role: Role;
  }