export interface JwtResponse {
  user: {
    id: number;
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    address: string;
    cp: string;
    town: string;
    access_token: string;
    expires_in: number;
  };
}
