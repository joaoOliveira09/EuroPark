import { Injectable } from '@angular/core'
import { JwtHelperService } from '@auth0/angular-jwt'

const token = sessionStorage.getItem('token')

const jwtHelper = new JwtHelperService()

@Injectable({
  providedIn: 'root',
})
export class JwtService {

  getTokenSub(): string {
    const decodedToken = jwtHelper.decodeToken(token as string)
    if (decodedToken?.sub) return decodedToken.sub

    return ''
  }
  
  expiredToken(): boolean {
    return jwtHelper.isTokenExpired(sessionStorage.getItem('token'))
  }
}
