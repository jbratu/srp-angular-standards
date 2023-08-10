import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { HowtoComponent } from './pages/howto/howto.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { AuthGuard } from './shared/guard/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: "",
          component: HowtoComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'contacts',
          component: ContactListComponent,
          canActivate: [AuthGuard]
        }
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
