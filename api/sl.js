export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const API_KEY = process.env.SALESLOFT_API_KEY;
  if (!API_KEY) return res.status(500).json({ error: 'SALESLOFT_API_KEY not configured' });

  // Path comes as double-underscore separated e.g. v2__me.json or v2__conversations__calls
  const rawPath = (req.query.p || '').replace(/__/g, '/');

  // Forward all other query params
  const forwardParams = new URLSearchParams();
  for (const [key, value] of Object.entries(req.query)) {
    if (key !== 'p') {
      if (Array.isArray(value)) value.forEach(v => forwardParams.append(key, v));
      else forwardParams.append(key, value);
    }
  }

  const slUrl = `https://api.salesloft.com/${rawPath}${forwardParams.toString() ? '?' + forwardParams.toString() : ''}`;

  try {
    const slResp = await fetch(slUrl, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const data = await slResp.json();
    if (!slResp.ok) return res.status(slResp.status).json({ error: data });
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
