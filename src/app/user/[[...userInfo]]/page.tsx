export default async function ProductDetails({
  params,
}: {
    params: Promise<{ userInfo: string[]}>;
}) {
    const {userInfo} = await params;
    console.log(userInfo)
    // const product = 
  return <div>{JSON.stringify(userInfo, null, 2)}</div>;
}
