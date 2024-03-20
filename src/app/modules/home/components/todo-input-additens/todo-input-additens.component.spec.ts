import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAdditensComponent } from './todo-input-additens.component';

describe('TodoInputAdditensComponent', () => {
  let component: TodoInputAdditensComponent;
  let fixture: ComponentFixture<TodoInputAdditensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputAdditensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputAdditensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
