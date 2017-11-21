
export class golfRadioIcon extends HTMLElement {
  constructor(){
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }
  connectedCallback(){
    this._shadowRoot.innerHTML = tempHtml;
    this.radio = this._shadowRoot.querySelector('[name="sort-all"]');
    this._setValue();
    [...this._shadowRoot.querySelectorAll('a')].map((item)=>{
      item.addEventListener('click',(event)=>{
        if(event.target.previousElementSibling.value !== this.value){
          this.dispatchEvent(new CustomEvent('change',{detail:event.target.previousElementSibling.value}));
        }
        event.target.previousElementSibling.checked = true;
      });
    });
    // this._addListeners();
  }
  disconnectedCallback(){

  }
  attributeChangedCallback(){

  }
  adoptedCallback(){

  }
  get value() {
    const item = [...this._shadowRoot.querySelectorAll('input')].filter((item) =>{
      return item.checked;
    });
    if(item[0]){
      return item[0].value;
    }
    return undefined;
  }
  set value(_value){

    if(_value){
      this.setAttribute('value',_value);
    } else {
      this.removeAttribute('value');
    }
    this._setValue();
  }
  _setValue(){
    [...this._shadowRoot.querySelectorAll('input')].map((item)=>{
      item.checked =  false;
      if(item.value === this.getAttribute('value')){
        item.checked = true;
      }
    });
  }
  _addListeners(){
    [...this._shadowRoot.querySelectorAll('input')].forEach((item)=>{
      item.addEventListener('change',()=>{
        this.dispatchEvent(new Event('change'));
      });
    });
  }

}
if(!customElements.get('golf-radio-icon')){
  customElements.define('golf-radio-icon', golfRadioIcon);
}
