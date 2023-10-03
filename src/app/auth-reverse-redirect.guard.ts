import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class AuthGuardReverseRedirect
  implements CanDeactivate<CanComponentDeactivate>
{
  constructor() {}

  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean>  {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
