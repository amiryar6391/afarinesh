

export default function CardComment({
  _id,
  name,
  family,
  email,
  phone,
  message,
  onDelete,
}) {



  const deleteHandler = async () => {
   
    const res = await fetch("/api/comments", {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status == 200) {
      onDelete(_id);
    }
  
}
  

  return (
    <div className=" relative border-t rounded-md p-3">
      <p className=" text-gray-500">
        <span className=" font-iransB text-black">نام:</span>
        {name}
      </p>
      <p className=" mt-2 text-gray-500">
        <span className=" font-iransB text-black">نام خانوادگی:</span>
        {family}
      </p>
      <p className=" mt-3 text-gray-500">
        <span className=" font-iransB text-black">تلفن:</span>
        {phone}
      </p>
      <p className=" mt-3 text-gray-500">
        <span className=" font-iransB text-black">ایمیل:</span>
        {email}
      </p>
      <p className=" mt-3 text-gray-500">
        <span className=" font-iransB text-black">پیام:</span>
        {message}{" "}
      </p>

      <button
        onClick={deleteHandler}
        className=" mt-3 border p-2 bg-[#46533B] text-white rounded-2xl absolute bottom-0 left-0"
      >
        پاک کردن
      </button>
    </div>
  );
}
