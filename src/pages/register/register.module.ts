import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    AngularFireAuthModule,
  ],
  exports: [
    RegisterPage,
  ]
})
export class RegisterPageModule {}
