import '../App.css'

const UserGreeting = (props) =>{
    return(
        <>
            <p className="teste">
                Boa noite
                {props.sexo == 'M' ? ' Sr. ' : ' Sra. '}
                {props.nome}
            </p>
        </>
    )
}
export default UserGreeting;