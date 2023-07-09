import { LitElement, html, css } from 'lit';
export default class CourseList extends LitElement {
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
        List Me
        `;
    }
    
}
customElements.define('course-list', CourseList);