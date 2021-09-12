import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GiphyserviceService } from 'src/app/services/giphyservice.service';
import { PagerService } from 'src/app/services/pagerservice.service';
import { PaginationComponent } from 'src/app/shared/pagination/pagination.component';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss'],
  providers: [GiphyserviceService,PagerService]
})
export class GiphyComponent extends PaginationComponent implements OnInit {
  
  itemDetailList: any = []
  dishName: any;
  pageNumber:number = 1;
  mymodel: any;

  constructor(
    private giphyservice: GiphyserviceService,public pagerservice: PagerService
  ) { 
    
    super(pagerservice);
  }

  giphyName: string;
  ngOnInit(): void {


this.getGiphyListDetail(1)

  
  }

  searchGif() {
    console.log(" this.",this.giphyName)
    if (this.giphyName) {

      this.giphyservice.searchGif(this.giphyName).subscribe((data: any) => {
      console.log('data.catalogue :', data);
      this.itemDetailList = data.data;
      this.PaginationObject.TotalRecords = this.itemDetailList.length > 0 ? data.pagination.total_count : 0;

      console.log('this.itemDetailList:', this.itemDetailList);
      
      
      
    });

    }


    console.log(" this.itemDetailList", this.itemDetailList)


  }

  
  getGiphyListDetail(page: number)
  {
    console.log("pagepagepage",page)
      this.pageNumber = page;
      this.PaginationObject = {
        pageLength: 10,
        pageNumber: page,
        SortField: "3",
        TotalRecords: 0,
        SortOrder: ""
    };
    
    if(page >0)
    {
      this.giphyservice.getGifList(10,page).subscribe(
        data => {
          console.log("data",data)
          
          let keys = Object.keys(data);
          this.itemDetailList = data[keys[0]];
          this.PaginationObject.TotalRecords = this.itemDetailList.length > 0 ? data.pagination.total_count : 0;
          this.setPage(page)
          console.log("foodList:::--itemDetailList", this.PaginationObject.TotalRecords);
         
       },
        err => console.log('error--' + err)
    );
    }
 }
}
