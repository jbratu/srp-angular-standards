import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { CommonService } from "../services/common.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthGuard {
  constructor(private router: Router, private commonService: CommonService) { }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    let isLoggedIn: boolean = Boolean(this.commonService.getSessionStorageItem("isLoggedIn") || false);
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
