import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumaintenanceComponent } from './menumaintenance.component';

describe('MenumaintenanceComponent', () => {
  let component: MenumaintenanceComponent;
  let fixture: ComponentFixture<MenumaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenumaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
