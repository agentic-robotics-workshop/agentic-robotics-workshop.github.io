// Downloads all assets from aiagentbehavior.com into public/.
// Batched (4 at a time) with error handling.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

const PEOPLE = [
  'colin_camerer.jpg', 'diyi_yang.jpg', 'dawn_song.jpg', 'sophia_kazinnik.jpg',
  'kawin_ethayarajh.jpg', 'natasha_jaques.jpg',
  'manuel_cherep.jpg', 'hao_zhu.jpg', 'yanzhe_zhang.jpg', 'david_han.jpeg',
  'benjamin_manning.jpg', 'isotta_magistrali.jpeg', 'saab_mansour.jpg',
  'weronika_lajewska.jpeg', 'pattie_maes.jpg', 'nikhil_singh.jpg',
];

const assets = [
  ...PEOPLE.map((f) => ({
    url: `https://www.aiagentbehavior.com/people/${f}`,
    out: `public/people/${f}`,
  })),
  // Sponsor logos (external sources) -> normalize to local svg files
  { url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Anthropic_logo.svg', out: 'public/logos/anthropic.svg' },
  { url: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg', out: 'public/logos/google.svg' },
  { url: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/OpenAI_logo_2025_(wordmark).svg', out: 'public/logos/openai.svg' },
];

async function download({ url, out }) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const dest = join(ROOT, out);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`ok  ${out}  (${buf.length} bytes)`);
    return true;
  } catch (err) {
    console.error(`FAIL ${out}  ${err.message}`);
    return false;
  }
}

async function run() {
  const batchSize = 4;
  for (let i = 0; i < assets.length; i += batchSize) {
    await Promise.all(assets.slice(i, i + batchSize).map(download));
  }
}

run();
