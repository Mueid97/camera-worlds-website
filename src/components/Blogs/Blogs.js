import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs-section'>
            <div className='context-api'>
                <h1>What is Contect Api?</h1>
                <p>Context API is the way to create global variables that can be passed around the component tree. Context API is an alternative to passing props manually in a component tree. Something that is also called Prop drilling. The React Context API is a way for a React app to effectively produce global variables that can be passed around. React Context is a way to manage state globally. </p>
            </div>
            <div className='symentric tag'>
                <h1>What is Semantic tags?</h1>
                <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that you are using that text as an example of the code for the purposes of an article or online tutorial.
                Using semantic tags gives you many more hooks for styling your content, too. Perhaps today you prefer to have your code samples display in the default browser style, but tomorrow, you might want to call them out with a gray background color; later still, you might want to define the precise mono-spaced font family or font stack to use for your samples. You can do all of these things easily by using semantic markup and smartly applied CSS.</p>
            </div>
        </div>
    );
};

export default Blogs;