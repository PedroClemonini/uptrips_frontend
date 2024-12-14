function UserRow({ id, name, email, phone, cpf, rg, birth, onEdit, onDelete }) {
    return (
      <div className="userRow">
        <span>{id}</span>
        <span>{name}</span>
        <span>{email}</span>
        <span>{phone}</span>
        <span>{cpf}</span>
        <span>{rg}</span>
        <span>{birth}</span>
        <span>●●●●●●</span>
        <div className="actions">
          <button onClick={onEdit}>Editar</button>
          <button onClick={onDelete}>Excluir</button>
        </div>
      </div>
    );
}
  
export default UserRow;
