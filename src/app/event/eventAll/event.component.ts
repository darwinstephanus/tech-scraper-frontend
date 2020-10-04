import { EventDTO, EventService } from '../../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Event[];
  sortBy: string;

  constructor( private eventService: EventService ) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.events = response;
  }

  getEventsSorted() : void{
    this.eventService.getEventsSorted(this.sortBy)
      .subscribe(
        data => this.handleSuccessfulResponse(data),
    );
  }

}
