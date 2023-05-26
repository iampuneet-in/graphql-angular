import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { registerData } from './operations/mutation'
import { RegisterData } from './register/register.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) {}

  register(input: RegisterData) {
    return this.apollo.mutate({
      variables: {
        input
      },
      mutation: registerData
    })
  }
}
