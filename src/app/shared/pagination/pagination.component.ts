import { Component, OnInit } from "@angular/core";
import { PagerService } from "src/app/services/pagerservice.service";



export interface Pagination {
    pageLength: number,
    pageNumber: number,
    SortField: string,
    TotalRecords: number,
    SortOrder: string,
}

@Component({
    template: ''
  })
export class PaginationComponent implements OnInit{

pager: any = {};
pagedItems: any[];
SearchFlag: boolean;
PaginationObject: Pagination;


    constructor(private service: PagerService )
    {
    }

    ngOnInit() {
    }

    setPage(page: number) {

        if ((page == 0) && (this.PaginationObject.TotalRecords > 0)) { page = 1;}
        if (page < -1 || page > this.pager.totalPages) {
            return;
        }
        if (page == -1)
        { this.PaginationObject.pageLength = 999999999; }
        else { this.PaginationObject.pageLength = 10; }
        this.PaginationObject.pageNumber = page;
        if (page == -1) { this.pager = this.service.getPager(this.PaginationObject.TotalRecords, this.PaginationObject.TotalRecords, -1); }
        else { this.pager = this.service.getPager(this.PaginationObject.TotalRecords, page); }
    }
}