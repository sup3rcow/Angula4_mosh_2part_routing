import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*
    // kada si siguran da user klikom ide na neku drugu komponentu
    // parametar mozes saznati direkt preko paramMap objekta a ne preko observable-a
    // u slucaju da se route paramtetar promijeni to neces znati..
    // jer nemas observable
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    */

    // kada user klikom svjezava podatke unutar komponente
    // tada koristi observable(istanca komponente ostaje ista, a li se podaci unutar nje mijenjaju)
    this.route.paramMap
    .subscribe(params => {
      let id = +params.get('id'); // '+' konvertuje string u number
      console.log(id);
      console.log(params.get('username'));
    });
  }

}
