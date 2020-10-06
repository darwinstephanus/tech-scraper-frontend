import { EventDTO, EventService } from '../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Event[];
  sortBy: string = 'eventId.name';
  order: string = 'asc';

  constructor(private router: Router, private eventService: EventService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        const { sortBy, order } = params;
        this.sortBy = sortBy;
        this.order = order;
        this.fetchEvents();
      }
    );

    //default
    if(this.sortBy == null){
      this.sortBy = 'eventId.name';
      this.order = 'asc';
    }
  }

  handleSuccessfulResponse(response) {
    this.events = response;
  }

  fetchEvents(): void{
    // console.log('sortBy: ', this.sortBy);
    // console.log('order: ',this.order);
    this.eventService.getEvents(this.sortBy, this.order).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  sortEvents(sortBy, order): void {
    this.sortBy = sortBy;
    this.order = order;
    this.fetchEvents();

    this.router.navigate(
      [], {
        relativeTo: this.activatedRoute,
        queryParams: { sortBy, order  },
        queryParamsHandling: 'merge'
      });
  }
}
