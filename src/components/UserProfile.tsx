const UserProfile = (props: any) => {
    const user = props.userName

  return (
    <div className="user-container">  
        <img src={user.avatar_url} alt={user.login} />
        <div className="user-details">
            <h1 className="user-name">{user.name}</h1>
            <div className="user-detail-follow">
                <span>Followers</span>
                <span>Following</span>
                <span>{user.followers}</span>
                <span>{user.following}</span>
            </div>
        </div>
    </div>
  )
}

export default UserProfile