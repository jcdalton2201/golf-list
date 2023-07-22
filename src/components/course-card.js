import { html, css, LitElement } from 'lit';

export default class CourseCard extends LitElement {
  static styles = css`
    .card {
      width: 300px;
      border-radius: 8px 8px 0px 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      background:white;
      display:flex;
      flex-direction: column;
      min-height: 500px;
      max-height: 500px;
      height: 100%;
    }

    .image {
        height: 200px;
        object-fit: cover;
        border-radius: 8px 8px 0 0;
        aspect-ratio: 3/2;
    }

    .name {
      font-size: 20px;
      font-weight: bold;
      margin: 8px;
    }

    .description {
      margin: 8px;
      height: inherit;
      font-size: .85rem;
    }

    .rating {
        text-align: right;
        padding: 0 8px 8px 0;
        font-family: 'Lumanosimo', cursive;
    }
  `;

  static properties = {
    imageUrl: { type: String },
    name: { type: String },
    description: { type: String },
    rating: { type: Number },
  };

  render() {
    return html`
      <div class="card">
        <img class="image" src="${this.imageUrl}" alt="Card Image" />
        <div class="name">${this.name}</div>
        <div class="description">${this.description}</div>
        <div class="rating">${this.rating}</div>
      </div>
    `;
  }
}

customElements.define('course-card', CourseCard);