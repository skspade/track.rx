import { trpc } from '../hooks/use-trcp';

export default function IndexPage() {
  const hello = trpc.greeting.useQuery();
  if (!hello.data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Hello</h1>
      <p>{hello.data}</p>
    </div>
  );
}
