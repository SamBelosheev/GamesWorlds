import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AdventureComponent} from "./adventure/adventure.component";
import {StrategyComponent} from "./strategy/strategy.component";
import {MindComponent} from "./mind/mind.component";
import {SurvivelComponent} from "./survivel/survivel.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'adventure', component: AdventureComponent},
  {path: 'strategy', component: StrategyComponent},
  {path: 'mind', component: MindComponent},
  {path: 'survivel', component: SurvivelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
