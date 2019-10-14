import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    {path:'R-F', component: ReactiveFormComponent},
    {path:'T-D-F', component: TemplateDrivenFormComponent},
    {path:'D-F', component: DynamicFormComponent},
  ] }
]
@NgModule({
  declarations: [LayoutComponent,ReactiveFormComponent,TemplateDrivenFormComponent,DynamicFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormsModule { }
