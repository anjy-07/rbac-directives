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
  permissionCard1: PermissionOptions = {
    allowedAction : true,
    isReadOnly: false
  }
  permissionCard2: PermissionOptions = {
    allowedAction : true,
    isReadOnly: false
  }
  constructor(private permissionService: PermissionService) {}

  disabledView() {
    this.permissionCard1.isReadOnly = true;
    this.permissionService.triggerDisableView(this.permissionCard1);
  }
  enabledView() {
    this.permissionCard1.isReadOnly = false;
    this.permissionService.triggerEnableView(this.permissionCard1);
  }
  showView() {
    this.permissionCard2.allowedAction = true;
    this.permissionCard2.isReadOnly = false;
    this.permissionService.triggerShowView(this.permissionCard2);
  }
  removeView() {
    this.permissionCard2.allowedAction = false;
    this.permissionService.triggerRemoveView(this.permissionCard2);
  }
}
