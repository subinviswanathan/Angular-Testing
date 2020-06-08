/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [TodoService],
      imports: [HttpClientModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  xit('should load todos from the server', () => {
    //fixture.debugElement.injector.get(TodoService) // To get the dependency from component directly.

    let service = TestBed.get(TodoService); // It works if we have dependency at module level.
    spyOn(service, 'getTodos').and.returnValue(from([[1, 2, 3]]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

  xit('should load todos from the server', async(() => {
    //fixture.debugElement.injector.get(TodoService) // To get the dependency from component directly.

    let service = TestBed.get(TodoService); // It works if we have dependency at module level.
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    fixture.whenStable()
      .then(() => {
        expect(component.todos.length).toBe(3);
      })
  }));

  it('should load todos from the server', fakeAsync(() => {
    //fixture.debugElement.injector.get(TodoService) // To get the dependency from component directly.

    let service = TestBed.get(TodoService); // It works if we have dependency at module level.
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    tick();
    expect(component.todos.length).toBe(3);
  }));
});
