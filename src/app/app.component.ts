import { Component, VERSION } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  visible = true;
  name = 'Angular ' + VERSION.major;

  model = {
    // boy: { firstname: 'boy' },
    // girl: { firstname: 'girl' },
  };

  fields = [
    {
      fieldGroup: [
        {
          key: 'boy',
          type: 'person',
        },
        // {
        //   key: 'girl',
        //   type: 'person',
        // }
      ],
    },
  ];

  form = new FormGroup({});

  submit() {
    alert(JSON.stringify(this.model));
  }

  toggle() {
    this.visible = !this.visible;
  }
}
