import { async, TestBed } from '@angular/core/testing';
import { PublishModule } from './publish.module';

describe('PublishModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PublishModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PublishModule).toBeDefined();
  });
});
