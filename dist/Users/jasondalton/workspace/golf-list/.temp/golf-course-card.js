
export class golfCourseCard extends HTMLElement {
  constructor(){
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }
  connectedCallback(){
    this._shadowRoot.innerHTML = `<style>.course {
  width: 300px;
  height: 60px;
  background-color: #FFFFFF;
  position: relative;
  border: 1px solid #BBB;
  background: #EEE; }
  .course .ribbon {
    position: absolute;
    right: -5px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 75px;
    height: 75px;
    text-align: right;
    display: none; }
    .course .ribbon span {
      font-size: 10px;
      font-weight: bold;
      color: #FFF;
      text-transform: uppercase;
      text-align: center;
      line-height: 20px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      width: 100px;
      display: block;
      background: #79A70A;
      background: linear-gradient(#9BC90D 0%, #79A70A 100%);
      box-shadow: 0 3px 10px -5px black;
      position: absolute;
      top: 19px;
      right: -21px; }
      .course .ribbon span:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 100%;
        z-index: -1;
        border-left: 3px solid #79A70A;
        border-right: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-top: 3px solid #79A70A; }
      .course .ribbon span:after {
        content: "";
        position: absolute;
        right: 0px;
        top: 100%;
        z-index: -1;
        border-left: 3px solid transparent;
        border-right: 3px solid #79A70A;
        border-bottom: 3px solid transparent;
        border-top: 3px solid #79A70A; }
  .course .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 40px 20px;
    grid-template-areas: "course-row course-row course-row course-row course-image" "rank-row rank-row rank-row rank-row rank-image"; }
    .course .content .course-row {
      grid-area: course-row;
      display: flex;
      font-size: 1.1rem;
      color: #6d6262;
      align-items: center;
      justify-content: space-between;
      padding: 0 5px; }
      .course .content .course-row .rank {
        font-size: 1.5rem; }
    .course .content .rank-row {
      grid-area: rank-row;
      display: flex;
      color: #6d6262;
      align-items: center;
      justify-content: space-between;
      padding: 0 5px; }
    .course .content .course-image {
      grid-area: rank-image;
      margin-top: -40px; }
</style><div style="width:300px;height:60px;background-color: #FFFFFF;" class="course">
  <div class="ribbon">
    <span>Played</span>
  </div>
  <div class="content">
    <div class="course-row">
      <div class='rank'>#1</div>
      <div class='name'>Pebble Beach</div>
    </div>
    <div class="rank-row">
      <div class="golf">
        Golf #1
      </div>
      <div class="digest">Digest #1</div>
    </div>
    <div class="course-image">
      <slot name='image'></slot>
    </div>
  </div>
</div>`;
    if(this.hasAttribute('played')){
      this._shadowRoot.querySelector('.ribbon').style.display = 'block';
    }
    this._shadowRoot.querySelector('.rank').innerHTML = `# ${this.getAttribute('rank')}`;
    this._shadowRoot.querySelector('.name').innerHTML = `${this.getAttribute('name')}`;
    this._shadowRoot.querySelector('.golf').innerHTML = `Golf # ${this.getAttribute('golf')}`;
    this._shadowRoot.querySelector('.digest').innerHTML = `Digest # ${this.getAttribute('digest')}`;
  }
  disconnectedCallback(){

  }
  attributeChangedCallback(){

  }
  adoptedCallback(){

  }

}
if(!customElements.get('golf-course-card')){
  customElements.define('golf-course-card', golfCourseCard);
}
