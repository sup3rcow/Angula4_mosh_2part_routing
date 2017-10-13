import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable'; // ovo moras kako se mogao odjednom 'subscribe-ati' na vise podataka u strimu
import 'rxjs/add/observable/combineLatest';

// ovo dodas kako bi mogao return od Observable
// da bude array objekata, a ne any
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
            // let id = combined[0].get('id'); // npr da je ruta ustvari neki id
            let page = combined[1].get('page');
            let order = combined[1].get('order');
            console.log(page + '-' + order);

            // this.service.getAll({ id: id, page: page, order: order});
            return this.service.getAll();
          })
    .subscribe(followers => this.followers = followers);
  }
}
