const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export async function fetchAllTours() {
  const res = await fetch(`${BASE_URL}/tours`);
  if (!res.ok) throw new Error("Could not fetch tours");
  return res.json();
}
