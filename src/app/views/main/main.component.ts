import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy {
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;
  public isOpen: boolean = false;


  constructor(private modalService: NgbModal) {
    this.observable = new Observable(observer => {
      const timeout = setTimeout(() => {
        observer.next(true);
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(timeout);
        }
      }
    });
  }

  ngOnInit(): void {
    this.accordionInit();

    this.subscription = this.observable.subscribe((param: boolean) => this.isOpen = param);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  accordionInit(): void {
    $("#accordion").accordion({
      heightStyle: 'content',
      collapsible: true
    });
  }

  closePopup(): void {
    this.isOpen = false;
  }
}
