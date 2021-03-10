

type Props = {
    text: String;
    content: String;
}


const UserSummary = ({ text, content }: Props) => (

    <div>
        <h6 className="text-summary">
            {text}
            {content}
        </h6>
    </div>


);

export default UserSummary;