type Params = {
  params: {
    id: string
  }
}
const Page = ({ params }: Params) => {
  console.log(params)

  return (
    <h1>Car id</h1>
  )
}

export default Page
