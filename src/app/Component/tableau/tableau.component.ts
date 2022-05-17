import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {QCM} from "../../Modeles/QCM";
import {QcmService} from "../../Services/qcm.service";

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  qcms: QCM[] = [];
  qcm = <QCM>{};
  dataSource!: MatTableDataSource<QCM>;
  displayedColumns: string[] = ['name', 'modify', 'mark'];
  constructor(private service: QcmService) {
  }

  ngOnInit(): void {
    this.qcm.name = "QCM1";
    this.qcm.id = 1;
    this.qcms.push(this.qcm);

    this.service.getQCMFromUser(1).subscribe(r => {
      this.qcms = r;
      this.qcms.forEach(each => {
        this.dataSource = new MatTableDataSource<QCM>(this.qcms)
      })
    })
  }
  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
