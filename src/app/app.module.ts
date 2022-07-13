import { counterReducer } from './state/ebike.reducer';
import { Ebike } from './ebike';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreItemsComponent } from './store-items/store-items.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    StoreItemsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    StoreModule.forRoot({ bikes: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
