import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [{ name: 'person', component: PersonComponent }],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  declarations: [AppComponent, PersonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
