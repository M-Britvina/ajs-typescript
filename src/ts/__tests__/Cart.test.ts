import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add to cart', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(3, "Мстители", 300, "The avengers", "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  
  expect(cart.items.length).toBe(3);
  expect(cart.items[0]).toEqual(book);
  expect(cart.items[1]).toEqual(musicAlbum);
  expect(cart.items[2]).toEqual(movie);

});

test('calculate cost', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(3, "Мстители", 300, "The avengers", "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  
  expect(cart.calculateCost()).toBe(3200);

});

test('calculate discounting cost', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(3, "Мстители", 300, "The avengers", "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  
  expect(cart.calculateCostWithDiscount(10)).toBe(2880);
});

test('remove item', () => {
  const cart = new Cart();

  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const movie = new Movie(300, "Мстители", 300, "The avengers", "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], 137);
  
  cart.add(book);
  cart.add(musicAlbum);
  cart.add(movie);
  
  expect(cart.items.length).toBe(3);
  cart.remove(300);
  expect(cart.items.length).toBe(2);
  expect(cart.items.indexOf(movie)).toBe(-1);
});
