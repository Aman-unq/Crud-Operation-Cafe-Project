import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { ListCafeComponent } from './list-cafe/list-cafe.component';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';
import { LoginCafeComponent } from './login-cafe/login-cafe.component';
import { RegisterCafeComponent } from './register-cafe/register-cafe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCafeComponent,
    ListCafeComponent,
    UpdateCafeComponent,
    LoginCafeComponent,
    RegisterCafeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
