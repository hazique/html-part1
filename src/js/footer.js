import React from 'react';
import '../style/style.css';

export default function Footer () {
    return (
        <div class='footer'>
            <ul>
                <li>
                    <a>GitHub</a>
                </li>
                <li>
                    <a>Twitter</a>
                </li>
                <li>
                    <a>Examples</a>
                </li>
                <li>
                    <a>About</a>
                </li>
            </ul>
            <p>Designed and built with all the love in the world by @mdo and @fat. Maintained by the core team with the help of our contributors.</p>
            <p>Currently v4.2.1. Code licensed MIT, docs CC BY 3.0.</p>
        </div>
    );
}