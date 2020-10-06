import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class Event {
  constructor(
    public eventId: EventId,
    public location: string,
    public endDate: Date,
    public link: string
  ) { }
}

export class EventId {
  constructor(
    public name: string,
    public startDate: Date
  ) {}
}

export class EventDTO {
  constructor(
    public name: string,
    public location: string,
    public startDate1: string,
    public startDate2: string,
    public endDate1: string,
    public endDate2: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  private urlBackEnd = 'http://localhost:8080/';

  // public getEvents() {
  //   return this.httpClient.get<Event[]>(this.urlBackEnd + 'api/events');
  // }

  // public getEventsSortedByName(name) {
  //   return this.httpClient.get<Event>('http://localhost:8080/api/events' + '/?sort=' + name );
  // }

  // public getEventsSortedByLocation(location) {
  //   return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?sort=' + location );
  // }

  // public getEventsByName(name) {
  //   return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?username=' + name );
  // }

  // public getEventsByLocation(location) {
  //   return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?username=' + location );
  // }

  public getEventsByDTO(eventDTO: EventDTO) {
    return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?name=' + eventDTO.name + '&location='
    + eventDTO.location + '&startDateGt=' + eventDTO.startDate1 + '&startDateLt=' + eventDTO.startDate2 + '&endDateGt='
    + eventDTO.endDate1 + '&endDateLt=' + eventDTO.endDate2 );
  }

  public getEvents(sortBy = 'eventId.name', ascending = 'asc') {
    return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?sort=' + sortBy + ',' + ascending);
  }

  public getEventsByDTOSorted(eventDTO: EventDTO, sortBy = 'eventId.name', ascending = 'asc') {
    return this.httpClient.get<Event[]>('http://localhost:8080/api/events' + '/?name=' + eventDTO.name + '&location='
    + eventDTO.location + '&startDateGt=' + eventDTO.startDate1 + '&startDateLt=' + eventDTO.startDate2 + '&endDateGt='
    + eventDTO.endDate1 + '&eventDateLt=' + eventDTO.endDate2 + '&sort=' + sortBy + ',' + ascending);
  }
}
