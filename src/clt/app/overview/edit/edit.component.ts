import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

import { RestService } from '../../rest.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    key: string;
    logId: string;
    timelog:any = [];
    value:any;

  constructor(
        public rest:RestService,
        public route: ActivatedRoute,
        private dialogRef: MatDialogRef<EditComponent>, 
        private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap : ParamMap) =>{
        if (paramMap.has('logid')){
            this.key = paramMap.get('key');
            this.logId = paramMap.get('logid');
            this.timelog = this.rest.getLog(this.key,this.logId);
        }else{
          this.logId = null;
        }
    });
  }

  onAddLog(form: NgForm) {
      if (form.invalid) {
          return;
      }
    this.rest.storeLog(this.key, form.value).subscribe((result) => {
      this.router.navigate([this.key+'/logs/']);
    }, (err) => {
      console.log(err);
    });
  }
  closeEdit(){
        this.dialogRef.close();
    }
}