import { Content } from './content';

describe('Notification content', () => {
  it('shoud be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solitiação de amizade');

    expect(content).toBeTruthy();
  });

  it('shoud not be able to create a notification content with less than 5 characteres', () => {
    expect(() => new Content('123')).toThrow();
  });

  it('shoud not be able to create a notification content with more than 240 characteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
