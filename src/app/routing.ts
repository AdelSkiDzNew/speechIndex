
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/component/authentication.component';






const routes: Routes = [
    { path: 'login', component: AuthenticationComponent},
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes,{ useHash: true });
