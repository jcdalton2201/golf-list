import {rankings} from './course-rankings.js';
import './golf-course-card.js';
class golfCourseApp extends HTMLElement {
  constructor(){
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }
  connectedCallback(){
    this._shadowRoot.innerHTML = tempHtml;
    this.__buildHtml();

  }
  disconnectedCallback(){

  }
  attributeChangedCallback(){

  }
  adoptedCallback(){

  }
  __buildHtml(){
    const baseHtml = rankings.map((item)=>{
      let played = '';
      if(item.played){
        played = 'played';
      }
      return `
      <golf-course-card ${played} rank='${item.rank}' name='${item.name}' golf='${item.golf}' digest='${item.digest}' >
        <div class="" slot='image'>
          <img  src="${item.img}"  height="60" width="60" alt="">
        </div>
      </golf-course-card>
      `;
    });
    this._shadowRoot.querySelector('.list').innerHTML = baseHtml.join('');
  }

}
if(!customElements.get('golf-course-app')){
  customElements.define('golf-course-app', golfCourseApp);
}
