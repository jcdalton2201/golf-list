import { LitElement, html, css } from 'lit';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

const tagName = 'tilsyn-header';
export class TilsynHeader extends LitElement {
    static styles = css`
    header {
        height: 120px;
        padding: 5px;
        align-items: center;
        background: linear-gradient(0.25turn,#43462f,#858f53,#43462f);
    }
    .sidebar {
        color: black;
        display: grid;
        justify-content: center;
    }
    .sidebar img {
        justify-self: center;
    }
    .sidebar .title {
        font-size: 2.75rem;
        font-family: 'Zilla Slab', serif;
        color: white;
        border-bottom: white 1px solid;
    }
    .logoImage {
        height: 70px;
    }
    .user {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            height: 50px;
            border-radius: 50%;
            width: 50px;
        }
    }
    .name {
        color: white;
        font-size:2rem;
    }
    .logo {
        display: flex;
        align-items: center;
    }
    a {
        text-decoration: none;
        color: inherit;
        
    }
    
    `;
  constructor(){
    super();
    this.userHtml = '<button>Sign In</button>'
  }
  render() {
    return html`
    <header class='sidebar'>
        <img src='/golf-list/images/wiggle.webp' alt="wiggle"></img>
        <div class='title'><a href='/golf-list/'>Dalton Golf Travels</a></div>
    </header>
    `;
  }
}


customElements.define(tagName, TilsynHeader);