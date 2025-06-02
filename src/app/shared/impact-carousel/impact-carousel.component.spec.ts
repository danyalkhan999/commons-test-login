import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactCarouselComponent } from './impact-carousel.component';

describe('ImpactCarouselComponent', () => {
  let component: ImpactCarouselComponent;
  let fixture: ComponentFixture<ImpactCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
