import { ContactFormValues } from "@/types";

export type Observer = {
  update: (data: ContactFormValues) => Promise<void>;
};

class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  async notify(data: ContactFormValues) {
    await Promise.all(this.observers.map((observer) => observer.update(data)));
  }
}

export const messageNotifier = new Subject();
