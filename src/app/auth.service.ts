import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService { 
    isCorrectName = false;

    constructor(private router: Router) {}
    

    redirect(): void {
        this.isCorrectName = true;
        this.router.navigate(['/redirected'])
    }
}