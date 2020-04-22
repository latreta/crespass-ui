import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/core/services/signup/signup.service';
import { User, SignupForm } from 'src/app/core/model';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent {

    private signupForm: FormGroup;
    private contador = 0;

    constructor(private signupService: SignupService, private fb: FormBuilder) {
        this.signupForm = this.fb.group({
            name: ['teste'],
            lastName: ['testes2'],
            email: [`teste${this.contador}@teste.com`],
            password: ['12345678'],
            password_confirmation: ['12345678'],
            address: this.fb.group({
                cep: ['234234'],
                street: ['t'],
                number: ['1'],
                complement: ['s'],
                city: ['re'],
                state: ['pe'],
                neighborhood: ['bar']
            })
        });
    }

    private signup() {
        this.contador++;
        const formData = this.signupForm.value as SignupForm;
        this.signupService.signUp(formData);
    }
}