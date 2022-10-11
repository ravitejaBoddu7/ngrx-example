import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadDeleteComponent } from './heroes/components/read-delete/read-delete.component';
import { CreateComponent } from './heroes/components/create/create.component';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './heroes/reducers/hero-reducer';

@NgModule({
  declarations: [AppComponent, ReadDeleteComponent, CreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ heroes: heroReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
