
const BookshelfPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div>Bookshelf Page  {params.id}</div>
  )
}

export default BookshelfPage;
