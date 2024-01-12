import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpineerComponent } from './loading-spineer.component';

describe('LoadingSpineerComponent', () => {
  let component: LoadingSpineerComponent;
  let fixture: ComponentFixture<LoadingSpineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpineerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingSpineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
