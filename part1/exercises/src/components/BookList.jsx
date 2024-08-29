export default function BookList() {
   let pageTitle = "Books I have read this month";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/6/6e/Half_Girlfriend_Poster.jpg";
   let book2 = "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982134488/think-like-a-monk-9781982134488.jpg";
   let book3 = "https://images.booksense.com/images/172/088/9781638088172.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Half Girlfriend" />
         <img src={book2} alt="Atomic Habits" />
         <img src={book3} alt="8 Rules of Love" />
      </div>      
   );
}