
import { html, css, LitElement } from 'lit';
import './course-card.js';
const tagName = 'courses-card'
export  class CoursesCard extends LitElement {
  static styles = css`
  .course-list {
    display: flex;
    gap: 16px;
    padding: 16px 8px;
    flex-wrap: wrap;
    justify-content: center;
  }
  `;

  static properties = {
    cards:{
      type: Array
    }
  };
  constructor(){
    super();
    this.cards = [];
  }
  async firstUpdated(){
    const request = await fetch('/golf-list/data/golfcourse.json');
    const data = await request.json();
    this.cards = data;
    console.log(this.cards);
  }
  render() {
    // const cards = await this.fetchData();
    return html`<div class='course-list'>
    ${this.cards.map((card) => html`<course-card name=${card.name} imageUrl=${card.url} description=${card.description}></course-card>
    </div>`)}
    `;
  }
}

if(!customElements.get(tagName)){
    customElements.define(tagName, CoursesCard);
}