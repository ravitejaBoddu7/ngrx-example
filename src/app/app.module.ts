import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadDeleteComponent } from './heroes/components/read-delete/read-delete.component';
import { CreateComponent } from './heroes/components/create/create.component';
import { environment } from '../environments/environment';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './heroes/reducers/hero-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, ReadDeleteComponent, CreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ heroes: heroReducer }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // public constructor(private store: Store<unknown>) {
  //   this.exposeStoreToGlobal();
  // }
  // public exposeStoreToGlobal() {
  //   if (!environment.production) {
  //     globalThis.showStoreSnapshot = () => {
  //       this.store.pipe(first()).subscribe((snapshot) => console.log(snapshot));
  //     };
  //   }
  // }
}
