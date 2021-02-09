import { Directive, Input, TemplateRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { PermissionOptions } from './model/permissionOptions.interface';
import { PermissionService } from './permission.service';

@Directive({
  selector: '[appHasPermissions]'
})

export class HasPermissionsDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2,
    private permissionService: PermissionService
  ) { }

  @Input()
  set appHasPermissions(value : PermissionOptions) {
    this.permissionService.event$.subscribe((permissionOptions: PermissionOptions) => {
      console.log(permissionOptions)
      this.decideView(permissionOptions);
    })
    this.decideView(value);
  }

  decideView(value: PermissionOptions) {
    if(value.isReadOnly && value.allowedAction)
      this.disableComponent();
    else if(!value.isReadOnly && value.allowedAction)
      this.enableComponent();
    else if(value.isReadOnly && value.allowedAction)
      this.showComponent();
    else
      this.removeComponent();
  }

  disableComponent(): void {
    this.viewContainerRef.clear();
    const viewRootElement : HTMLElement = this.viewContainerRef.createEmbeddedView(
      this.templateRef
    ).rootNodes[0];
    this.renderer.setProperty(viewRootElement, 'disabled', true);
  }

  enableComponent(): void {
    this.viewContainerRef.clear();
    const viewRootElement : HTMLElement = this.viewContainerRef.createEmbeddedView(
      this.templateRef
    ).rootNodes[0];
    this.renderer.setProperty(viewRootElement, 'disabled', false);
  }

  removeComponent(): void { 
    console.log("df");
    this.viewContainerRef.clear();
  }

  showComponent(): void {
    this.viewContainerRef.createEmbeddedView(
      this.templateRef
    ).rootNodes[0];
  }

}
