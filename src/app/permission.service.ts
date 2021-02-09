import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { PermissionOptions } from './model/permissionOptions.interface';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  userPermissions : string[] = [
    ""
  ];

  private _eventSubject : Subject<PermissionOptions> = new Subject();
  public event$ : Observable<PermissionOptions> = this._eventSubject.asObservable();
  constructor() { 

  }

  triggerDisableView(permissionOptions : PermissionOptions) {
    this._eventSubject.next(permissionOptions);
  }
  triggerEnableView(permissionOptions : PermissionOptions) {
    this._eventSubject.next(permissionOptions);
  }
  triggerShowView(permissionOptions : PermissionOptions) {
    this._eventSubject.next(permissionOptions);
  }
  triggerRemoveView(permissionOptions : PermissionOptions) {
    this._eventSubject.next(permissionOptions);
  }
}
