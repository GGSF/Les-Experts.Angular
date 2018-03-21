import { Component, OnInit, ViewChild } from '@angular/core';
import { Case } from '../../../model/case';
import { AffaireService } from '../../../controller/affaire.service';
import { CaseService } from '../../../controller/case.service';
import {MatTableDataSource, MatPaginator} from '@angular/material';


@Component({
  selector: 'app-table-case',
  templateUrl: './table-case.component.html',
  styleUrls: ['./table-case.component.css']
})
export class TableCaseComponent implements OnInit {
  caseColumns = ['date', 'name', 'description', 'button'];
  caseSource;
  errText: string;

  constructor(public affaireService: AffaireService, private caseService: CaseService) { }

  ngOnInit() {
    this.caseService.getCases().subscribe(
      cases => this.caseSource = new MatTableDataSource(cases),
      err => this.errText = 'La requête a échouée'
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.caseSource.filter = filterValue;
  }

  selectAffaire(row) {
    this.affaireService.selectAffaire(row);
  }
}


