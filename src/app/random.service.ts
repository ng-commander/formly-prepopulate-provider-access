import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
  get value() {
    return this._value;
  }

  private readonly _value = Math.random();
  constructor() {
    console.log('RandomService::constructor', this.value);
  }
}
