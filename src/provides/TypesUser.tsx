export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  name: string;
  email: string;
  id?:number;
  avatar?:string;
}

export interface IResponseFormLogin{
  accessToken:string;
  user:IUser
}

export interface iFormValuesMyProfile{
  name:string;
  email:string;
  id:number;
  avatar?:string;
}

export interface IRegisterFormValues {
  email: string;
  password: string;
  name: string;
}

export interface ILoginValues {
  email: string;
  password: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginValues) => Promise<void>;
  userlogout: () => void;
  getDatasFormPageMyProfile:(datas:iFormValuesMyProfile)=>void;
}

