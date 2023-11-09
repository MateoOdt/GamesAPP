import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesPostComponent } from './games-post.component';

describe('GamesPostComponent', () => {
  let component: GamesPostComponent;
  let fixture: ComponentFixture<GamesPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesPostComponent]
    });
    fixture = TestBed.createComponent(GamesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
