/**
 * Image sources. Swap any of these for your own files, e.g. "/images/people/john.jpg"
 * (put them in /public/images). If a URL fails to load, the UI falls back to the
 * generated illustration, so nothing ever shows a broken image.
 */
const person = (kind: "men" | "women", n: number) => `https://randomuser.me/api/portraits/${kind}/${n}.jpg`;
const house = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=96&h=96&q=70`;

export const PEOPLE = {
  profile: person("men", 22),
  john: person("men", 32),
  jessica: person("women", 44),
  evan: person("men", 51),
  jack: person("men", 75),
  emily: person("women", 65),
  a: person("women", 68),
  b: person("men", 12),
};

export const PROPERTIES = {
  maplewood: house("photo-1568605114967-8130f3a36994"),
  serenity: house("photo-1512917774080-9991f1c4c750"),
  rosehill: house("photo-1564013799919-ab600027ffc6"),
  skyline: house("photo-1545324418-cc1a3fa10c00"),
};
