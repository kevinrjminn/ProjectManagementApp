import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationToolsComponent } from './collaboration-tools.component';

describe('CollaborationToolsComponent', () => {
  let component: CollaborationToolsComponent;
  let fixture: ComponentFixture<CollaborationToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaborationToolsComponent]
    });
    fixture = TestBed.createComponent(CollaborationToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
