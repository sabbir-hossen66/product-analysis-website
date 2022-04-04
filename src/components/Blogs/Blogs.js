import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (

        <ul>
            <li className='api-design'>
                Context-api : context is also touted as an easier.lighter approach to state management using redux. redux has it's disadvantages and that's why it's important to know what context api gives us the redux doesn't  React.create Context() returns a consumer and a provider.Provider is a component.Consumer as it so happens is a component that consumers and uses the state.
            </li><br />
            <li className='semantic-design'>
                Semantic tag: html is a markup language.here, there are different kind of tag.semantic is one of them.such as- .*article,
                *aside.
                *footer.
                *header.
                *nav-.
                *main. etc are the semantic tag
            </li>
        </ul>


    );
};

export default Blogs;