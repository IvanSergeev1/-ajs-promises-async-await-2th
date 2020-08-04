/* eslint-disable no-unused-vars */
import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response = await read();
          const value = await json(response);
          const gameSaving = new GameSaving(value);
          resolve(gameSaving);
        } catch (error) {
          reject(error);
        }
      })();
    });
  }
}
