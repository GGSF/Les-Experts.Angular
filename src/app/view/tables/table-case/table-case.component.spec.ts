import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCaseComponent } from './table-case.component';

describe('TableCaseComponent', () => {
  let component: TableCaseComponent;
  let fixture: ComponentFixture<TableCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});