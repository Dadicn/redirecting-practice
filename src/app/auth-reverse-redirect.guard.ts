import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface CanComponentDeactivate {
    canDeactivate: () => boolean;
}

@Injectable()
export class AuthGuardReverseRedirect implements CanDeactivate<CanComponentDeactivate>{

    constructor() {}

    canDeactivate(component: CanComponentDeactivate): boolean {
           return component.canDeactivate ? component.canDeactivate() : true;
    }
 }