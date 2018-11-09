import { PlatModule } from './plat.module';

describe('PlatModule', () => {
  let platModule: PlatModule;

  beforeEach(() => {
    platModule = new PlatModule();
  });

  it('should create an instance', () => {
    expect(platModule).toBeTruthy();
  });
});
