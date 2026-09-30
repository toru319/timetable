export async function readJson(path) {
  const response = await fetch(new URL('../' + path, import.meta.url), {cache:'no-cache'});
  if (!response.ok) throw new Error('データを読み込めませんでした。');
  return response.json();
}
export function creditTotal(semester, user) {
  const ids = new Set(semester.schedules[user].map(s => s.courseId));
  const courses = semester.courses.filter(c => ids.has(c.id));
  return {total:courses.reduce((n,c)=>n+(c.credits ?? 0),0),unknown:courses.filter(c=>c.credits == null).length,count:courses.length};
}
