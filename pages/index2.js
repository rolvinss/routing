import useSwr from 'swr'
import Link from 'next/link'
import Comp from "./../components/Comp"
const fetcher = async (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/some', fetcher)
  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {JSON.stringify(data)}
      {/* {data.map((user) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            <a>{`User ${user.id}`}</a>
          </Link>
        </li>
      ))} */}
      <Comp />
    </ul>
  )
}
