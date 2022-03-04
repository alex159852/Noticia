import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticianuevaComponent } from './noticianueva.component';

describe('NoticianuevaComponent', () => {
  let component: NoticianuevaComponent;
  let fixture: ComponentFixture<NoticianuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticianuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticianuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
