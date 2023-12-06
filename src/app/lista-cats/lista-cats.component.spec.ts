import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCatsComponent } from './lista-cats.component';

describe('ListaCatsComponent', () => {
  let component: ListaCatsComponent;
  let fixture: ComponentFixture<ListaCatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCatsComponent]
    });
    fixture = TestBed.createComponent(ListaCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
