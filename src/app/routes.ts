import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';


const appRoutes: Routes = [
    { path: '', redirectTo:'toimage',pathMatch:'full' },
    { path: 'topdf', component: HtmltopdfComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
