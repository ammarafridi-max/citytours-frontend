const BASE_URL = process.env.REACT_APP_BACKEND_URL;

async function fetchAllBlogs() {
  const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blogs`);
  if (!res.ok) console.log("Error fetching data");
  return res.json();
}

export { fetchAllBlogs };
