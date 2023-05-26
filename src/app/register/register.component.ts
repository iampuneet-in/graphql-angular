import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RegisterResult } from './register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//  {id: "10", email: "user1@caxsol.com", address: "Test add", contactNo: 10, firstName: "jack", lastName: "Beffos", role: "User", status: "Active", image:"test"} -->

export class RegisterComponent {
  register = {
    email: '',
    address: '',
    contactNo: '',
    firstName: '',
    lastName: '',
    role: '',
    status: 'Active',
    image: 'test'
  }
  operation: number;
  constructor(private api: ApiService) {
    this.operation  = 1
  }

  save() {
    this.api.register(this.register).subscribe(({data}: any) => {
      const userResult: RegisterResult | undefined = data;
      if(userResult?.data?.createUsers) {
        this.operation = 1
      } else {
        this.operation = 2
      }
      console.log('userResult', userResult);
    })
  }
}
