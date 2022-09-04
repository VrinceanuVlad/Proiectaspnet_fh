import { TestBed } from '@angular/core/testing';

import { PlayersGuard } from './players.guard';

describe('PlayersGuard', () => {
  let guard: PlayersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlayersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
