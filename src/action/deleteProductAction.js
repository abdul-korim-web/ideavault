"use server"
const handleDeleteAction = async() => {
    try {
        // setPending(true)
        const {data:tokenData} = await authClient.token()
    const token = tokenData?.token
    const deleteData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/product/${productId}`,{
        method:"DELETE",
    headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
  const res = await deleteData.json();

if (res.success) {
  toast.success(res.message);
  revalidateTag("products")
} else {
  toast.error(res.message);
}
    } catch (error) {
        console.log(error);
    } finally{
        // setPending(false)
    }
  };