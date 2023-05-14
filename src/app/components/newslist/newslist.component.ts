import { Component, ElementRef, ViewChild } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent {
  @ViewChild('myModal', {static: false}) myModal!: ElementRef;
  News: any = [];
  dialog_data: any = '';
 
  constructor(private crudService: CrudService ) {}
   
  ngOnInit(): void {
    this.crudService.GetNews().subscribe(res => {
      this.News = res;
    });
  }

  openModal(param: any) {
    this.dialog_data = param;
    this.myModal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.dialog_data = '';
    this.myModal.nativeElement.style.display = 'none';
  }

  UpdateStatus(item: any) {
    const ChangeStatus = item.Status ? true : false;
    this.crudService.UpdateNew(item, ChangeStatus).subscribe(res => {});
  }
}
