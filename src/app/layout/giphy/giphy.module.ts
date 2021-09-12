import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphyRoutingModule } from './giphy-routing.module';
import { GiphyComponent } from './giphy.component';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GiphyComponent],
  imports: [
    CommonModule,
    GiphyRoutingModule,
    MaterialModule,
    FormsModule,
    
  ]
})
export class GiphyModule { }
