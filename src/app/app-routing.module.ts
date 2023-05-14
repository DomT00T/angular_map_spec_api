import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewslistComponent } from './components/newslist/newslist.component';


const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'news'},
  {path: 'news',component:NewslistComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
