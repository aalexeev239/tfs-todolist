import {Component, OnInit} from '@angular/core';

interface IUser {
  name: string;
  info: {
    email: string;
    confirm: string;
  }
}

@Component({
  selector: 'app-template-form',
  // templateUrl: './template-form.component.html',
  templateUrl: './1/template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  user: IUser = {
    name: '',
    info: {
      email: '',
      confirm: ''
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(f: IUser) {
    console.log('--- f', f);
  }
}
