import { Component, OnInit } from '@angular/core';
import {CatsRecordService} from "../cats-record.service";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  records: any[];

  constructor(catsRecordsService: CatsRecordService) {
    this.records = catsRecordsService.getCatRecords();
  }

  ngOnInit(): void {
  }

}
