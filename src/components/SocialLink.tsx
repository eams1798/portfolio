const SocialLink = ({url, icon}: {
  url: string, icon: JSX.Element
}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {icon}
    </a>
  );
}

export default SocialLink;