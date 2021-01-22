export interface User {
  userId: number;
  userName: string;
  userMail: string;
  userAddress: {
    adress: string;
    city: string;
    postCode: number;
  };
}
