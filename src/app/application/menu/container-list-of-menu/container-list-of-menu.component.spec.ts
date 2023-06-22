import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListOfMenuComponent } from './container-list-of-menu.component';

describe('ContainerListOfMenuComponent', () => {
  let component: ContainerListOfMenuComponent;
  let fixture: ComponentFixture<ContainerListOfMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerListOfMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerListOfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
