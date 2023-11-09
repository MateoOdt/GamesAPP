import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesViewTableComponent } from './games-view-table.component';

describe('GamesViewTableComponent', () => {
  let component: GamesViewTableComponent;
  let fixture: ComponentFixture<GamesViewTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesViewTableComponent]
    });
    fixture = TestBed.createComponent(GamesViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
