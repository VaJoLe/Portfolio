import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "imprint", component: ImprintComponent },
    { path: "privacy", component: PrivacyComponent },
];
