(()=>{'use strict';const e=['JPEG','JPG','PNG'],t=['100','1','2','3'],r=['3','2','1','0'],o=['BUNGALOW','FLAT','HOUSE','PALACE'],a=[0,1e3,5e3,1e4],n=document.querySelector('.map__filters'),s=n.querySelector('#housing-features'),c=s.querySelectorAll('.map__checkbox'),i=document.querySelector('.ad-form'),u=i.querySelector('#address'),l=i.querySelector('#avatar'),d=i.querySelector('#avatar-image'),p=i.querySelector('#images'),m=i.querySelector('.ad-form__photo'),y=i.querySelector('.ad-form__reset'),h=i.querySelector('#type'),v=i.querySelector('#price'),g=i.querySelector('#timein'),f=i.querySelector('#timeout'),S=i.querySelector('#room_number'),_=i.querySelector('#capacity'),q=i.querySelector('#title'),C=(e,t)=>{e.classList.add(t+'--disabled'),Array.from(e.children).forEach((e=>{e.setAttribute('disabled','disabled')}))},E=(e,t)=>{e.classList.remove(t+'--disabled'),Array.from(e.children).forEach((e=>{e.removeAttribute('disabled')}))},b=()=>{switch(h.value){case o[1].toLowerCase():return a[1];case o[2].toLowerCase():return a[2];case o[3].toLowerCase():return a[3];case o[4].toLowerCase():return a[4]}},A=(e,t,r)=>{i.reset(),_.setCustomValidity(''),v.setCustomValidity(''),q.setCustomValidity(''),v.setAttribute('min',b()),v.setAttribute('placeholder',b()),d.src='img/muffin-grey.svg',m.innerHTML='',e.setLatLng([t,r]),setTimeout((()=>{u.value=e.getLatLng().lat.toFixed(5)+', '+e.getLatLng().lng.toFixed(5)}),0)},x=()=>{const e=document.querySelector('#error').content.querySelector('.error').cloneNode(!0);document.addEventListener('keydown',(t=>{27===t.keyCode&&e.remove()}),{ once:!0 }),document.addEventListener('click',(()=>{e.remove()}),{ once:!0 }),e.style.zIndex=400,document.querySelector('main').appendChild(e)};let k={},w={},V={},T=[];const F=L.icon({ iconUrl:'img/pin.svg',iconSize:[40,40],iconAnchor:[20,40] }),z=L.icon({ iconUrl:'img/main-pin.svg',iconSize:[52,52],iconAnchor:[26,52] }),I=(e,t,r,o)=>L.marker({ lat:e,lng:t },{ draggable:o,icon:r }),D=(e,t)=>{T&&(T.forEach((e=>{e.remove()})),T=[]),e.slice().forEach((e=>{const r=I(e.location.lat,e.location.lng,F,!1),o=t(e);r.bindPopup(o,{ keepInView:!0 }),T.push(r)})),T.forEach((e=>{e.addTo(k)}))};let P={};const U=['palace','flat','house','bungalow'],G=['Дворец','Квартира','Дом','Бунгало'],H=document.querySelector('#card').content.querySelector('.popup'),N=(e,t,r,o,a,n)=>{const s=document.createDocumentFragment();e.forEach((e=>{const o=((e,t,r)=>{const o=document.createElement(e);return t&&o.classList.add(t),o})(t,r);a&&o.classList.add('popup__feature--'+e),n&&(o.src=e,o.width=45,o.height=40,o.alt='Фотография жилья'),s.appendChild(o)})),o.innerHTML='',o.appendChild(s)},O=({ author:e,offer:t })=>{const r=H.cloneNode(!0),o=r.querySelector('.popup__avatar'),a=r.querySelector('.popup__title'),n=r.querySelector('.popup__text--address'),s=r.querySelector('.popup__text--price'),c=r.querySelector('.popup__type'),i=r.querySelector('.popup__text--capacity'),u=r.querySelector('.popup__text--time'),l=r.querySelector('.popup__features'),d=r.querySelector('.popup__description'),p=r.querySelector('.popup__photos');return e.avatar?o.src=e.avatar:o.remove(),t.title?a.textContent=t.title:a.remove(),t.address?n.textContent=t.address:n.remove(),t.price?s.textContent=t.price+' ₽/ночь':s.remove(),t.type?c.textContent=(e=>{let t=0,r='';return U.forEach(((r,o)=>{r===e&&(t=o)})),r=G[t],r})(t.type):c.remove(),t.rooms&&t.guests?i.textContent=t.rooms+' комнаты для '+t.guests+' гостей':i.remove(),t.checkin&&t.checkout?u.textContent='Заезд после '+t.checkin+', выезд до '+t.checkout:u.remove(),t.description?d.textContent=t.description:d.remove(),t.features?N(t.features,'li','popup__feature',l,!0):l.remove(),t.photos?N(t.photos,'img','popup__photo',p,!1,!0):p.remove(),r},M='any',j=['LOW','MIDDLE','HIGH'],W=[1e4,5e4],J=['0','1','2'],R=[1,2],B=document.querySelector('.map__filters'),K=B.querySelectorAll('.map__filter'),Q=B.querySelector('#housing-type'),X=B.querySelector('#housing-price'),Y=B.querySelector('#housing-rooms'),Z=B.querySelector('#housing-guests'),$=B.querySelectorAll('.map__checkbox'),ee=e=>(e=>Q.value===M||e.offer.type===Q.value)(e)&&(e=>X.value===M||(e=>{switch(X.value){case j[0].toLowerCase():return e<=W[0];case j[1].toLowerCase():return e>W[0]&&e<=W[1];case j[2].toLowerCase():return e>=W[1]}})(e.offer.price))(e)&&(e=>Y.value===M||e.offer.rooms.toString()===Y.value)(e)&&(e=>Z.value===M||(e=>{switch(Z.value){case J[0]:return e>R[1];case J[1]:return e===R[0];case J[2]:return e===R[1]}})(e.offer.guests))(e)&&(e=>{const t=[];$.forEach((e=>{e.checked&&t.push(e.value)}));let r=!0;return t.forEach((t=>{const o=e.offer.features.some((e=>e===t));return r=r&&o,r})),r})(e),te=35.6817,re=139.75388;var oe,ae,ne,se,ce,ie;C(n,'.map__filters'),C(i,'.ad-form'),oe=()=>{E(i,'.ad-form')},k=L.map('map-canvas').on('load',(()=>{oe()})).setView({ lat:35.6817,lng:139.75388 },10),L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(k),ae=e=>{u.value=e.lat.toFixed(5)+', '+e.lng.toFixed(5)},w=I(te,re,z,!0).on('moveend',(e=>{V=e.target.getLatLng(),ae(V)})),w.addTo(k),(()=>{const e=q.getAttribute('minlength'),t=q.getAttribute('maxlength');q.addEventListener('input',(()=>{const r=q.value.length;r<e?q.setCustomValidity('Еще '+(e-r)+' символов'):r>t?q.setCustomValidity('Удалите '+(r-t)+' символов'):q.setCustomValidity(''),q.reportValidity()}))})(),h.addEventListener('change',(()=>{const e=b();v.setAttribute('min',e),v.setAttribute('placeholder',e),v.value&&(v.value<e?v.setCustomValidity('Цена за указанный тип жилья не может быть ниже '+e):v.setCustomValidity(''),v.reportValidity())})),v.addEventListener('input',(()=>{if(v.value){const e=parseInt(v.getAttribute('min'),10);v.value<e?v.setCustomValidity('Цена за указанный тип жилья не может быть ниже '+e):v.setCustomValidity(''),v.reportValidity()}})),[S,_].forEach((e=>{e.addEventListener('change',(()=>{(()=>{switch(S.value){case t[0]:return[r[3]];case t[3]:return[r[0],r[1],r[2]];case t[2]:return[r[1],r[2]];case t[1]:return[r[2]]}})().some((e=>e===_.value))?_.setCustomValidity(''):_.setCustomValidity('Неподходящее значение'),_.reportValidity()}))})),u.value='35.6817, 139.75388',u.setAttribute('readonly','readonly'),[g,f].forEach((e=>{e.addEventListener('change',(e=>{e.target===f?g.value=f.value:f.value=g.value}))})),[p,l].forEach((t=>{const r=t===l;t.addEventListener('change',(()=>{t.setCustomValidity(''),Array.from(t.files).forEach((o=>{const a=o.name.toUpperCase();return e.some((e=>a.endsWith(e)))?((e,t)=>{const r=new FileReader;r.addEventListener('load',(()=>{t?d.src=r.result:(e=>{const t=document.createElement('img');t.src=e,t.setAttribute('width','40'),t.setAttribute('height','44'),t.alt='Фотография жилья',m.appendChild(t)})(r.result)})),r.readAsDataURL(e)})(o,r):t.setCustomValidity('Неверный формат изображения')})),t.reportValidity()}))})),ne=(e,t,r)=>{var o,a;o=t,a=r,fetch('https://22.javascript.pages.academy/keksobooking',{ method:'POST',body:e }).then((e=>{e.ok?o():a()})).catch((()=>{a()}))},se=w,i.addEventListener('submit',(e=>{e.preventDefault();const t=new FormData(e.target);ne(t,(()=>{(()=>{const e=document.querySelector('#success').content.querySelector('.success').cloneNode(!0);document.addEventListener('keydown',(t=>{27===t.keyCode&&e.remove()}),{ once:!0 }),document.addEventListener('click',(()=>{e.remove()}),{ once:!0 }),e.style.zIndex=400,document.querySelector('main').appendChild(e)})(),A(se,35.6817,139.75388)}),x)})),ce=e=>{D(e.slice(0,10),O),E(n,'.map__filters'),((e,t,r,o)=>{y.addEventListener('click',(()=>{A(e,t,r),Array.from(n.children).forEach((e=>{e===s?Array.from(c).forEach((e=>{e.checked=!1})):e.value='any'})),o()}))})(w,te,re,(()=>D(e,O))),((e,t,r)=>{Array.from(K).concat(Array.from($)).forEach((o=>{o.addEventListener('change',(()=>{let o=((e,t)=>{const r=[];for(let o=0;o<e.length&&r.length!==t;o++)ee(e[o])&&r.push(e[o]);return r})(e,r);t(o)}))}))})(e,(e=>{var t;t=()=>{D(e,O)},clearTimeout(P),P=setTimeout(t,500)}),10)},ie=e=>((e,t)=>{const r=document.createElement('div');r.style.zIndex=100,r.style.position='absolute',r.style.left=0,r.style.top=0,r.style.right=0,r.style.padding='10px 3px',r.style.fontSize='30px',r.style.textAlign='center',r.style.backgroundColor='red',r.textContent=t,document.body.append(r),setTimeout((()=>{r.remove()}),2e3)})(0,e),fetch('https://22.javascript.pages.academy/keksobooking/data').then((e=>{if(200===e.status)return e.json();throw new Error('Не удалось получить данные')})).then((e=>{ce(e)})).catch((e=>{ie(e)}))})()
//# sourceMappingURL=main.bundle.js.map
