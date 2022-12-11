import { useRouter } from 'next/router';

export default function Entry() {
  const router = useRouter();
  const { id } = router.query;

  return <div>
    <div className="card text-center">
      <h1 className="text-5xl">Welcome!</h1>
      <h2 className="text-2xl my-2">Begin your entry by clicking on the button bellow</h2>
      <button className="btn btn-success my-10" onClick={() => alert(id)}>Start</button>
    </div>
  </div>;
}
