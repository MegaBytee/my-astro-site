interface Props {
  image: string;
  alt?: string;
  className?: string;
  attrs: string;
  source: string;
}

export default function ImageCover(props: Props) {
  function fromSource() {
    return props.source != "me";
  }

  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <img className={props.className} src={props.image} alt={props.alt} />
      {fromSource() ? (
        <a
          target="_blank"
          className="btn btn-link underline text-emerald-300"
          href={props.source}
        >
          Photo by {props.attrs}
        </a>
      ) : null}
    </div>
  );
}
