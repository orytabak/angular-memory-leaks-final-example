import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cat} from "../cat.model";
import {FormControl, FormGroup} from "@angular/forms";
import {CatsRecordService} from "../cats-record.service";

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {

  public timeToLeave = 20;
  public isEdit = false;
  public catNameForm: FormGroup;

  @Input() cat: Cat;

  @Output() onAdopt: EventEmitter<any> = new EventEmitter();
  @Output() onShoo: EventEmitter<any> = new EventEmitter();

  constructor(private catsRecordService: CatsRecordService) {
  }

  ngOnInit(): void {
    this.cat.catCard = this;
    setInterval(() => {
      if (this.cat.isHungry && !this.cat.isStrayCat) {
        if (this.timeToLeave === 0) {
          this.onShoo.emit();
        } else {
          this.timeToLeave--;
        }
      }
    }, 1000);
  }

  public onCatHungry(): void {
    this.timeToLeave = 20;
  }

  public editCatName(): void {
    this.isEdit = true;
    this.catNameForm = new FormGroup({
      name: new FormControl(Cat.getRandomCatName())
    });
  }

  public saveCatName(): void {
    this.cat.giveName(this.catNameForm.value.name);
    this.catNameForm.reset();
    this.isEdit = false;
  }

  public adopt(): void {
    this.catsRecordService.addCatRecord(this.cat, 'adopt');
    this.onAdopt.emit();
  }

}
