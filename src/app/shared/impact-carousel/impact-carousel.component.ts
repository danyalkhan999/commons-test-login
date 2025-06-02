import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  CarouselComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  CarouselCaptionComponent,
  CarouselControlComponent,
} from '@coreui/angular';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-impact-carousel',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
  ],
  templateUrl: './impact-carousel.component.html',
  styleUrl: './impact-carousel.component.css',
})
export class ImpactCarouselComponent implements OnInit {
  activeSlideIndex = 0;

  slides = [
    {
      id: 0,
      src: 'https://images.pexels.com/photos/11623705/pexels-photo-11623705.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Experience the joy & fulfillment of giving back',
      subtitle: 'Share the message and make a positive impact!',
    },
    {
      id: 1,
      src: 'https://images.pexels.com/photos/11623705/pexels-photo-11623705.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Empower Change',
      subtitle: 'Volunteering for a more compassionate world',
    },
  ];

  ngOnInit(): void {}
}
