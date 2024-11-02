import { auth } from "../../auth";

export const runtime = "edge";

export default async function Home() {
  const session = await auth();

  return (
    <div className="w-full text-center">
      <h1 className="text-2xl my-12">Hello World</h1>
      <div>
        {!session && (
          <div>
            <p>Hi, please log in!</p>
          </div>
        )}
        {session && (
          <div>
            <p>Hi, {session.user?.email}!</p>
            <p> You logged in. </p>
          </div>
        )}
      </div>
    </div>
  );
}
