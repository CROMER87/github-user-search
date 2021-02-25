import './styles.scss';

type Props = {
    text: string;
}

const Button = ({text}: Props) => (
   
        <button className="btn">
            {text}
        </button>   
    
);

export default Button;