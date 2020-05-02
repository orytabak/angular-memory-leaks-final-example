import {Injectable} from '@angular/core';
import {Cat} from "./cat.model";

@Injectable({
  providedIn: 'root'
})
export class CatsRecordService {

  private catsRecords: any[] = [];

  constructor() {
  }

  addCatRecord(cat: Cat, action: string): void {
    this.catsRecords.push({cat, action, time: new Date()});
  }

  getCatRecords(): string[] {
    return this.catsRecords.map(record => `${record.cat.name} is a ${record.cat.color} cat that was ${record.action}ed on ${this.getRecordTimestamp(record.time)}`);
  }

  getRecordTimestamp(date: Date) {
    return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }

}
