import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Forms</h1>
      <Link href="/forms/create">
        <button className="btn btn-success mt-4">Create Form</button>
      </Link>
    </div>
  )
}
