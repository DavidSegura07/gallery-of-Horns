/* The above class is a React component that renders a header with the text "Gallery of Horns". */
// dependency injection
import React from "react";


class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Gallery of Horns
                </h1>
                <p>Welcome to the Gallery of Horns, a one-of-a-kind digital exhibit that showcases a curated collection of magnificent horned beasts. Each click leads you deeper into a realm where the creatures grow increasingly captivating and intimidating. Starting with the innocent UniWhal, every successive image reveals a beast more formidable and awe-inspiring than the last. As you navigate through the gallery, you will have the opportunity to mark your favorite creatures. Dare to venture through our gallery, but be warned: the beasts get scarier by the picture. An interactive experience that is equal parts beauty and adrenaline, the Gallery of Horns is not for the faint of heart.</p>
            </header>    
        )
    }
}

export default Header;
