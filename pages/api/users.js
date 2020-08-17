import axios from "axios";
// Fake users data
const users = [{ id: 1 }, { id: 2 }, { id: 3 }]

const handler = async (req, res) => {
  var to;
  to = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(to.data)
  // Get data from your database
  res.status(200).send(to.data)
}


export default handler;