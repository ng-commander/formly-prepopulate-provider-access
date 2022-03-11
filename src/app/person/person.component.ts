import { Component, OnDestroy, OnInit } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [RandomService],
})
export class PersonComponent extends FieldType implements OnInit, OnDestroy {
  constructor(private readonly randomService: RandomService) {
    super();
    console.log('Constructor', this.randomService.value);
  }

  ngOnInit() {
    console.log('ngOnInit', this.randomService.value);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy', this.randomService.value);
  }

  prePopulate(field: FormlyFieldConfig): void {
    console.log('prePopulate', this.randomService.value);

    if (field.fieldGroup) {
      return;
    }

    field.fieldGroup = [
      {
        fieldGroup: [
          {
            key: 'firstname',
            type: 'input',
            defaultValue: '',
            templateOptions: {
              label: 'First name',
            },
          },
        ],
      },
    ];
  }
}
