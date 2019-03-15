import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenData } from './tokenData';
import { BehaviorSubject } from 'rxjs';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        // ...public jwtHelper: JwtHelperService,
        this.tokenData = new tokenData();
        this.tokenSource = new BehaviorSubject(' ');
        this.token = this.tokenSource.asObservable();
        this.tokenExpirationSource = new BehaviorSubject(new Date());
        this.tokenExpiration = this.tokenExpirationSource.asObservable();
        this.firstNameSource = new BehaviorSubject(' ');
        this.firstName = this.firstNameSource.asObservable();
        this.lastNameSource = new BehaviorSubject(' ');
        this.lastName = this.lastNameSource.asObservable();
        /*
        private useridSource = new BehaviorSubject(' ');
        userid = this.useridSource.asObservable();
        */
        this.isAuthenticatedSource = new BehaviorSubject(false);
        this.isAuthenticated = this.isAuthenticatedSource.asObservable();
        this.isTeacherSource = new BehaviorSubject(false);
        this.isTeacher = this.isTeacherSource.asObservable();
        this.RealisAuthenticated = false;
        this.RealisTeacher = false;
        /*
        ngOnInit(): void {
          this.isAuthenticated.subscribe( i => this.RealisAuthenticated=i);
          this.isTeacher.subscribe(i => this.RealisTeacher=i);
        }*/
        /*
          get token(): Observable<string> {
            return this.tokenData.token
          }
          
        
          get tokenExpiration():Date
          {
            return this.tokenData.tokenExpiration;
          }
        
        
          get FirstName():string
          {
            return this.tokenData.firstName;
          }
        
          get LastName():string
          {
            return this.tokenData.lastName;
          }
          get Userid():string
          {
            return this.tokenData.userid;
          }
          */
        this.url = "https://localhost:44396";
        this._isTeacher = "";
        this.isAuthenticated.subscribe(function (i) { return _this.RealisAuthenticated = i; });
        this.isTeacher.subscribe(function (i) { return _this.RealisTeacher = i; });
    }
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post(this.url + "/account/createtoken", creds)
            .pipe(map(function (response) {
            var tokenInfo = response;
            _this.tokenSource.next(tokenInfo.token == null ? '' : tokenInfo.token);
            _this.tokenExpirationSource.next(tokenInfo.tokenExpiration);
            _this.firstNameSource.next(tokenInfo.firstName);
            _this.lastNameSource.next(tokenInfo.lastName);
            //    this.useridSource.next(tokenInfo.userid);
            _this.isAuthenticatedSource.next(_this.checkisAuthenticated(tokenInfo.token, tokenInfo.tokenExpiration));
            _this.isTeacherSource.next(_this.checkisAuthenticated(tokenInfo.token, tokenInfo.tokenExpiration) ? _this.checkIsTeacher(tokenInfo.isTeacher) : false);
            _this.tokenData.token = tokenInfo.token;
            _this.tokenData.tokenExpiration = tokenInfo.expiration;
            _this.tokenData.isTeacher = tokenInfo.isTeacher;
            _this.tokenData.firstName = tokenInfo.firstName;
            _this.tokenData.lastName = tokenInfo.lastName;
            _this.tokenData.userid = tokenInfo.userid;
            return true;
        }));
    };
    //  
    AuthService.prototype.IsAuthenticated = function () {
        return this.RealisAuthenticated;
    };
    AuthService.prototype.IsTeacher = function () {
        return this.RealisTeacher;
    };
    AuthService.prototype.logout = function () {
        this.tokenData = new tokenData();
    };
    AuthService.prototype.checkisAuthenticated = function (token, tokenExpiration) {
        return !(token.length == 0 && tokenExpiration > new Date());
    };
    AuthService.prototype.checkIsTeacher = function (isTeacher) {
        if (isTeacher == "Teacher")
            return true;
        return false;
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map