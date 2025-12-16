import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Phone from './domain/Phone';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(3, "Мстители", 300, "The avengers", "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137));
cart.add(new Phone(4, "NonamePhone mk3", 10000, 2));

console.log(cart.items);
console.log(cart.calculateCost());
