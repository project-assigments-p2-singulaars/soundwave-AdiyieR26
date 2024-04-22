import { Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { JoinComponent } from './join/join.component';
import { DiscoverComponent } from './discover/discover.component';
import { FooterComponent } from './footer/footer.component';


export const routes: Routes = [
    {path: '', component:SectionComponent},

    {path: 'discover', component: DiscoverComponent},

    {path: 'join', component: JoinComponent},

    {path: 'footer', component: FooterComponent},

];
