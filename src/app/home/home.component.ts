import {Component, OnInit} from '@angular/core';
import {Cat} from "../cat.model";
import {CatsRecordService} from "../cats-record.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public myCats: Cat[] = [];
  public strayCats: Cat[] = [];
  public showRecords: boolean = false;

  constructor(private catsRecordService: CatsRecordService) {
    for (let i = 0; i < 5; i++) {
      this.strayCats.push(new Cat());
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.strayCats.push(new Cat());
    }, 30000);
  }


  adopt(cat: Cat): void {
    if (this.myCats.length < 5) {
      cat.adopt();
      this.myCats.push(cat);
      this.removeItemFromList(cat, this.strayCats)
    } else {
      alert('You do not have room for more cats in your house :(');
    }
  }

  removeItemFromList(item: any, list: Array<any>): void {
    list.splice(list.indexOf(item), 1);
  }

  shooAdoptedCat(cat: Cat): void {
    this.catsRecordService.addCatRecord(cat, 'shoo');
    this.removeItemFromList(cat, this.myCats);
    this.strayCats.push(cat);
    cat.shoo();
  }

}
