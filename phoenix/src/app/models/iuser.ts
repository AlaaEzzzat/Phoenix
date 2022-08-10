export interface IUser {
  fullName: string;
  id?: any;
  email: string;
  mobileNo: [];
  address: {
    city: string;
    country: string;
  };
  password: string;
}
