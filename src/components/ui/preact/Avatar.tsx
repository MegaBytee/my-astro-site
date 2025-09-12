
interface Props {
    src: string;
    alt?: string;
    className?: string;
}
export default function Avatar(props: Props) {
    return (

        <div className="avatar">
            <div className={props.className}>
                <img src={props.src} />
            </div>
        </div>


    );
}
