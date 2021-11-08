export default function UserInfo(props){
    const {user} = props
    return (
        <div>
            <h2>Mis Datos</h2>
            <h5>{user.displayName}</h5>
            <h5>{user.email}</h5>
        </div>
    )
}   