import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/core/services/signup/signup.service';
import { User, SignupForm } from 'src/app/core/model';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent {

    private signupForm: FormGroup;

    constructor(private signupService: SignupService, private fb: FormBuilder) {
        this.signupForm = this.fb.group({
            name: [''],
            lastName: [''],
            email: [''],
            password: [''],
            password_confirmation: [''],
            address: this.fb.group({
                cep: [''],
                street: [''],
                number: [''],
                complement: [''],
                city: [''],
                state: [''],
                neighborhood: ['']
            })
        });
    }

    private signup() {
        const formData = this.signupForm.value as SignupForm;
        this.signupService.signUp(formData);
    }
}