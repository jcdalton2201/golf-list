import { LitElement, html, css } from 'lit';
export default class CourseList extends LitElement {
  static styles = css`
  div {
    color: white;
  }
  `
    constructor() {
        super();
    }
    static get properties() {
        return {
        };
    }
    
    render(){
        console.log('we render');
        return html`
        <div>Todo</div>
        `;
    }
    
}
customElements.define('course-list', CourseList);