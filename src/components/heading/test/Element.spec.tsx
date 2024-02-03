import { Element } from '../Element';

describe('Element', () => {
  it('must return elementJSX', () => {
    const element = Element['h1']('hello', true, 'medium', true);
    expect(element.type).toBe('h1');
  });
});
