const $template = document.createElement('template');
$template.innerHTML = `
<div class="user-container">
      <div class="user-avatar"></div>
      <div class="info">
        <div class="user-name"><h3>John Doe</h3></div>
        <div class="user-gender">Male</div>
        <div class="user-info">
            <div class="country">Vietnam</div>
            <div class="phoneNumber">56546265656</div>
        </div>
        <div class="user-favorites">
  
        </div>
      </div>
    </div>
`;

export default class UserContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$name = this.querySelector('.user-name');
        this.$gender = this.querySelector('.user-gender');
        this.$country = this.querySelector('.country');
        this.$phoneNumber = this.querySelector('.phoneNumber');
        this.$favorites = this.querySelector('.user-favorites');
        this.$avatar = this.querySelector('.user-avatar')
    }

    static get observedAttributes() {
        return ['name', 'gender', 'country', 'phoneNumber', 'favorites', 'avatar']
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'user-name') {
            this.$name = newValue;
        } else if(attrName == 'user-gender') {
            this.$gender = newValue;
        } else if(attrName == 'country') {
            this.$country = newValue;
        } else if(attrName == 'phoneNumber') {
            this.$phoneNumber == newValue;
        } else if(attrName == 'user-favorites') {
            this.$favorites = newValue;
        } else if(attrName == 'user-avatar') {
            this.$avatar = newValue;
        }
        
    }
}

window.customElements.define('user-container', UserContainer);