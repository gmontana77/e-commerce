import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'cakes',
                    imageUrl: 'https://i.ibb.co/1Rmzd39/pexels-photo-140831.png',
                    id: 1,
                    linkUrl: 'cakes'
                },
                {
                    title: 'sandwitches',
                    imageUrl: 'https://i.ibb.co/JnjMcgZ/pexels-photo-5337811.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'smoothies',
                    imageUrl: 'https://i.ibb.co/stPKmFW/pexels-photo-2045362.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'snacks',
                    imageUrl: 'https://i.ibb.co/S6MkrDg/pexels-photo-2103947.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'drinks',
                    imageUrl: 'https://i.ibb.co/QdD3nrJ/pexels-photo-316891.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        };
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;