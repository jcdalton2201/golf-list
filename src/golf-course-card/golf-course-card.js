
export class golfCourseCard extends HTMLElement {
  constructor(){
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }
  connectedCallback(){
    this._shadowRoot.innerHTML = tempHtml;
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
