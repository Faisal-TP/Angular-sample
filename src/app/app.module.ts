import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { BindingComponent } from './binding/binding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeefirstComponent } from './employeefirst/employeefirst.component';
import { EmployeesecondComponent } from './employeesecond/employeesecond.component';
import{StoragesComponent} from './storages/storages.component';
import{IfComponentComponent} from './if-component/if-component.component';
import{IfAssignmentComponent} from './if-assignment/if-assignment.component'
import{SwitchComponent} from './switch/switch.component';
import{SwitchAssignmentComponent} from './switch-assignment/switch-assignment.component';
import{ForComponentComponent} from './for-component/for-component.component';
import{ForAssignmentComponent} from './for-assignment/for-assignment.component';
import { Form1Component } from './form1/form1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//matirial
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
//matirial
import {ReactiveFormsModule} from '@angular/forms';
import { Form2Component } from './form2/form2.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    BindingComponent,
    ComponentInteractionComponent,
    PipesComponent,
    EmployeefirstComponent,
    EmployeesecondComponent,
    StoragesComponent,
    IfComponentComponent,
    IfAssignmentComponent,
    SwitchComponent,
    SwitchAssignmentComponent,
    ForComponentComponent,
    ForAssignmentComponent,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
