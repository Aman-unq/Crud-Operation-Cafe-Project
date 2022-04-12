import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCafeComponent } from './add-cafe/add-cafe.component';
import { ListCafeComponent } from './list-cafe/list-cafe.component';
import { LoginCafeComponent } from './login-cafe/login-cafe.component';
import { RegisterCafeComponent } from './register-cafe/register-cafe.component';
import { UpdateCafeComponent } from './update-cafe/update-cafe.component';

const routes: Routes = [
  { path: "add", component: AddCafeComponent },
  { path: "update/:id", component: UpdateCafeComponent },
  { path: "login", component: LoginCafeComponent },
  { path: "register", component: RegisterCafeComponent },
  { path: "", component: ListCafeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
