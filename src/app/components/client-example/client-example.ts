import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-example',
  imports: [],
  templateUrl: './client-example.html',
  styleUrl: './client-example.scss'
})
export class ClientExample implements OnInit {
    ngOnInit(): void {
      console.error("hello");
      console.error(window.name)
    }
}
