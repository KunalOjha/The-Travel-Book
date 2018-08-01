import { WorldMapModule } from './world-map.module';

describe('WorldMapModule', () => {
  let worldMapModule: WorldMapModule;

  beforeEach(() => {
    worldMapModule = new WorldMapModule();
  });

  it('should create an instance', () => {
    expect(worldMapModule).toBeTruthy();
  });
});
