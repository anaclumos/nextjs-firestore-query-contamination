import { firestore } from "../count";

export default async function Page() {
  const res = await firestore({ withNextOptions: false });
  return <div>{JSON.stringify(res)}</div>;
}
