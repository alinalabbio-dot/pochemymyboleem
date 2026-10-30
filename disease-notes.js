(()=>{
const descriptions={
'Грипп':'Человек может резко почувствовать слабость: поднимается температура, болят мышцы, появляется кашель.',
'Муковисцидоз':'Слизь в организме становится очень густой. Человеку бывает трудно дышать и усваивать пищу.',
'Диабет 1 типа':'В крови становится слишком много сахара. Человек может часто пить, часто ходить в туалет и худеть.',
'Аллергия на арахис':'После арахиса могут появиться зуд, сыпь или отёк; иногда становится трудно дышать.',
'Цинга':'Дёсны могут кровоточить, легко появляются синяки, ранки плохо заживают.',
'Инфаркт миокарда':'Часть сердечной мышцы повреждается. Может сильно болеть или давить в груди, появляется слабость.',
'Серповидноклеточная болезнь':'Некоторые красные клетки крови меняют форму и напоминают серп. Возможны приступы боли и быстрая утомляемость.',
'Опухоль':'В организме появляется дополнительное образование из ткани. Оно может мешать работе соседних органов.',
'SCID':'Так называют группу редких болезней. Уже в младенчестве ребёнок часто и тяжело болеет, может плохо прибавлять в весе.',
'Гипотиреоз':'Человек может быстро уставать, мёрзнуть даже в тёплой комнате, чувствовать сонливость.'
};
const css=document.createElement('style');css.textContent='.token-bank:has(.disease-note){display:grid;grid-template-columns:repeat(auto-fit,minmax(215px,1fr)));gap:12px}.token-bank .disease-note{display:block;margin-top:8px;font-size:13px;line-height:1.45;font-weight:400;color:#465466}.token-bank button:has(.disease-note){text-align:left;white-space:normal;max-width:100%;padding:16px}.disease-guide{font-size:14px;color:#52616c;margin-bottom:16px}';css.textContent=css.textContent.replace('1fr)))','1fr))');document.head.append(css);
const originalSort=renderSort;
renderSort=function(l,d){originalSort(l,d);if(!l.items.some(x=>x[0]==='SCID'))return;const bank=$('#activity .token-bank');const guide=document.createElement('p');guide.className='disease-guide';guide.textContent='Незнакомое название? Под ним — короткое описание. Это проявления болезни; её причину ещё предстоит определить.';bank.before(guide);bank.querySelectorAll('[data-item]').forEach(b=>{const name=l.items[+b.dataset.item][0];if(!descriptions[name])return;const title=document.createElement('strong');title.textContent=name;const note=document.createElement('span');note.className='disease-note';note.textContent=descriptions[name];b.replaceChildren(title,note)})};
if(current().type==='sort')render();
})();
