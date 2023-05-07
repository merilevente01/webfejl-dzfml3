import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, Validators, FormGroup } from '@angular/forms';
import { Comment } from '../../../shared/models/Comment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit{

  @Input() imageInput: any;

  commentObject: any = {};
  comments: Array<any> = [];
  loadedImage?: string;


  commentsForm = this.createForm({
    username: '',
    comment: '',
    date: new Date()
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  createForm(model: Comment) {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }

  addComment() {
    if (this.commentsForm.valid) {
      if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
        this.commentsForm.get('date')?.setValue(new Date());

        // SPREAD OPERATOR
        this.comments.push({ ...this.commentsForm.value });


        // Object
        // this.comments.push(Object.assign({}, this.commentObject));

        this.router.navigateByUrl('/teams/successful/' + this.commentsForm.get('username')?.value);
        //this.router.navigateByUrl('/races');

      }
    }
  }

}
