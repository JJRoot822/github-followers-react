const GithubUser = (props) => {
  return (
    <div className="user">
      <a href={props.userProfile} title={`${props.profileName}'s Profile`}>
        <img src={props.avatarUrl} alt="" />
      </a>
      <span>{props.profileName}</span>
    </div>
  );
};
