import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, takeUntil, catchError } from 'rxjs/operators';
import { tokenData } from './tokenData';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { LoginMessageHandlerService } from '../Login/login-message-handler.service';
import { Router } from '@angular/router';
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper, MessageHandler, router) {
        var _this = this;
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.MessageHandler = MessageHandler;
        this.router = router;
        this.unsubscribe = new Subject();
        // ...public jwtHelper: JwtHelperService,
        this.tokenData = new tokenData();
        this.tokenSource = new BehaviorSubject('');
        this.token = this.tokenSource.asObservable();
        this.tokenExpirationSource = new BehaviorSubject(new Date());
        this.tokenExpiration = this.tokenExpirationSource.asObservable();
        this.firstNameSource = new BehaviorSubject('');
        this.firstName = this.firstNameSource.asObservable();
        this.lastNameSource = new BehaviorSubject('');
        this.lastName = this.lastNameSource.asObservable();
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
        /*this.isAuthenticated
        .pipe(takeUntil(this.unsubscribe))
        .subscribe( i => {
          this.RealisAuthenticated=i;
      //    this.cd.markForCheck();
        });
        this.isTeacher
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(i => {
            this.RealisTeacher=i;
         //   this.cd.markForCheck();
        });*/
        this.token
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(function (i) {
            _this.Realtoken = i;
            //    this.cd.markForCheck();
        });
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        /*
        private useridSource = new BehaviorSubject(' ');
        userid = this.useridSource.asObservable();
        */
        /*private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
        private _isAuthenticated = this.isAuthenticatedSource.asObservable();*/
        get: function () {
            if (this.tokenData == null || this.tokenData.token == null || this.tokenData.token.length == 0) {
                this.tokenData.token = localStorage.getItem('id_token');
                if (this.tokenData.token != null) {
                    var Data = this.jwtHelper.decodeToken(this.tokenData.token);
                    this.tokenData.tokenExpiration = new Date(localStorage.getItem("expires_at"));
                    this.tokenData.isTeacher = Data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                    this.tokenData.firstName = Data.given_name;
                    this.tokenData.lastName = Data.family_name;
                    this.tokenSource.next(this.tokenData.token == null ? '' : this.tokenData.token);
                    this.tokenExpirationSource.next(this.tokenData.tokenExpiration);
                    this.firstNameSource.next(this.tokenData.firstName);
                    this.lastNameSource.next(this.tokenData.lastName);
                    this.MessageHandler.SendCurrUserAuth(this.checkisAuthenticated(this.tokenData.token, this.tokenData.tokenExpiration));
                    this.MessageHandler.SendCurrUserTeacher(this.checkisAuthenticated(this.tokenData.token, this.tokenData.tokenExpiration) ? this.checkIsTeacher(this.tokenData.isTeacher) : false);
                }
            }
            return this.checkisAuthenticated(this.tokenData.token, this.tokenData.tokenExpiration);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isTeacher", {
        /*private isTeacherSource = new BehaviorSubject<boolean>(false);
        private _isTeacher = this.isTeacherSource.asObservable();*/
        get: function () {
            return this.checkisAuthenticated(this.tokenData.token, this.tokenData.tokenExpiration) ? this.checkIsTeacher(this.tokenData.isTeacher) : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getAuthHeader = function () {
        return new HttpHeaders({ "Authorization": "Bearer " + this.Realtoken });
    };
    AuthService.prototype.getToken = function () {
        return this.Realtoken;
    };
    AuthService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post(this.url + "/account/createtoken", creds)
            .pipe(map(function (response) {
            var tokenInfo = response;
            _this.tokenSource.next(tokenInfo.token == null ? '' : tokenInfo.token);
            _this.tokenExpirationSource.next(tokenInfo.expiration);
            _this.firstNameSource.next(tokenInfo.firstName);
            _this.lastNameSource.next(tokenInfo.lastName);
            localStorage.setItem('id_token', tokenInfo.token);
            localStorage.setItem("expires_at", tokenInfo.expiration);
            //    this.useridSource.next(tokenInfo.userid);
            // this.isAuthenticatedSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration));
            //  this.isTeacherSource.next(this.checkisAuthenticated(tokenInfo.token,tokenInfo.tokenExpiration)?this.checkIsTeacher(tokenInfo.isTeacher):false)
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
    /*   public IsAuthenticated(): boolean
       {
         return this.RealisAuthenticated;
       }
  
       public IsTeacher(): boolean
       {
         return this.RealisTeacher;
       }
  */
    AuthService.prototype.logout = function () {
        this.tokenData = new tokenData();
        this.tokenSource.next('');
        this.tokenExpirationSource.next(this.tokenData.tokenExpiration);
        this.firstNameSource.next('');
        this.lastNameSource.next('');
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        //  this.isAuthenticatedSource.next(false);
        //  this.isTeacherSource.next(false)
    };
    AuthService.prototype.register = function (registeruser) {
        return this.http.post(this.url + "/account/RegisterNewUser", registeruser, { headers: this.getAuthHeader() })
            .pipe(map(function (response) {
            return response;
        }));
    };
    AuthService.prototype.DeleteUser = function (id) {
        var url = "https://localhost:44396/account/DeleteUser";
        var parmas = { "CourseId": id };
        return this.http.post(url, parmas, { headers: this.getAuthHeader()
        })
            .pipe(catchError(this.handleError));
    };
    AuthService.prototype.UpdateUser = function (user) {
        var url = "https://localhost:44396/account/UpdateUser";
        return this.http.post(url, user, { headers: this.getAuthHeader()
        })
            .pipe(catchError(this.handleError));
    };
    AuthService.prototype.UpdateUserAdmin = function (user) {
        var url = "https://localhost:44396/account/UpdateUserAdmin";
        return this.http.post(url, user, { headers: this.getAuthHeader()
        })
            .pipe(catchError(this.handleError));
    };
    AuthService.prototype.checkisAuthenticated = function (token, tokenExpiration) {
        var res = !(token.length == 0 || tokenExpiration < new Date());
        /* if (!res && token.length>0)
          {
            this.logout();
            this.router.navigate(['/Account/Login']);
          }*/
        if (!res) {
            this.logout();
            this.router.navigate(['/Account/Login']);
        }
        // Add time to expiration
        // this.tokenData.tokenExpiration= new Date(Date.now().valueOf()+30*60*1000);
        //localStorage.setItem("expires_at",this.tokenData.tokenExpiration.toISOString());
        // need also change in backend/ token somehow..
        return res;
    };
    AuthService.prototype.checkIsTeacher = function (isTeacher) {
        if (isTeacher == "Teacher")
            return true;
        return false;
    };
    AuthService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    };
    AuthService.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, JwtHelperService, LoginMessageHandlerService,
            Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map