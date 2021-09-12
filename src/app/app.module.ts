import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { GiphyComponent } from './layout/giphy/giphy.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';



console.log("sssss");
@NgModule({
  declarations: [
    AppComponent,
    
    
  
    
    
  ],
  imports: [
    CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
  
    MatIconModule,
    
    RouterModule,
    HttpClientModule,
    
    AppRoutingModule,
    MaterialModule,
    
    
    
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
