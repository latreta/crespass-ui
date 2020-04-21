import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/core/services/signup/signup.service';
import { SignupForm } from 'src/app/core/model';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent {

    private signupForm: FormGroup;

    constructor(private signupService: SignupService, private fb: FormBuilder) {
        this.signupForm = this.fb.group({
            name: [''],
            email: [''],
            password: [''],
            password_confirmation: ['']
        });
    }

    private signup() {
        const formData = this.signupForm.value as SignupForm;
        this.signupService.signUp(formData);
    }
}