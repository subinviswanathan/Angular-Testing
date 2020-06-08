import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should have a link to todos pages', () => {
    let dElems = fixture.debugElement.queryAll(By.css('a'));

    let index = dElems.findIndex(de => de.attributes['routerLink'] === '/todos');
    expect(index).toBeGreaterThan(-1);
  });
});
