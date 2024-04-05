import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAsideComponent } from './mobile-aside.component';

describe('MobileAsideComponent', () => {
  let component: MobileAsideComponent;
  let fixture: ComponentFixture<MobileAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
