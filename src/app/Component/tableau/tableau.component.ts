import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {QCM} from "../../QCM";

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
  constructor() {
  }

  ngOnInit(): void {
    this.qcm.name = "QCM1";
    this.qcm.id = 1;
    this.qcms.push(this.qcm);
    this.dataSource = new MatTableDataSource<QCM>(this.qcms)
  }
  applyFilter(event: Event) {
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
