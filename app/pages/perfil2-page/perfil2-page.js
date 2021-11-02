import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, css } from 'lit-element';
import '@cells-body/cells-body/cells-body.js';
import '@cells-practica/cells-practica/cells-practica.js';
import '@cells-list/cells-list/cells-list.js';

/* eslint-disable new-cap */
class Perfil2Page extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'perfil2-page';
     
  }

  static get properties() {
    return {
       item1:{type: Array},
       item2:{type:Array},
    };
  }


  constructor() {
    super();
      this.item1=[
        'Lorem ipsum dolor sit amet,',
        'consectetur adipsicing elit, sed do',
        'eiusmod tempor incidunt.'
      ]
      this.item2=[
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet'
      ]
  }

  _selectedHome1(){
    super.navigate('/perfil1');
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    cleanUp();
 }
  render() {
    return html`
    <cells-practica @action-selected-header="${this._selectedHome1}"></cells-practica>
    <cells-body .item1="${this.item1}" .item2="${this.item2}"></cells-body>
      `;
  }

  static get styles() {
    return css`
   
    `;
  }
}

window.customElements.define(Perfil2Page.is, Perfil2Page);