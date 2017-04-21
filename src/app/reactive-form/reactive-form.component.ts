import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {emailValidator} from './validators/emailValidator';
import {confirmValidator} from "./validators/confirmValidator";

interface IUser {
  name: string;
  info: {
    email: string;
    confirm: string;
  }
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './1/reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      info: new FormGroup({
        email: new FormControl(''),
        confirm: new FormControl('')
      })
    });

    // === 2 ===

    // this.form.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.form.get('name').valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.form.get('name').statusChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.form.get('info').get('email').valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.form.get(['info', 'email']).valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // === 3 ===
    // this.form = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    //   info: new FormGroup({
    //     email: new FormControl('', [Validators.required]),
    //     confirm: new FormControl('', [Validators.required])
    //   })
    // });

    // this.form = this.fb.group({
    //   name: ['', [Validators.required, Validators.minLength(2)]],
    //   info: this.fb.group({
    //     email: ['', [Validators.required]],
    //     confirm: ['', [Validators.required]]
    //   })
    // });

    // this.form = this.fb.group({
    //     name: ['', [Validators.required, Validators.minLength(2)]],
    //     info: this.fb.group({
    //       email: ['', [Validators.required, emailValidator]],
    //       confirm: ['', [Validators.required]]
    //     })
    //   });

    // this.form = this.fb.group({
    //   name: ['', [Validators.required, Validators.minLength(2)]],
    //   info: this.fb.group({
    //     email: ['', [Validators.required, emailValidator]],
    //     confirm: ['']
    //   })
    // });
    //
    // this.form.get(['info', 'confirm']).setValidators([
    //   Validators.required,
    //   confirmValidator.bind(null, this.form.get(['info', 'email']))
    // ]);
  }

  onSubmit(form) {
    console.log('--- form', form);
    // 2
    // console.log('--- this.form.value', this.form.value);
  }

}


