import { getText } from './index';

describe('utils tests', () => {
  it('should return a string', () => {
    const r = getText();
    expect(r).toBeTruthy();
    expect(typeof r === 'string').toBeTruthy();
  });
});
