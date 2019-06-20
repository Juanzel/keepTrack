import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    private mode = 'logout';
    private key: string;
    private userId: number;
    value:any;

    constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) {}
    
    ngOnInit(){
    this.route.paramMap.subscribe((paramMap: ParamMap) =>{
        if (paramMap.has('key')){
            this.mode = 'login';
            this.key = paramMap.get('key');
        }else{
          this.mode = 'logout';
          this.key = null;
        }
    });
  }

    onLogin(form: NgForm){
        if (form.invalid){
            return;
        }

        this.rest.getLogin(this.value.key).subscribe((result) =>{
            this.router.navigate([result+'/logs']);
            console.log(result);
        }, (err)=>{
            console.log(err);
        });
   }
}
