import { Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';

export const routes: Routes = [{ path: '**', component: FilterComponent }];
