import { Publisher, OrderCreatedEvent, Subjects } from '@burnstickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
