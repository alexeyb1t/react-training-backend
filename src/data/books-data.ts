import { Book } from '../models/book';
import { BookType } from '../models/book-type';

export const booksData: Book[] = [{
  id: 1,
  image: '/images/godfather.jpg',
  title: 'Godfather',
  description: `With its brilliant and brutal portrayal of the Corleone family,
      The Godfather burned its way into our national consciousness.
      This unforgettable saga of crime and corruption, passion and loyalty continues to
      stand the test of time, as the definitive novel of the Mafia underworld.\n`,
  price: 100,
  type: BookType.hardcover
}, {
  id: 2,
  image: '/images/shantaram.jpg',
  title: 'Shantaram: A Novel',
  description: `Shantaram is narrated by Lin, an escaped convict with a false
      passport who flees maximum security prison in Australia
      for the teeming streets of a city where he can disappear.`,
  price: 100,
  type: BookType.hardcover
}, {
  id: 3,
  image: '/images/harry-potter.jpg',
  title: 'Harry Potter and the Sorcerer\'s Stone',
  description: `Harry Potter has no idea how famous he is. That's because he's being
      raised by his miserable aunt and uncle who are terrified Harry will learn
      that he's really a wizard, just as his parents were. But everything changes
      when Harry is summoned to attend an infamous school for wizards, and he begins
      to discover some clues about his illustrious birthright.`,
  price: 100,
  type: BookType.hardcover
}, {
  id: 4,
  image: '/images/romeo-and-juliet.jpg',
  title: 'The Tragedy of Romeo and Juliet',
  description: `Romeo and Juliet is a tragedy written by William Shakespeare early
     in his career about two young star-crossed lovers whose deaths ultimately
     reconcile their feuding families. It was among Shakespeare's most popular plays
     during his lifetime and along with Hamlet, is one of his most frequently performed plays.`,
  price: 100,
  type: BookType.hardcover
}];
