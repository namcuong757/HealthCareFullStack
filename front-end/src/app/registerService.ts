import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class registerService {
    private formData: any = {};
  
    setData(step: number, data: any) {
      this.formData[step] = data;
    }
  
    getData(step: number) {
      return this.formData[step];
    }
  }
  