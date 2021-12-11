import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwtPayload } from '../dto/jwt.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private readonly oauthService: OAuthService) { }

  canActivate() {
    // this.oauthService.silentRefresh().then();
    let claims: JwtPayload = this.oauthService.getIdentityClaims() as JwtPayload;
    return claims.admin!;
  }
}
