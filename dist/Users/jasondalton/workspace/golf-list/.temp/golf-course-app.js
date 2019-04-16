import {rankings} from './course-rankings.js';
import './golf-course-card.js';
import './golf-radio-icon.js';
class golfCourseApp extends HTMLElement {
  constructor(){
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
    this.sortItem = 'rank';
  }
  connectedCallback(){
    this._shadowRoot.innerHTML = `<style>golf-course-card {
  margin: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08); }
  golf-course-card:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08); }

.list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  justify-content: center; }

h1 {
  text-align: center;
  font-size: 4rem;
  font-family: 'Vollkorn SC', serif;
  color: whitesmoke;
  text-shadow: 2px 2px 1px #b69a9a; }
</style><h1>Top 20 Courses</h1>
<golf-radio-icon value='rank'>
</golf-radio-icon>
<div class='list'></div>

`;
    this.icons = this._shadowRoot.querySelector('golf-radio-icon');
    this.icons.addEventListener('change',(event)=>{
      console.log(event);
      this.sortItem = event.detail;
      this.__buildHtml();
    }
  );
    this.__buildHtml();

  }
  disconnectedCallback(){

  }
  attributeChangedCallback(){

  }
  adoptedCallback(){

  }
  __sortGolf(prev, current){
    return parseInt(prev[this.sortItem]) - parseInt(current[this.sortItem]);
  }
  __buildHtml(){
    const baseHtml = rankings.sort(this.__sortGolf.bind(this)).slice(0,20).map((item)=>{
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
