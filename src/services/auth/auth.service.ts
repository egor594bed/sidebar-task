import {AxiosResponse} from 'axios'
import { IAuthResponse } from './authResponse'
import $auth_api from '../../shared/api/authAxios'

export default class AuthService {

  static login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>>{
    return $auth_api.post<IAuthResponse>('/auth/login', {email, password})
  }
    
  static refreshToken(): Promise<AxiosResponse<IAuthResponse>>{
    return $auth_api.post<IAuthResponse>('/auth/refresh')
  }
    
  static logout(): Promise<AxiosResponse<void>>{
    return $auth_api.post<void>('/auth/logout')
  }
}