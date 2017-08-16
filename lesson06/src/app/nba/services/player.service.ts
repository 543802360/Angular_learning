/**
 * 依赖注入服务实例，模拟获取运动员数据。
 * 通常情况下，这里应该是从远端服务器获取数据，API必须是异步的，可以用Angular的HTTP进行请求
 */
import { Injectable } from "@angular/core";
import { PLAYERS } from "../mock-players";
@Injectable()
export class PlayerService {
  constructor() {}

  getPlayers() {
    return PLAYERS;
  }
}
