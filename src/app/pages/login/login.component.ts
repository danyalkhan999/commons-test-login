import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginFormComponent } from '../login-form/login-form.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ImpactCarouselComponent } from '../../shared/impact-carousel/impact-carousel.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LoginFormComponent,
    TestimonialsComponent,
    ImpactCarouselComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
