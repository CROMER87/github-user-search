type Props = {
    text: String;
    content: String;
}


const UserInfo = ({ text, content }: Props) => (

    <div>
        <h6 className="text-userinfo">
            <strong>{text}</strong>&nbsp;
             {content}
        </h6>
    </div>


);

export default UserInfo;