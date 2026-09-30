const weekdays=['月','火','水','木','金','土'];
export function element(tag, text, className) {const e=document.createElement(tag);if(text!=null)e.textContent=text;if(className)e.className=className;return e;}
export function renderTimetable(semester,user,settings,onSelect) {
 const map=new Map(semester.courses.map(c=>[c.id,c]));
 const entries=semester.schedules[user].filter(s=>s.day!=null).map(s=>({...s,course:map.get(s.courseId)}));
 entries.push(...(semester.events?.[user]||[]).map(e=>({...e,course:e.courseId?map.get(e.courseId):null})));
 const head=document.querySelector('thead');head.replaceChildren();const hr=element('tr');hr.append(element('th','時限'));weekdays.forEach(d=>hr.append(element('th',d)));head.append(hr);
 const body=document.querySelector('tbody');body.replaceChildren();
 settings.periods.forEach(([start,end],index)=>{const row=element('tr');const time=element('th');time.scope='row';time.append(element('strong',index+1),element('small',start),element('small',end));row.append(time);
 for(let day=1;day<=6;day++){const cell=element('td');entries.filter(e=>e.day===day&&e.period===index+1).forEach(e=>{const b=element('button',null,'card '+(e.kind==='personal'?'personal':e.kind==='study'||['remote','ondemand'].includes(e.course?.mode)?'remote':'lesson'));b.append(element('span',e.title||e.course.title,'card-title'),element('span',e.kind==='study'?'学習予定':e.room||'場所未確認','room'));b.setAttribute('aria-label',`${weekdays[day-1]}曜${index+1}限 ${e.title||e.course.title}`);b.onclick=()=>onSelect(e);cell.append(b);});row.append(cell);}body.append(row);});
 const outside=document.getElementById('outside-list');outside.replaceChildren();const seen=new Set();semester.schedules[user].filter(s=>s.day==null||map.get(s.courseId).mode==='ondemand').forEach(s=>{if(seen.has(s.courseId))return;seen.add(s.courseId);const c=map.get(s.courseId);const b=element('button',null,'outside-card');b.append(element('span',c.title),element('small',c.teacher+'　›'));b.onclick=()=>onSelect({...s,course:c});outside.append(b);});if(!seen.size)outside.append(element('p','登録されている科目はありません。','empty'));
}
export function showDetail(entry){const c=entry.course;const body=document.getElementById('detail-body');body.replaceChildren(element('h2',entry.title||c.title));
 const fields=c?[['担当教員',c.teacher||'未確認'],['場所',entry.room||'時間の指定なし'],['単位',c.credits==null?'未確認':c.credits+'単位'],['授業内容',c.summary||'未登録'],['評価方法',c.grading||'未確認'],['注意事項',c.notes],['情報の確認',c.sourceStatus+(c.verifiedAt?' ・ '+c.verifiedAt:'')]]:[['場所',entry.room||'未登録'],['区分','個人の予定（単位集計の対象外）']];
 if(entry.kind==='study')fields.unshift(['予定について','本人が置いた学習予定です。大学が指定した授業時刻ではありません。']);
 const dl=element('dl');fields.filter(([,v])=>v).forEach(([k,v])=>dl.append(element('dt',k),element('dd',v)));body.append(dl);
 if(c?.sourceUrl){const a=element('a','公式シラバスを開く ↗','source');a.href=c.sourceUrl;a.target='_blank';a.rel='noopener noreferrer';body.append(a);}document.getElementById('detail').showModal();}
