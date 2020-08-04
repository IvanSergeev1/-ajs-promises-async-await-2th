import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const game = await GameSavingLoader.load();
    return game;
  } catch (error) {
    return error;
  }
})();
