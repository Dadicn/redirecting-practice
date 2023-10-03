import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardReverseRedirect {

    constructor(public auth: AuthService) {}

    canDeactivate(): boolean {
        return this.auth.isCorrectSurname;     
    }
 }