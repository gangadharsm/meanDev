import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/issue.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private issueService: IssueService) {
    this.issueService.getIssues().subscribe(res=>{
      console.log(res)
    })
   }

  ngOnInit() {
  }

}
