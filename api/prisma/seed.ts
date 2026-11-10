import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  await prisma.review.deleteMany();
  await prisma.book.deleteMany();
  await prisma.genre.deleteMany();
  await prisma.user.deleteMany();

  // 1. Create 4 Genres (Rubric requires 4+)
  const fiction = await prisma.genre.create({
    data: { name: "Fiction", slug: "fiction" },
  });
  const science = await prisma.genre.create({
    data: { name: "Science", slug: "science" },
  });
  const history = await prisma.genre.create({
    data: { name: "History", slug: "history" },
  });
  const technology = await prisma.genre.create({
    data: { name: "Technology", slug: "technology" },
  }); // 👈 NEW
  console.log(`✅ Created 4 genres`);

  // 2. Create 15 Books (Rubric requires 15+)
  await prisma.book.createMany({
    data: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isbn: "9780743273565",
        totalCopies: 5,
        availableCopies: 5,
        genreId: fiction.id,
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "9780061120084",
        totalCopies: 3,
        availableCopies: 3,
        genreId: fiction.id,
      },
      {
        title: "1984",
        author: "George Orwell",
        isbn: "9780451524935",
        totalCopies: 4,
        availableCopies: 4,
        genreId: fiction.id,
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isbn: "9780141439518",
        totalCopies: 2,
        availableCopies: 2,
        genreId: fiction.id,
      },
      {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        isbn: "9780553380163",
        totalCopies: 3,
        availableCopies: 3,
        genreId: science.id,
      },
      {
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        isbn: "9780198788607",
        totalCopies: 2,
        availableCopies: 2,
        genreId: science.id,
      },
      {
        title: "Cosmos",
        author: "Carl Sagan",
        isbn: "9780345539434",
        totalCopies: 4,
        availableCopies: 4,
        genreId: science.id,
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        isbn: "9780062316097",
        totalCopies: 5,
        availableCopies: 5,
        genreId: history.id,
      },
      {
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond",
        isbn: "9780393354324",
        totalCopies: 3,
        availableCopies: 3,
        genreId: history.id,
      },
      {
        title: "The Silk Roads",
        author: "Peter Frankopan",
        isbn: "9781101946329",
        totalCopies: 2,
        availableCopies: 2,
        genreId: history.id,
      },
      // 5 NEW BOOKS TO HIT THE 15+ REQUIREMENT
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        isbn: "9780132350884",
        totalCopies: 4,
        availableCopies: 4,
        genreId: technology.id,
      },
      {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        isbn: "9780135957059",
        totalCopies: 3,
        availableCopies: 3,
        genreId: technology.id,
      },
      {
        title: "Design Patterns",
        author: "Erich Gamma",
        isbn: "9780201633610",
        totalCopies: 2,
        availableCopies: 2,
        genreId: technology.id,
      },
      {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        isbn: "9780262033848",
        totalCopies: 3,
        availableCopies: 3,
        genreId: technology.id,
      },
      {
        title: "Code Complete",
        author: "Steve McConnell",
        isbn: "9780735619678",
        totalCopies: 2,
        availableCopies: 2,
        genreId: technology.id,
      },
    ],
  });
  console.log(`✅ Created 15 books`);

  // 3. Create Users with Roles
  await prisma.user.createMany({
    data: [
      { email: "alice@example.com", name: "Alice Johnson", role: "PATRON" },
      { email: "bob@example.com", name: "Bob Smith", role: "PATRON" },
      // This is our VIP Librarian for testing
      { email: "librarian@example.com", name: "Ms. Dewey", role: "LIBRARIAN" },
    ],
  });
  console.log(`✅ Created 3 users (including 1 Librarian)`);

  // 4. Create Reviews (Stretch Goal)
  const gatsby = await prisma.book.findFirst({
    where: { title: "The Great Gatsby" },
  });
  const cleanCode = await prisma.book.findFirst({
    where: { title: "Clean Code" },
  });
  const alice = await prisma.user.findFirst({
    where: { email: "alice@example.com" },
  });
  const librarian = await prisma.user.findFirst({
    where: { email: "librarian@example.com" },
  });

  await prisma.review.createMany({
    data: [
      {
        rating: 5,
        comment: "An absolute masterpiece!",
        bookId: gatsby!.id,
        userId: alice!.id,
      },
      {
        rating: 5,
        comment: "Every developer should read this.",
        bookId: cleanCode!.id,
        userId: librarian!.id,
      },
    ],
  });
  console.log(`✅ Created 2 reviews`);

  console.log("🎉 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
