import GameSavingLoader from '../GameSavingLoader';
import GameSaving from '../GameSaving';

test('GameSavingloader succesfully saves the game', async () => {
  const game = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  const expected = new GameSaving(game);
  const result = await GameSavingLoader.load();
  expect(result).toEqual(expected);
});
