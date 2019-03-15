import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, takeUntil } from 'rxjs/operators';
import { tokenData } from './tokenData';
import { BehaviorSubject, Subject } from 'rxjs';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.unsubscribe = new Subject();
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
        this.Realtoken = "";
        this.isAuthenticated
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) {
            _this.RealisAuthenticated = i;
            //    this.cd.markForCheck();
        });
        this.isTeacher
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) {
            _this.RealisTeacher = i;
            //   this.cd.markForCheck();
        });
        this.token
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) {
            _this.Realtoken = i;
            //    this.cd.markForCheck();
        });
    }
    AuthService.prototype.getAuthHeader = function () {
        return new HttpHeaders({ "Authorization": "Bearer " + this.Realtoken });
    };
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
        this.tokenSource.next('');
        this.tokenExpirationSource.next(this.tokenData.tokenExpiration);
        this.firstNameSource.next('');
        this.lastNameSource.next('');
        this.isAuthenticatedSource.next(false);
        this.isTeacherSource.next(false);
    };
    AuthService.prototype.register = function (registeruser) {
        return this.http.post(this.url + "/account/RegisterNewUser", registeruser, { headers: this.getAuthHeader() })
            .pipe(map(function (response) {
            return response;
        }));
    };
    AuthService.prototype.checkisAuthenticated = function (token, tokenExpiration) {
        return !(token.length == 0 && tokenExpiration > new Date());
    };
    AuthService.prototype.checkIsTeacher = function (isTeacher) {
        if (isTeacher == "Teacher")
            return true;
        return false;
    };
    AuthService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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