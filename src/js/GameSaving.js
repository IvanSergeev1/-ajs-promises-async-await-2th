export default class GameSaving {
  constructor(data) {
    const obj = JSON.parse(data);
    this.id = obj.id;
    this.created = obj.created;
    this.userInfo = {
      id: obj.userInfo.id,
      name: obj.userInfo.name,
      level: obj.userInfo.level,
      points: obj.userInfo.points,
    };
  }
}
