import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() totalCount: number;
  @Input() pageSizeOptions: number[];
  @Input() pageNumber: number;
  @Input() pageEvent: any;
  pageSize: number = 15;

  constructor() {}

  ngOnInit(): void {}

  onPageChanged(event) {
    console.log(event.target.value);
  }
}
