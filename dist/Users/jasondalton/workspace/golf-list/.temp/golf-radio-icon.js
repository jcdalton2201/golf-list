
export class golfRadioIcon extends HTMLElement {
  constructor(){
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
  }
  connectedCallback(){
    this._shadowRoot.innerHTML = `<style>input {
  position: absolute;
  opacity: 0; }
  input:checked + .label {
    color: white;
    text-shadow: 2px 2px 1px #b69a9a; }

.icon-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.8);
  font-size: 3rem;
  font-family: 'Vollkorn SC', serif;
  text-shadow: 2px 2px 1px #3d3a3a; }
  .icon-item a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8); }
    .icon-item a:visited {
      color: rgba(0, 0, 0, 0.8);
      text-decoration: none; }

@media only screen and (min-device-width: 420px) {
  .icon-item {
    padding: 0 25px; } }

.label {
  cursor: pointer; }
  .label:hover {
    color: rgba(0, 0, 0, 0.5); }
</style><div class="icon-item">
  <div class="All">
    <input type="radio" name="sort-all" value="rank">
    <a href="javascript:void(0)" class="label">
      All
    </a>
  </div>
  <div class="Golf">
    <input type="radio" name="sort-all" value="golf">
    <a href="javascript:void(0)" class="label">
      golf
    </a>
  </div>
  <div class="Digest">
    <input type="radio" name="sort-all" value="digest">
    <a href="javascript:void(0)" class="label">
      Digest
    </a>
  </div>
</div>`;
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
