import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      active: ['', Validators.required],
      analytics: ['', Validators.required],
      authUrl: ['', Validators.required],
      created: ['', Validators.required],
      creator_id: ['', Validators.required],
      description: ['', Validators.required],
      domain: ['', Validators.required],
      feedback_address: ['', [Validators.required, Validators.maxLength(5)]],
      googleAnalictics: ['', Validators.required],
      id: ['', Validators.required],
      is_shown_user: ['', Validators.required],
      languageUi: ['', Validators.required],
    });
  }

}
