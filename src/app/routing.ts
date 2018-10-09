
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/component/authentication.component';
import { HomeComponent } from './home/home.component';






const routes: Routes = [
    { path: 'login', component: AuthenticationComponent},
    { path: 'home', component: HomeComponent},
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes,{ useHash: true });
