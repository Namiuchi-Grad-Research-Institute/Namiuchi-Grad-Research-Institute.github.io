'use strict';

export default function Footer(): JSX.Element {
    return (
        <footer id="l-footer">
            <small className="footer-copylight">
                Copyright &copy;2019-{new Date().getFullYear()} Access Mirai / NGRI. All rights reserved.
            </small>
        </footer>
    );
}
