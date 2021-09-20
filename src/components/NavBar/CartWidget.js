import { FaBeer } from 'react-icons/fa';
const CartWidget = (props) => {
    const {href,className,src} = props;
    return (
        <a href={href}><img className={className} src={src} alt="dazos"/></a>
    )
}

export default CartWidget;