import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecStandardComponent } from './sec-standard.component';

describe('SecStandardComponent', () => {
  let component: SecStandardComponent;
  let fixture: ComponentFixture<SecStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
