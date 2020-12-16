import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclientgroupsComponent } from './myclientgroups.component';

describe('MyclientgroupsComponent', () => {
  let component: MyclientgroupsComponent;
  let fixture: ComponentFixture<MyclientgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclientgroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclientgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
