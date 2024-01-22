import './App.css';

const posts = [
    {
        title: 'React',
        key: 1,
        author: 'florian.muehleder@gmail.com',
        text: 'React ist eine JavaScript-Programmbibliothek zur Erstellung von webbasierten Benutzeroberflächen. Komponenten werden in React hierarchisch aufgebaut und können in dessen Syntax als selbst definierte JSX-Tags repräsentiert werden.'
    },
    {
        title: 'Angular',
        key: 2,
        author: 'max.muster@gmail.com',
        text: 'Angular ist ein TypeScript-basiertes Front-End-Webapplikationsframework. Es wird von einer Community aus Einzelpersonen und Unternehmen, angeführt durch Google, entwickelt und als Open-Source-Software publiziert.'
    },
    {
        title: 'Vue',
        key: 3,
        author: 'john.doe@gmail.com',
        text: 'Vue.js ist ein clientseitiges JavaScript-Webframework zum Erstellen von Single-Page-Webanwendungen nach dem MVVM-Muster, es kann allerdings auch in Multipage-Webseiten für einzelne Abschnitte verwendet werden. Ab Version 2.0 unterstützt es auch serverseitiges Rendern.'
    },
];

function App() {
    return (
        <div className="app">
            <BlogContainer/>
        </div>
    );
}

function BlogContainer() {
    const bloglist = posts.map(post => <BlogPost key={post.key} post={post}/>);
    return (
        <div className="blog-container">
            {bloglist}
        </div>
    )
}

function BlogPost({post}) {
    return (
        <li className="blog-post">
            <div className="blog-post-content">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-text">{post.text}</p>
                <p className="blog-author">Written by {post.author}</p>
            </div>
        </li>
    );
}

export default App;
