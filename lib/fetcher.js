export const fetcher = async (url) => {
    console.log({url});
    
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};
