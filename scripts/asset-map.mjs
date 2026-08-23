// UUID -> semantic asset name for the L2 Arena bundle.
// Partner logos are numbered by DOM order and filled in below by buildPartnerMap().

export const NAMED = {
  '0ba1a797-90f1-4484-b59b-de4124766825': 'icon',              // 801x800 favicon
  '9cff01ee-39d2-4818-abf6-92820de364b7': 'bg-arcs',           // 1006x11111 page background
  '4718dba0-eebe-425a-9266-ab57b3406487': 'logo-lod-municipality',
  'cf4b3792-2f10-4163-b4f8-cc5d956cfb00': 'logo-calcalit-lod',
  'd4ba5ae1-81fc-4db3-8fdc-ad19a89da7f5': 'logo-l2',
  'ac5f33a5-3780-47f9-91e0-b6e67886d9b5': 'hero-render',
  'd3d81533-57e1-4d93-86c4-bd2efc97bcac': 'frame-gold',        // border-image, slice 60
  '87a2dd6e-e701-49d8-b077-18423ca3a7ef': 'frame-gold',        // byte-identical duplicate, slice 110
  '09d14e85-2358-4e40-931d-540f2ae2a9ef': 'quote-mark',
  '25953612-70fd-4ef4-88f8-5a198d025fb6': 'quote-ring',
  'a0e9c6d7-16ea-4c72-b594-e1f85b46d97e': 'quote-mayor',
  '72ff6253-d8b9-41f5-b207-c2e0bce715dd': 'quote-ceo',
  '5781d82c-ee8e-42a0-aeb7-135e94a0ed73': 'opp-ring',
  'def288a7-a8d5-41e0-b8b4-812fef277d4e': 'timeline-he-desktop',
  '833e1a3d-553c-4296-8efa-5e9ab06826d6': 'timeline-he-mobile',
  'b490475c-1f10-49d3-b33b-fad7e3943c0c': 'timeline-en-desktop',
  '51a5da09-af5f-4d87-8f6a-c27aa6f4acbf': 'timeline-en-mobile',
  '3ec04d07-f210-4dac-b4ac-a015d125e9c3': 'deadline-bubble',
};

// Assets that exist in the bundle but are not part of the rebuilt site.
export const SKIP = new Set([
  '63b157cf-53cd-440b-9e9e-775a6d267485', // dc-runtime
  '4a048b24-c0da-44e9-99d7-6100b507fa30', // image-slot web component
  '425ac247-5892-40c6-b512-16ca9952813d', // react UMD
  '600020ee-1d7f-4d98-ba42-6b6bddecfabc', // react-dom UMD
  '0dc75dc4-8b5e-47e6-8f7d-22f7fc969b8b', // Assistant hebrew woff2  -> next/font/google
  '4b794492-c904-4748-9222-6e9052e38721', // Assistant latin-ext woff2
  'ca9753a5-38d2-40fc-ae97-326223bdafd9', // Assistant latin woff2
]);

/** Partner logos in DOM order (template.html lines 737-803) -> partner-01..partner-60 */
export function buildPartnerMap(template) {
  const region = template.split('\n').slice(730, 806).join('\n');
  const uuids = [];
  const re = /<img src="([0-9a-f-]{36})"[^>]*alt="logos\d*"/g;
  let m;
  while ((m = re.exec(region))) if (!uuids.includes(m[1])) uuids.push(m[1]);
  const map = {};
  uuids.forEach((u, i) => { map[u] = `partner-${String(i + 1).padStart(2, '0')}`; });
  return map;
}
