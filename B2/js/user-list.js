import UserContainer from "./user-container.js";

const $template = document.createElement('template');
$template.innerHTML = `
    <div class="user-list">
    </div>
`;

export default class UserList extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$list = this.querySelector('.user-list')
    }
    

    static get observedAttributes() {
        return ['users'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'users') {
            console.log(newValue);
            let data = JSON.parse(newValue);
            
            for(let userData of data) {
                let $userContainer = new userContainer();
                $userContainer.setAttribute('id', userData.id);
                $userContainer.setAttribute('name', userData.name);
                $comicContainer.setAttribute('gender', userData.gender);
                $comicContainer.setAttribute('country', userData.country);
                $comicContainer.setAttribute('favorites', userData.favorites);
                $comicContainer.setAttribute('avtar', userData.avatar);

                this.$list.appendChild($UserContainer);
            }
        }
    }
}

window.customElements.define('comic-list', ComicList);