

const UserPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div>User Page {params.id}</div>
  )
}

export default UserPage;
