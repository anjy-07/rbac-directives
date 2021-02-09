import { Component } from '@angular/core';
import { PermissionService } from './permission.service';
import { PermissionOptions } from './model/permissionOptions.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rbac-directives';
  permission: PermissionOptions = {
    isHidden : false,
    isReadOnly: false, 
  }
  
  constructor(private permissionService: PermissionService) {}

  disabledView() {
    this.permission.isReadOnly = true;
    this.permissionService.triggerDisableView(this.permission);
  }
  enabledView() {
    this.permission.isReadOnly = false;
    this.permissionService.triggerEnableView(this.permission);
  }
  showView() {
    this.permission.isHidden = false;
    this.permissionService.triggerShowView(this.permission);
  }
  removeView() {
    this.permission.isHidden = true;
    this.permissionService.triggerRemoveView(this.permission);
  }
}
